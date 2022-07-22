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
</style>
