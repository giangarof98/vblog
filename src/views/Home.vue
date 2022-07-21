<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post,index) in sampleBlogPost" :key="index"/>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost.vue'

export default {
  name: "Home",
  components: {BlogPost},
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
      ]
    }
  }
};
</script>
