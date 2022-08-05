<template>
    <div class="create-post">
        <div class="container">
            <div :class="{invisible: !error}" class="err-message">
                <p><span>Error:</span>{{this.errorMsg}}</p>
            </div>
            <div class="blog-info">
                <input type="text" placeholder="Enter Title" v-model="blogTitle">
                <div class="upload-file">
                    <label for="blog-photo">Upload Cover Photo</label>
                    <input type="file" ref="blogPhoto" @change="fileChange" id="blog-photo" accept=".png, .jpg, .jpeg"/>
                    <button class="preview" :class="{'button-inactive' : !this.$store.state.blogPhotoFileUrl }">Preview Photo</button>
                    <span>File Chosen: {{this.$store.state.blogPhotoName}}</span>
                </div>
            </div>
            <div class="editor">
                <vue-editor :editorOptions="editorSettings" v-model="blogHTML" useCustomImageHandler />
            </div>
            <div class="blog-actions">
                <button>Publish Blog</button>
                <router-link class="router-button" to="#">Post Preview</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Quill from 'quill';
//import { ImageResize } from 'quill-image-resize-module';
 
//Quill.register('modules/imageResize', ImageResize);
window.Quill = Quill;
const ImageResize = require('quill-image-resize-module').default;
Quill.register('modules/ImageResize', ImageResize);

export default {
    name:'CreatePost',
    data(){
        return{
            file: null,
            error: null,
            errorMsg: null,
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
                return this.$store.state.blogTitle

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
        fileChange(){
            this.file = this.$refs.blogPhoto.files[0];
            const fileName = this.file.name;
            this.$store.commit('fileNameChange', fileName);
            this.$store.commit('createFileUrl', URL.createObjectURL(this.file));
        }
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