<template>
    <div class="blog-wrapper" :class="{'no-user': !user}">
        <div class="blog-content">
            <h2 v-if="post.welcomeScreen">{{post.title}}</h2>
            <h2 v-else>{{post.title}}</h2>
            <p v-if="post.welcomeScreen">{{post.title}}</p>
            <p class="content-preview" v-else>{{post.blogHTML}}</p>
            <router-link class="link link-light" v-if="post.welcomeScreen" to="#">
                Login/Register <span class="arrow arrow-light"></span>
            </router-link>
            <router-link class="link link-light" v-else to="#">
                View The Post <span class="arrow arrow-light"> > </span>
            </router-link>
        </div>
        <div class="blog-photo">
            <img v-if="post.welcomeScreen" :src="require(`../assets/blogpictures/${post.photo}.jpeg`)">
            <img v-else :src="require(`../assets/blogpictures/${post.blogCoverPhoto}.jpeg`)" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "blogPost",
    props: ["post"],
    computed:{
        user(){
            return this.$store.state.user;
        }
    }
}
</script>

<style scoped>

.no-user:first-child .blog-content h2{
    color: #fff;
}

    .no-user:first-child .blog-content{
        background-color: #303030;
        color: #fff;
    }

  .blog-wrapper{
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 6px -1px;
  }

  .blog-content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 4;
      order: 2;
    }

    .blog-content div {
        max-width: 375px;
        padding: 72px 24px;
    }

    h2{
        font-size: 32px;
        font-weight: 300;
        text-transform: uppercase;
        margin-bottom: 24px;
        
    }

    p{
        font-size: 15px;
        font-weight: 300px;
        line-height: 1.7;
    }

    .content-preview{
        font-size: 13px;
        max-height: 24px;
        widows: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .link{
        display: inline-flex;
        align-items: center;
        margin-top: 32px;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
        transition: .5s ease-in all;
    }

    .link:hover{
        border-bottom-color: #303030;
    }

    .link-light:hover{
        border-bottom-color: #fff;
    }

    .blog-photo{
        order: 1;
        flex: 3;
        box-shadow: 0 4px 6px -1px;
    }

    .blog-photo img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .blog-wrapper:nth-child(even) .blog-content{
        order: 2;
    }

    .blog-wrapper:nth-child(even) .blog-photo{
        order: 1;
    }

    @media (min-width:700px){
        .blog-wrapper{
            min-height: 650px;
            max-height: 650px;
            flex-direction: row;
        }

        .blog-content{
            order: 1;
        }

        .blog-content div {
            padding: 0px 24px;
        }

        h2{
            font-size: 40px;
        }

        .blog-photo{
            order: 2;
            
        }

    }

    @media (min-width:800px){
      .blog-content{
        flex: 3;
      }
      .blog-photo{
            flex: 4;
        }
    }

</style>