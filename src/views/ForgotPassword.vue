<template>
    <div class="reset-password">
        <Modal v-if="modalActive" v-on:close-modal="closeModal"/>
        <Loading v-if="loading"/>
        <div class="form-wrap">
            <form class="reset">
                <h2>Reset Password</h2>
                <p>Forgot password? Please enter email to reset it</p>
                <div class="inputs">
                    <div class="input">
                        <input type="text" placeholder="Email" v-model="email">
                    </div>
                </div>
                <button>Reset</button>
                <div class="angle"></div>
            </form>
            <div class="background"></div>
        </div>

    </div>
</template>

<script>
import Loading from '@/components/Loading.vue'
import Modal from '@/components/Modal.vue'
export default {
    name:'ForgotPassword',
    data(){
        return{
            email:null,
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