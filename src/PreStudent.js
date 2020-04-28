/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import './PreStudent.css';

function PreStudent() {
	const uid = firebase.auth().currentUser.uid;
	const [studentName, setName] = useState('');
	const [studentClass, setClass] = useState('');
	// const [students, setStudents] = useState({});
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
				setName(snapshot.val().name);
				setClass(snapshot.val().class);
			});
	}, []);
	return (
		<div>
			<div className='links'>
				<div>
					<img
						className='logo'
						src='https://res.cloudinary.com/dtgh01qqo/image/upload/v1578112543/FutureSphere/logo%E9%95%BF%E6%96%B9%E5%BD%A2%E9%80%8F%E6%98%8E%E8%83%8C%E6%99%AF.png'
						alt='logo'
					></img>
				</div>
			</div>
			<div className='header'>
				<p className='scoreTitle'>
					{studentClass} | <p className='studentName'>{studentName}</p>
				</p>
				<button className='signOutBtn' type='button' onClick={signOut}>
					登出
				</button>
				<button className='signOutBtn' type='button' onClick={changePassword}>
					更改密码
				</button>
			</div>
			<div className='infoBlocks'>
				<p className='title'>资料：</p>
				<a className='infoBlock' href='/files/Contract.pdf' target='_blank'>
					<i className='fas fa-file-pdf'></i>就业保证计划合同
				</a>
				<a className='infoBlock' href='/files/设备推荐.pdf' target='_blank'>
					<i className='fas fa-file-pdf'></i> 上课设备推荐
				</a>
				<a className='infoBlock' href='/files/课程安排.pdf' target='_blank'>
					<i className='fas fa-file-pdf'></i> 上课时间安排
				</a>
				<a className='infoBlock' href='/files/课前准备.pdf' target='_blank'>
					<i className='fas fa-file-pdf'></i> 旗舰课课前准备
				</a>
			</div>
		</div>
	);
}

export default PreStudent;
