Shixmax — Uploadcare + Firebase full package
Files included:
- index.html (login)
- register.html (signup with avatar upload using Uploadcare)
- index_main.html (chats list)
- chat.html (chat room, upload files/images/audio via Uploadcare)
- profile.html (edit profile and avatar upload)
- settings.html
- styles.css
- firebase.js (compat SDK + Uploadcare widget)
How to use:
1) Replace firebase config in firebase.js if you want to use your own project.
2) Enable Authentication (Email/Password) in Firebase.
3) Enable Realtime Database and set rules for testing to allow reads/writes.
4) Create Uploadcare account and use the public key (already set in firebase.js if provided).
5) Deploy to GitHub Pages or any static host.
Notes:
- Uploadcare public key is embedded (the public key you provided).
- This project uses Uploadcare client-side widget to upload files and returns CDN urls saved in Realtime DB.
- For production, tighten Firebase security rules and enable email verification.
