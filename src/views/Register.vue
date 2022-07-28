<template>
    <div class="form-wrap">
        <form class="register">
            <p class="login-register">
                Already have an account?
                <router-link class="router-link" :to="{name: 'Login'}">Sign In</router-link>
            </p>
            <h2>Create your free VBlog account</h2>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="First Name" v-model="firstName">
                </div>
                <div class="input">
                    <input type="text" placeholder="Last Name" v-model="lastName">
                </div>
                <div class="input">
                    <input type="text" placeholder="Username" v-model="username">
                </div>

                <div class="input">
                    <input type="text" placeholder="Email" v-model="email">
                </div>
                <div class="input">
                    <input type="password" placeholder="Password" v-model="password">
                </div>
            </div>
            <button>Sign Up</button>
            <div class="angle"></div>
        </form>
        <div class="background"></div>
    </div>
</template>

<script>
export default {
    name:'Register',
    data(){
        return{
            fistName: null,
            lastName: null,
            username: null,
            email: null,
            password: null,
        }
    }
}
</script>

<style scoped>

.register h2{
max-width: 350px;
}

</style>