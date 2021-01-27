import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC2PLyUwNPxVSq0TUCUOiLVn3WfweLPH5Y",
  authDomain: "netflix-2e4d7.firebaseapp.com",
  projectId: "netflix-2e4d7",
  storageBucket: "netflix-2e4d7.appspot.com",
  messagingSenderId: "834211806154",
  appId: "1:834211806154:web:5e3c49d82b0494a63dad33",
};


const fireabaseApp = firebase.initializeApp(firebaseConfig)
const db = fireabaseApp.firestore()
const auth = firebase.auth()


export {auth}
export default db