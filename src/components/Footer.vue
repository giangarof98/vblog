<template>

    <footer>
        <div class="container">
            <div class="left">
                <div class="col-1">
                    <router-link class="header" :to="{name:'Home'}">FireBlogs</router-link>
                        <!-- <ul>
                            <li>
                            <a href="#"><font-awesome-icon icon="" class="svg-icon"/></a>
                            </li>
                            <li>
                            <a href="#"><font-awesome-icon icon="" class="svg-icon"/></a>
                            </li>
                            <li>
                            <a href="#"><font-awesome-icon icon="" class="svg-icon"/></a>
                            </li>
                            <li>
                            <a href="#"><font-awesome-icon icon="" class="svg-icon"/></a>
                            </li>
                        </ul> -->
                </div>
                <div class="col-2">
                    <ul>
                        <router-link class="link" :to="{name:'Home'}">Home</router-link>
                        <router-link class="link" :to="{name:'Blogs'}">Blogs</router-link>
                        <router-link v-if="admin" class="link" :to="{name:'CreatePost'}">Create Post</router-link>
                        <router-link v-if="!user" class="link" :to="{name:'Login'}">Login In / Register</router-link>
                    </ul>
                </div>
            </div>
            <div class="right">
                <p>Copyright 2021 All Rights Reserved</p>
            </div>
        </div>
    </footer>
    
</template>

<script>
export default {
    computed: {
        user(){
            return this.$store.state.user;
        }, 
        admin(){
            return this.$store.state.profileAdmin;
        }
    }
}
</script>

<style scoped>

footer{
    margin-top: auto;
    padding: 100px 25px;
    background-color: #303030;
}

.container{
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.container > div{
    display: flex;
    flex: 1;
}

.left{
    gap: 32px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.header{
    text-align: center;
    font-size: 24px;
    color: #fff;
    margin-bottom: 16px;
    text-decoration: none;
    font-weight: 600;
}

ul{
    gap: 16px;
    list-style: none;
    display: flex;
}

.col-1, .col-2{
    gap: 32px;
    display: flex;
    flex: 1;
}

.col-1{
    flex-direction: column;
}

.col-1 h2{
    text-align: center;
}

.col-1 ul{
    margin-top: auto;
}

.col-1 ul li{
    display: flex;
    align-items: center;
}

.col-2 ul{
    height: 100%;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;

}

.col-2 ul .link{
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
}

.right{
    gap: 32px;
    color: #fff;
    align-items: center;
    flex-direction: column;
}

p{
    margin-top: auto;
}

@media (min-width:800px){
    .container{
        flex-direction: row;
        gap: 0px;
    }

    .left{
        flex-direction: row;
        align-items: initial;
        gap: 0;
    }

    .header{
        text-align: initial;
    }

    .col-1, .col-2{
        gap: 0;
    }

    h2{
        text-align: initial;
    }

    .col-2 ul{
        flex-direction: column;
    }

    .right{
        align-items: flex-end;
        gap: 0;
    }
}



</style>