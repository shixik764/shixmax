<!-- firebase.js - compat builds -->
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-database-compat.js"></script>
<!-- Uploadcare widget -->
<script src="https://ucarecdn.com/libs/widget/3.x/uploadcare.full.min.js"></script>
<script>
const UPLOADCARE_PUBLIC_KEY = "0c7ba840bf1b89f09ee3"; // your Uploadcare public key
uploadcare.start({publicKey: UPLOADCARE_PUBLIC_KEY});

const firebaseConfig = {
  apiKey: "AIzaSyAEHPyMzxxCzOafQKQGrHQX3VObfZhaIBQ",
  authDomain: "shixmax-9fa29.firebaseapp.com",
  databaseURL: "https://shixmax-9fa29-default-rtdb.firebaseio.com",
  projectId: "shixmax-9fa29",
  storageBucket: "shixmax-9fa29.appspot.com",
  messagingSenderId: "1010580392768",
  appId: "1:1010580392768:web:523bfdc415f821deae48a5"
};
firebase.initializeApp(firebaseConfig);
window.auth = firebase.auth();
window.db = firebase.database();
</script>
