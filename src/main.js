import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vue3Editor from 'vue3-editor'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { library } from '@fortawesome/fontawesome-svg-core'

import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTrash, faEdit);

let app;
firebase.auth().onAuthStateChanged(() => {
    if(!app){
        
        createApp(App)
        .component("font-awesome-icon", FontAwesomeIcon)
        .use(store)
        .use(Vue3Editor)
        .use(router).mount('#app');

    }
})

