import { createStore } from 'vuex';

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
    }
  },
  actions: {
  },
  modules: {
  },
});
