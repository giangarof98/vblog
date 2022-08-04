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
                    <router-link v-if="admin" :to="{name:'CreatePost'}" class="link">Create A Post</router-link>
                    <router-link v-if="!user" class="link" :to="{name:'Login'}">Login/Register</router-link>
                </ul>
                <div v-if="user" class="profile" ref="profile" @click.prevent="toggleProfileMenu">
                    <span>{{this.$store.state.profileInitials}}</span>
                    <div v-show="profileMenu" class="profile-menu">
                        <div class="info">
                            <p class="initials">{{this.$store.state.profileInitials}}</p>
                            <div class="right">
                                <p>{{this.$store.state.profileFirstName}} {{this.$store.state.profileLastname}}</p>
                                <p>{{this.$store.state.profileUsername}}</p>
                                <p>{{this.$store.state.profileEmail}}</p>
                            </div>
                        </div>
                        <div class="options">
                            <div class="option">
                                <router-link class="option" :to="{name:'Profile'}">
                                    <p>Profile</p>
                                </router-link>
                            </div>
                            <div v-if="admin" class="option">
                                <router-link class="option" :to="{name:'Admin'}">
                                    <p>Admin</p>
                                </router-link>
                            </div>
                            <div class="option" @click.prevent="signOut">
                                
                                <p>Sign out</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <img @click="toggleMobileNav" v-show="mobile" class="menu-icon" :src="require('../assets/icons/bars-regular.svg')" />
        <transition name="mobile-nav">
            <ul class="mobile-nav" v-show="mobileNav">
                <router-link class="link" :to="{name:'Home'}">Home</router-link>
                <router-link class="link" :to="{name:'Blogs'}">Blogs</router-link>
                <router-link v-if="admin" :to="{name:'CreatePost'}" class="link">Create A Post</router-link>
                <router-link v-if="!user" class="link" :to="{name:'Login'}">Login/Register</router-link>
            </ul>
        </transition>
    </header>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default {
    name: "Navigation",
    components: {
    },
    data(){
        return{
            profileMenu: null,
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
        signOut(){
            firebase.auth().signOut();
            window.location.reload();
        },
        toggleProfileMenu(e){
            if(e.target === this.$refs.profile){
                this.profileMenu = !this.profileMenu

            }
        },
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

header{
    padding: 0 25px;
    box-shadow: 0 4px 6px -1px;
    z-index: 99;
}
img{
    height: 30px;
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

.profile{
   position: relative;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 40px;
   height: 40px;
   border-radius: 50%;
   color: #fff;
   background-color: #303030;
}

.profile span{
    pointer-events: none;
    color: #fff;
}

.profile-menu{
    position: absolute;
    top: 60px;
    right: 0;
    width: 250px;
    background-color: #303030;
    box-shadow: 0 4px 6px -1px;
}

.profile-menu .info{
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #fff;

}

.initials{
    position: initial;
    width: 40px;
    height: 40px;
    background-color: #fff;
    color: #303030;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}

.right{
    flex: 1;
    margin-left: 24px;

}

.right p:nth-child(1){
    font-size: 14px;
}

.right p:nth-child(2), p:nth-child(3){
    font-size: 12px;
}

.options{
 padding: 15px;
}

.options .option{
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
}

.option:last-child{
    margin-bottom: 0;
}

.options .option p{
    font-size: 14px;
    margin-left: 12px;
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