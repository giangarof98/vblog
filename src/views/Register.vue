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
                <div v-show="error" class="error">{{this.errorMsg}}</div>
            </div>
            <button @click.prevent="register">Sign Up</button>
            <div class="angle"></div>
        </form>
        <div class="background"></div>
    </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import db from '../firebase/firebaseinit';

export default {
    name:'Register',
    data(){
        return{
            fistName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            error: '',
            errorMsg: ''
        }
    },
    methods:{
        async register(){
            if( this.email !== "" && 
                this.password !== "" &&
                this.firstName !== "" &&
                this.lastName !== "" &&
                this.username !== ""
                ){
                    this.error = false;
                    this.errorMsg = "";
                    const firebaseAuth = await firebase.auth()
                    const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password)
                    const result = await createUser;
                    const dataBase = db.collection('users').doc(result.user.uid);
                    await dataBase.set({
                        firstName: this.firstName,
                        lastname: this.lastName,
                        username: this.username,
                        email: this.email,
                    });
                    this.$router.push({name:"Home"})
                    return;
                }
                this.error = true;
                this.errorMsg = 'Please fill out all the fields';
                return;
        }
    }
}
</script>

<style scoped>

.register h2{
max-width: 350px;
}

</style>