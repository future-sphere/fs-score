import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

var config = {
	apiKey: 'AIzaSyB8usw9WylygnhlFSi4ANiWCa6n7ouFi7w',
	authDomain: 'futuresphere-student-score.firebaseapp.com',
	databaseURL: 'https://futuresphere-student-score.firebaseio.com',
	projectId: 'futuresphere-student-score',
	storageBucket: 'futuresphere-student-score.appspot.com',
	messagingSenderId: '995120899595',
	appId: '1:995120899595:web:e64c3519552119b581c90e',
	measurementId: 'G-R0C5WMKJ5E',
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database;
