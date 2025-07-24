/* public/firebase-messaging-sw.js */
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCmVpwNjV0Xgcwl29PcSVwobMlJjmwI47c",
  authDomain: "project-b2ad5.firebaseapp.com",
  projectId: "project-b2ad5",
  messagingSenderId: "287894518387",
  appId: "1:287894518387:web:60342f69d6cef87d0f0806"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/logo192.png',
  });
});
