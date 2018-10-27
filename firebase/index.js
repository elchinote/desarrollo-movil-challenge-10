import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyCj2CFgcaf6mZDym9nhhg_oorF9Ru6PXK4",
  authDomain: "appchallenge9.firebaseapp.com",
  databaseURL: "https://appchallenge9.firebaseio.com",
  projectId: "appchallenge9",
  storageBucket: "appchallenge9.appspot.com",
  messagingSenderId: "248849209678"
}

firebase.initializeApp(config)

// Initialize Cloud Firestore through Firebase
export const db = firebase.firestore()
export const auth = firebase.auth()

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true,
})

export const getCurrentUser = () => {
  if (auth.currentUser) {
    // console.warn("user",auth.currentUser)
    return Promise.resolve(auth.currentUser)
  }

  return auth
    .signInAnonymously()
    .then(() => auth.currentUser)
    .catch(error => console.error(error))
}

export default firebase
