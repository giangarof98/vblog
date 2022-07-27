<template>
    <header>
        <nav class="container">
            <div class="branding">
                <router-link class="header" :to="{name:'Home'}">VueBlog</router-link>
            </div>
            <div class="nav-links">
                <ul v-show="!mobile">
                    <router-link class="link" :to="{name:'Home'}">Home</router-link>
                    <router-link class="link" :to="{name:'Blogs'}">Blogs</router-link>
                    <router-link class="link" to="#">Create A Post</router-link>
                    <router-link class="link" to="#">Login/Register</router-link>
                </ul>
            </div>
        </nav>
        <img @click="toggleMobileNav" v-show="mobile" class="menu-icon" :src="require('../assets/icons/bars-regular.svg')" />
        <transition name="mobile-nav">
            <ul class="mobile-nav" v-show="mobileNav">
                <router-link class="link" :to="{name:'Home'}">Home</router-link>
                <router-link class="link" :to="{name:'Blogs'}">Blogs</router-link>
                <router-link class="link" to="#">Create A Post</router-link>
                <router-link class="link" to="#">Login/Register</router-link>
            </ul>
        </transition>
    </header>
</template>

<script>
export default {
    name: "Navigation",
    components: {
    },
    data(){
        return{
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        };
    },
    created(){
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    methods:{
        checkScreen(){
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 750){
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        },
        toggleMobileNav(){
            this.mobileNav = !this.mobileNav;
        }
    },
}
</script>

<style >

img{
    height: 30px;
}

header{
    padding: 0 25px;
    box-shadow: 0 4px 6px -1px;
    z-index: 99;
}

.link{
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;
}

.link:hover{
    color: aquamarine;
}

nav{
    display: flex;
    padding: 25px 0;
}

.branding{
    display: flex;
    align-items: center;
}

.header{
    font-weight: 600px;
    font-size: 24px;
    color: #000;
    text-decoration: none;
}

.nav-links{
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
}

ul{
    margin-right: 32px;
}

.link{
    margin-right: 32px;
}

.link:last-child{
    margin-right: 0;
}

.menu-icon{
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 32px;
    width: auto;
}

.mobile-nav{
    padding: 20px;
    width: 70%;
    max-width: 250px;

    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: rgb(185, 190, 195);
    top: 0;
    left: 0;
}

.mobile-nav .link{
    padding: 15px 0;
    color: #fff;
}

.mobile-nav-enter-active, .mobile-nav-leave-active{
    transition: all 1s ease;
}

.mobile-nav-enter{
    transform: translateX(-250px);
}

.mobile-nav-enter-to{
    transform: translateX(0);
}

.mobile-nav-leave-to{
    transform: translateX(-250px);
}






</style>