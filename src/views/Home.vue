<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post,index) in sampleBlogPost" :key="index"/>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View recent blogs</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post,index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>Never miss a post. Register now!</h2>
        <router-link class="router-button" to="#">Register for VBlog</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost.vue';
import BlogCard from '@/components/BlogCard.vue';

export default {
  name: "Home",
  components: {BlogPost, BlogCard},
  data(){
    return{
      welcomeScreen:{
        title: "Welcome",
        blogPost:"New post each week",
        welcomeScreen: true,
        photo: "1",
      },
      sampleBlogPost:[
        {
        title:"Post 1",
        blogHTML: "Blog 1",
        blogCoverPhoto: "1"
      },
      {
        title:"Post 2",
        blogHTML: "Blog 2",
        blogCoverPhoto: "2"
      }
      ],
      sampleBlogCards: [
        {BlogTitle: 'Card 1', blogCoverPhoto: '20', BlogDate: 'May 1, 2021'},
        {BlogTitle: 'Card 1', blogCoverPhoto: '21', BlogDate: 'May 1, 2021'},
        {BlogTitle: 'Card 1', blogCoverPhoto: '22', BlogDate: 'May 1, 2021'},
        {BlogTitle: 'Card 1', blogCoverPhoto: '23', BlogDate: 'May 1, 2021'},
      ]
    }
  }
};
</script>

<style scoped>
  .blog-card-wrap h3{
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }

  .updates .container{
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

  }

  .router-button{
    display: flex;
    font-size: 14px;
    text-decoration: none;
  }

  h2{
    font-weight: 300;
    font-size: 32px;
    max-width: 425px;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    
  }

  @media (min-width: 800px){
    .updates .container{
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button{
      margin-left: auto;
  }
    h2{
      text-align: initial;
      font-size: 40px;
    }
  }
</style>
