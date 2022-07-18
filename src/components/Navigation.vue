<template>
    <header>
        <nav class="container">
            <div class="branding">
                <router-link class="header" :to="{name:'Home'}">VueBlog</router-link>
            </div>
            <div class="nav-links">
                <ul>
                    <router-link class="link" to="#"></router-link>
                    <router-link class="link" to="#">Blogs</router-link>
                    <router-link class="link" to="#">Create A Post</router-link>
                    <router-link class="link" to="#">Login/Register</router-link>
                </ul>
            </div>
        </nav>
        <img :src="require('../assets/icons/bars-regular.svg')" />
        <transition class="mobile-nav">
            <ul>
                <router-link class="link" to="#"></router-link>
                <router-link class="link" to="#">Blogs</router-link>
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
    }
}
</script>

<style >
img{
    height: 30px;
}
</style>