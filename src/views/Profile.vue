<template>
  <div class="profile">
    <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
    <div class="container">
      <h2>Account Settings</h2>
      <div class="profile-info">
        <div class="initials">{{ $store.state.profileInitials }}</div>
        <div class="admin-badge">
          <span>Admin</span>
        </div>
        <div class="input">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" v-model="firstName" />
        </div>
        <div class="input">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" v-model="lastName" />
        </div>
        <div class="input">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div class="input">
          <label for="email">Email:</label>
          <input disabled type="text" id="email" v-model="email" />
        </div>
        <button @click="updateProfile">Save Changes</button>
      </div>
    </div> 
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
export default {
    name:'Profile',
    components:{
        Modal
    },
    data(){
        return {
            modalMessage: 'Changes were saved!',
            modalActive: null,
        }
    },
    methods:{
        updateProfile(){
            this.$store.dispatch('updateUserSettings');
            this.modalActive = !this.modalActive
        },
        closeModal(){
            this.modalActive = !this.modalActive
        },
    },
    computed:{
        firstName:{
            get(){
                return this.$store.state.profileFirstName;
            },
            set(payload){
                this.$store.commit('changeFirstName', payload);
            }
        },
        lastName:{
            get(){
                return this.$store.state.profileLastName;
            },
            set(payload){
                this.$store.commit('changLastName', payload);
            }
        },
        username:{
            get(){
                return this.$store.state.profileUserName;
            },
            set(payload){
                this.$store.commit('changeUserName', payload);
            }
        },
        email(){
            return this.$store.state.profileEmail;
        }
    },
}
</script>

<style scoped>
.profile .container {
    max-width: 1000px;
    justify-content: center;
    padding: 60px 25px;
}
h2 {
    text-align: center;
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 32px;
}
.profile-info {
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 32px;
    background-color: #f1f1f1;
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 32px auto;
}
.initials {
    position: initial;
    width: 80px;
    height: 80px;
    font-size: 32px;
    background-color: #303030;
    color: #fff;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}
.admin-badge {
    display: flex;
    align-self: center;
    font-size: 14px;
    padding: 8px 24px;
    border-radius: 8px;
    background-color: #303030;
    margin: 16px 0;
    text-align: center;
    text-transform: capitalize;
}
.admin-badge span{
    color: #fff;
}
.input {
    margin: 16px 0;
}
label {
    font-size: 14px;
    display: block;
    padding-bottom: 6px;
}
input {
    width: 100%;
    border: none;
    background-color: #f2f7f6;
    padding: 8px;
    height: 50px;
}
input:focus {
    outline: none;
}
button {
    align-self: center;
}
</style>

