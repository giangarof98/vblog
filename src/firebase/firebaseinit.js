import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBemrP-VBYQDz7WF8N1teSu7b0J0SWtiRg",
    authDomain: "vueblog-987db.firebaseapp.com",
    projectId: "vueblog-987db",
    storageBucket: "vueblog-987db.appspot.com",
    messagingSenderId: "624034483331",
    appId: "1:624034483331:web:41142bb511092bdeed9fb6"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseapp.firestore();