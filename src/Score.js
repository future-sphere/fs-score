/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import videos from './constants/videos';
import './Score.css';
import AlertBanner from './components/AlertBanner';
import Navbar from './components/Navbar';
import Scores from './components/Scores';

function Score() {
	const user = firebase.auth().currentUser || {};
	const uid = user.uid;
	const [studentName, setName] = useState('Peter');
	const [studentClass, setClass] = useState('成人一班');
	const [studentQuiz, setQuiz] = useState([]);
	const [studentExam, setExam] = useState([]);
	const [studentHW, setHW] = useState([]);
	const [studentDrop, setDrop] = useState(false);
	const signOut = () => {
		firebase
			.auth()
			.signOut()
			.catch(function (error) {
				// An error happened.
			});
	};
	const changePassword = () => {
		const pw1 = window.prompt('请输入新密码');
		const pw2 = window.prompt('请再次输入新密码');
		const user = firebase.auth().currentUser;
		if (pw1 === pw2) {
			user
				.updatePassword(pw1)
				.then(function () {
					alert('密码修改成功！');
				})
				.catch(function (error) {
					alert('密码修改失败！');
				});
		} else {
			alert('两次输入的密码不一致');
		}
	};
	useEffect(() => {
		firebase
			.database()
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
	}, []);

	return (
		<div>
			<AlertBanner />
			<Navbar />
			<Scores
				studentExam={studentExam}
				studentQuiz={studentQuiz}
				studentHW={studentHW}
			/>

			{studentDrop ? (
				<div></div>
			) : (
				<div>
					<p className='infoTitle'>资料:</p>
					<div className='infoBlocks'>
						<a className='infoBlock' href='/files/Contract.pdf' target='_blank'>
							<i className='fas fa-file-pdf'></i>就业保证计划合同
						</a>
						<a className='infoBlock' href='/files/设备推荐.pdf' target='_blank'>
							<i className='fas fa-file-pdf'></i> 上课设备推荐
						</a>
						<a className='infoBlock' href='/files/课程安排.pdf' target='_blank'>
							<i className='fas fa-file-pdf'></i> 上课时间安排
						</a>
						<a className='infoBlock' href='/files/SE100.pdf' target='_blank'>
							<i className='fas fa-file-pdf'></i> SE100 课程大纲
						</a>
						<a className='infoBlock' href='/files/SE200.pdf' target='_blank'>
							<i className='fas fa-file-pdf'></i> SE200 课程大纲
						</a>
						<a className='infoBlock' href='/files/SE300.pdf' target='_blank'>
							<i className='fas fa-file-pdf'></i> SE300 课程大纲
						</a>
						<a className='infoBlock' href='/files/SE400.pdf' target='_blank'>
							<i className='fas fa-file-pdf'></i> SE400 课程大纲
						</a>
					</div>
					<p className='infoTitle'>视频:</p>
					<div className='infoBlocks'>
						<div>
							<p className='videoTitle'>Javascript 教学系列</p>
							{videos.map((video) => {
								if (video.topic === 'JS') {
									return (
										<a className='infoBlock' href={video.link} target='_blank'>
											<i className='fas fa-video'></i>
											{video.title}
										</a>
									);
								}
							})}
						</div>
						<div>
							<p className='videoTitle'>React 教学系列</p>
							{videos.map((video) => {
								if (video.topic === 'react') {
									return (
										<a className='infoBlock' href={video.link} target='_blank'>
											<i className='fas fa-video'></i>
											{video.title}
										</a>
									);
								}
							})}
						</div>
						<div>
							<p className='videoTitle'>Social Project 教学系列</p>
							{videos.map((video) => {
								if (video.topic === 'social') {
									return (
										<a className='infoBlock' href={video.link} target='_blank'>
											<i className='fas fa-video'></i>
											{video.title}
										</a>
									);
								}
							})}
						</div>
						<div>
							<p className='videoTitle'>每日课程录像</p>
							{videos.map((video) => {
								if (video.topic === 'record') {
									return (
										<a className='infoBlock' href={video.link} target='_blank'>
											<i className='fas fa-video'></i>
											{video.title}
										</a>
									);
								}
							})}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Score;
