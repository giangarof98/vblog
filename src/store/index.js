import { createStore } from 'vuex';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import db from '../firebase/firebaseinit';

export default createStore({
  state: {
    sampleBlogCards: [
      {BlogTitle: 'Card 1', blogCoverPhoto: '20', BlogDate: 'May 1, 2021'},
      {BlogTitle: 'Card 1', blogCoverPhoto: '21', BlogDate: 'May 1, 2021'},
      {BlogTitle: 'Card 1', blogCoverPhoto: '22', BlogDate: 'May 1, 2021'},
      {BlogTitle: 'Card 1', blogCoverPhoto: '23', BlogDate: 'May 1, 2021'},
    ],
    editPost: null,
    user: null,
    profileEmail:null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName:null,
    profileId: null,
    profileInitials: null,

  },
  mutations: {
    toggleEditPost(state, payload){
      state.editPost = payload;
      console.log(state.editPost)
    },
    updateUser(state, payload){
      state.user = payload;
    },
    setProfileInfo(state, doc){
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastname;
      state.profileUserName = doc.data().username;
    },
    setProfileInitials(state){
      state.profileInitials = 
        state.profileFirstName.match(/(\b\S)?/g).join("") + 
        state.profileLastName.match(/(\b\S)?/g).join("");
    },
    changeFirstName(state, payload){
      state.profileFirstName = payload;
    },
    changeLastName(state, payload){
      state.profileLastName = payload;
    },
    changeUsername(state, payload){
      state.profileUserName = payload;
    },
  },
  actions: {
    async getCurrentUser({commit}){
      const dataBase = await db.collection('users').doc(firebase.auth().currentUser.uid)
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
      commit('setProfileInitials');
      console.log(dbResults)
    },
    async updateUserSettings({commit, state}){
      const dataBase = await db.collection('users').doc(state.profileId);
      await dataBase.update({
        firstName: state.profileFirstName,
        lastname: state.profileLastName,
        username: state.profileUserName,

      });
      commit('setProfileInitials');

    }
  },
  modules: {
  },
});
