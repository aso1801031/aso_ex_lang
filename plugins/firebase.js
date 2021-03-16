import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
        apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    }
  )
}

export default firebase