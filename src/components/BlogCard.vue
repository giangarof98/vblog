<template>
    <div class="blog-card">
        <div v-if="editPost" class="icons">
            <div class="icon" @click="editBlog">
                <font-awesome-icon class="edit" icon="edit" />
            </div>
            <div class="icon" @click="deletePost">
                <font-awesome-icon class="delete" icon="trash" />
            </div>
        </div>
        <img :src="post.blogCoverPhoto" alt="">
        <div class="info">
            <h4>{{post.blogTitle}}</h4>
            <h6>{{new Date(post.blogDate).toLocaleString("en-us", {dateStyle:"long"}) }}</h6>
            <router-link class="link" :to="{name: 'ViewBlog', params:{blogid: this.post.blogID}}">
                View the post >
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"BlogCard",
    props:["post"],
    components:{},
    computed:{
        editPost(){
            return this.$store.state.editPost;
        },
        user(){
            return this.$store.state.user;
        },
        blogPosts(){
            return this.$store.state.blogPosts;
        },
    },
    methods:{
        deletePost(){
            this.$store.dispatch('deletePost', this.post.blogID);
        },
        editBlog(){
            this.$router.push({name:'EditBlog', params: {blogid: this.post.blogID} });
        }
    }
}
</script>

<style scoped>
    .blog-card{
        position: relative;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        background-color: #fff;
        min-height: 420px;
        transition: .5s ease all;
    }

    .blog-card:hover{
        transform: rotateZ('1deg') scale(1.01);
        box-shadow: 0 4px 6px -1px;
    }

    .icons{
        display: flex;
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 99;
    }

    .icon{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: #fff;
        transition: 0.5s ease all;

    }

    .icon:hover {
       background-color: #303030;
       color: #fff;
    }

    .icon:nth-child(1){
        margin-right: 8px;
    }

    .delete, .edit{
        pointer-events: none;
        height: 15px;
        width: auto;
    }

    img{
        display: block;
        border-radius: 8px 8px 0 0;
        z-index: 1;
        width: 100%;
        min-height: 200px;
        object-fit: cover;
    }

    .info{
        display: flex;
        flex-direction: column;
        height: 100%;
        z-index: 3;
        padding: 32px 16px;
        color: #000;

    }

    .info h4{
        padding-bottom: 8px;
        font-size: 20px;
        font-weight: 300;
    }

    .info h6{
        font-weight: 400;
        font-size: 12px;
        padding-bottom: 16px;
    }

    .info .link{
        display: inline-flex;
        align-items: center;
        margin-top: auto;
        font-weight: 500;
        padding-top: 20px;
        font-size: 12px;
        padding-bottom: 4px;
        transition: .5s ease-in all;

    }

    .info .link:hover{
        color: #303030;
    }

</style>