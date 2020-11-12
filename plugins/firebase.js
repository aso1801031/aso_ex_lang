import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
        apiKey: "AIzaSyAOxtIID_oEb5auulDVFo_d4Z566v3NSC8",
        authDomain: "aso-ex-lang.firebaseapp.com",
        databaseURL: "https://aso-ex-lang.firebaseio.com",
        projectId: "aso-ex-lang",
        storageBucket: "aso-ex-lang.appspot.com",
        messagingSenderId: "281329142967",
        appId: "1:281329142967:web:fcbcca12f11d45fe561132",
        measurementId: "G-66BK0F077T"
    }
  )
}

export default firebase