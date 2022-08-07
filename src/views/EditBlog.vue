<template>
    <div class="create-post">
        <BlogCoverPreview v-show="this.$store.state.blogPhotoPreview" />
        <Loading v-show="loading"/>
        <div class="container">
            <div :class="{invisible: !error}" class="err-message">
                <p><span>Error:</span>{{this.errorMsg}}</p>
            </div>
            <div class="blog-info">
                <input type="text" placeholder="Enter Title" v-model="blogTitle">
                <div class="upload-file">
                    <label for="blog-photo">Upload Cover Photo</label>
                    <input type="file" ref="blogPhoto" @change="fileChange" id="blog-photo" accept=".png, .jpg, .jpeg"/>
                    <button @click="openPreview" class="preview" :class="{'button-inactive' : !this.$store.state.blogPhotoFileUrl }">Preview Photo</button>
                    <span>File Chosen: {{this.$store.state.blogPhotoName}}</span>
                </div>
            </div>
            <div class="editor">
                <vue-editor :editorOptions="editorSettings" v-model="blogHTML" useCustomImageHandler @image-added="imageHandler" />
            </div>
            <div class="blog-actions">
                <button @click="updateBlog">Save Blog's Change</button>
                <router-link class="router-button" :to="{name: 'BlogPreview'}">Preview Change's</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import db from '../firebase/firebaseinit';

import BlogCoverPreview from '@/components/BlogCoverPreview'
import Loading from '@/components/Loading'

import Quill from 'quill';
window.Quill = Quill;
const ImageResize = require('quill-image-resize-module').default;
Quill.register('modules/ImageResize', ImageResize);

export default {
    name:'CreatePost',
    components: {
        BlogCoverPreview,
        Loading
    },
    data(){
        return{
            file: null,
            error: null,
            errorMsg: null,
            loading: null,
            routeID: null,
            currentBlog:null,
            editorSettings: {
                modules: {
                    ImageResize: {}
                }
            }
        }
    },
    computed: {
        profileId(){
            return this.$store.state.profileId;
        },
        blogCoverPhotoName(){
            return this.$store.state.blogPhotoName
        },
        blogTitle: {
            get(){
                return this.$store.state.blogTitle;
            },
            set(payload){
                this.$store.commit('updateBlogTitle', payload)
            },
        },
        blogHTML: {
            get(){
                return this.$store.state.blogHTML

            },
            set(payload){
                this.$store.commit('newBlogPost', payload)
            },
        },

    },
    methods:{
        openPreview(){
            this.$store.commit('openPhotoPreview')
        },
        fileChange(){
            this.file = this.$refs.blogPhoto.files[0];
            const fileName = this.file.name;
            this.$store.commit('fileNameChange', fileName);
            this.$store.commit('createFileUrl', URL.createObjectURL(this.file));
        },
        imageHandler(file, Editor, cursorLocation, resetUploader){
            const storageRef = firebase.storage().ref();
            const docRef = storageRef.child(`documents/blogPostPhotos/${file.name}`)
            docRef.put(file).on(
                "state_changed", 
                (snapshot) => {
                console.log(snapshot);
            }, 
            (err) => {
                console.log(err)
            }, 
            async () => {
                const downloadURL = await docRef.getDownloadURL();
                Editor.insertEmbed(cursorLocation, "image", downloadURL)
                resetUploader()
            })
        },
        async updateBlog(){
            const dataBase = await db.collection('blogPosts').doc(this.routeID)
            if(this.blogTitle.length !== 0 && this.blogHTML.length !== 0){
                if(this.file){
                    this.loading = true;
                    const storageRef = firebase.storage().ref();
                    const docRef = storageRef.child(`documents/BlogCoverPhotos/${this.$store.state.blogPhotoName}`)
                    docRef.put(this.file).on(
                        "state_changed",
                        (snapshot) => {
                            console.log(snapshot)
                        },
                        (err) => {
                            console.log(err)
                            this.loading = false;
                        }, 
                        async () => {
                            const downloadURL = await docRef.getDownloadURL();
                            //const timestamp = await Date.now();
                            //const dataBase = await db.collection("blogPosts").doc();

                            await dataBase.update({
                                //blogID: dataBase.id,
                                blogTitle:this.blogTitle,
                                blogCoverPhotoName: this.blogCoverPhotoName,
                                blogCoverPhoto: downloadURL,
                                blogHTML: this.blogHTML,
                                //profileId: this.profileId,
                                //date: timestamp,
                            });
                            await this.$store.dispatch('updatePost', this.routeID);
                            this.loading = false;
                            this.$router.push({name:'ViewBlog', params: {blogid:dataBase.id}})
                        }
                    )
                    return
                }
                this.loading = true;
                await dataBase.update({
                    blogHTML: this.blogHTML,
                    blogTitle: this.blogTitle,
                })
                await this.$store.dispatch('updatePost', this.routeID)
                this.loading = false;
                this.$router.push({name:'ViewBlog', params: {blogid: dataBase.id}})
                return
            }
            this.error = true;
            this.errorMsg = " Please ensure all the fields are filled."
            setTimeout(() => {
                this.error = false
            }, 5000);
            return;
        }
    },
    async mounted(){
        this.routeID = this.$route.params.blogid;
        this.currentBlog = await this.$store.state.blogPosts.filter((post) => {return post.blogID === this.routeID});
        this.$store.commit('setBlogState', this.currentBlog[0])
    }
}
</script>

<style>
.create-post{
    position: relative;
    height: 100%;
}
button{
    margin-top: 0;
}

.router-button{
    text-decoration: none;
    color: #fff;
}

label, button, .router-button{
    transition: 0.5s ease-in-out all;
    align-self: center;
    font-size: 14px;
    cursor: pointer;
    border-radius: 20px;
    padding: 12px 24px;
    color: #fff;
    background-color: #303030;
    text-decoration: none;
}

.container{
    position: relative;
    height: 100%;
    padding: 10px 25px 60px;
}

/* Error */
.invisible{
    opacity: 0 !important;
}

.err-message{
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    color: #fff;
    margin-bottom: 10px;
    background-color: #303030;
    opacity: 1;
    transition: .5s ease all;
}

.err-message p {
    font-size: 14px;
}

.err-message span{
    font-weight: 600;
    color: #fff;
}


.blog-info{
    display: flex;
    margin-bottom: 32px;
}

.blog-info input:nth-child(1){
    min-width: 300px;
}

.blog-info input{
    transition: 0.5s ease-in-out all;
    padding: 10px 4px;
    border: none;
    border-bottom: 1px solid #303030;
}

.blog-info input:focus{
    outline: none;
    box-shadow: 0 1px 0 0 #303030;
}

.uplod-file{
    flex: 1;
    margin-left: 16px;
    position: relative;
    display: flex;

}

.upload-file input{
    display: none;
}

.upload-file .preview{
    margin-left: 16px;
    text-transform: initial;
}

.upload-file span{
    font-size: 12px;
    margin-left: 16px;
    align-self: center;
}

.editor{
    height: 60vh;
    display: flex;
    flex-direction: column;
}

.editor .quillWrapper{
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.ql-container{
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: scroll;
}

.ql-editor{
    padding: 20px 16px 30px;
}

.blog-actions{
    margin-top: 32px;
}

.blog-actions button{
    margin-right: 16px;
}

</style>