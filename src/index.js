import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './pages/Login';
import Score from './Score';
import Admin from './pages/Admin';
import PreStudent from './pages/PreStudent/PreStudent';
import { auth, db } from './services/firebase';
import StudentCenterPage from './pages/StudentCenter';

// Initialize Firebase

auth().onAuthStateChanged((firebaseUser) => {
	if (firebaseUser) {
		const uid = auth().currentUser.uid;
		db()
			.ref('Student/' + uid)
			.once('value')
			.then(function (snapshot) {
				if (snapshot.val()) {
					if (snapshot.val().class === '管理员') {
						ReactDOM.render(<Admin />, document.getElementById('root'));
					} else if (snapshot.val().class === '预备学生') {
						ReactDOM.render(<PreStudent />, document.getElementById('root'));
					} else {
						ReactDOM.render(
							<StudentCenterPage />,
							document.getElementById('root'),
						);
					}
				} else {
					ReactDOM.render(<Login />, document.getElementById('root'));
				}
			});
	} else {
		ReactDOM.render(<Login />, document.getElementById('root'));
	}
});
