import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { db, auth } from '../../services/firebase';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import './Material.scss';
import './index.scss';
import Scores from '../../components/Scores';
import AlertBanner from '../../components/AlertBanner';
import DocsPage from '../Docs';
import VideosPage from '../Videos';

export default function StudentCenterPage() {
	const user = auth().currentUser || {};
	const uid = user.uid;
	const [studentName, setName] = useState('Peter');
	const [studentClass, setClass] = useState('成人一班');
	const [studentQuiz, setQuiz] = useState([]);
	const [studentExam, setExam] = useState([]);
	const [studentHW, setHW] = useState([]);
	const [studentDrop, setDrop] = useState(false);

	useEffect(() => {
		db()
			.ref('Student/' + uid)
			.once('value')
			.then(function (snapshot) {
				if (snapshot.val()) {
					setName(snapshot.val().name);
					setClass(snapshot.val().class);
					setQuiz(snapshot.val().quiz);
					setExam(snapshot.val().exam);
					setHW(snapshot.val().homework);
					setDrop(snapshot.val().isDrop);
				}
			});
	}, [uid]);

	return (
		<Router>
			<div className='wrapper'>
				<Navbar />
				<div className='main-panel'>
					<AlertBanner />
					<React.Fragment>
						<Route
							exact
							path='/'
							render={() => (
								<Scores
									studentExam={studentExam}
									studentHW={studentHW}
									studentQuiz={studentQuiz}
									studentProject={[]}
								/>
							)}
						/>
						<Route exact path='/docs' render={() => <DocsPage />} />
						<Route exact path='/videos' render={() => <VideosPage />} />
					</React.Fragment>

					<Footer />
				</div>
			</div>
		</Router>
	);
}
