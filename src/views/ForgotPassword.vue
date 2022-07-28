<template>
    <div class="reset-password">
        <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal"/>
        <Loading v-if="loading"/>
        <div class="form-wrap">
            <form class="reset">
                <p class="login-register">
                    back to
                <router-link class="router-link" :to="{name: 'Login'}">Sign In</router-link>
            </p>
                <h2>Reset Password</h2>
                <p>Forgot password? Please enter email to reset it</p>
                <div class="inputs">
                    <div class="input">
                        <input type="text" placeholder="Email" v-model="email">
                    </div>
                </div>
                <button @click.prevent="resetPassword">Reset</button>
                <div class="angle"></div>
            </form>
            <div class="background"></div>
        </div>

    </div>
</template>

<script>
import Loading from '@/components/Loading.vue';
import Modal from '@/components/Modal.vue';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default {
    name:'ForgotPassword',
    data(){
        return{
            email:"",
            modalActive: false,
            modalMessage: '',
            loading: null,

        }
    },
    components:{
        Modal,
        Loading,
    },
    methods:{
        resetPassword(){
            this.loading = true;
            firebase.auth()
            .sendPasswordResetEmail(this.email)
            .then(() => {
                this.modalMessage = "If your account exist you will receive a email";
                this.loading = false;
                this.modalActive = true;
            }).catch(err => {
                this.modalMessage = err.message;
                this.loading = false;
                this.modalActive = true;
            }) 
        },
        closeModal(){
            this.modalActive =!this.modalActive;
            this.email = "";
        }
    }
}
</script>

<style scoped>

.reset-password{
    position: relative;
}

h2{
    margin-bottom: 8px;
}

p{
    text-align: center;
    margin-bottom: 32px;
}

</style>