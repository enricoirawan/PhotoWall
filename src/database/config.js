import * as firebase from 'firebase';

// Your web app's Firebase configuration
var config = {
	apiKey: 'AIzaSyDZvM0tOElZYTVD7Cyyl2bNr-ZV2GrqX0o',
	authDomain: 'photowall-75649.firebaseapp.com',
	databaseURL: 'https://photowall-75649.firebaseio.com',
	projectId: 'photowall-75649',
	storageBucket: 'photowall-75649.appspot.com',
	messagingSenderId: '396545153431',
	appId: '1:396545153431:web:12529f3e97f0569689ccd2',
	measurementId: 'G-J25V64DNWG'
};

firebase.initializeApp(config);

const database = firebase.database();

export { database };
