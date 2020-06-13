import React, { useState, useEffect } from 'react';
import './index.scss';
import { auth } from '../../services/firebase';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [welcome, setWelcome] = useState("")

	useEffect(()=>{
		const currTime = new Date();
		const currHour = currTime.getHours();
		console.log(currHour)
		if(currHour >= 6 && currHour <= 8){
			setWelcome("早上好！")
		}
		else if(currHour >= 9 && currHour <= 11){
			setWelcome("上午好！")
		}
		else if(currHour >= 12 && currHour <= 14){
			setWelcome("中午好！")
		}
		else if(currHour >= 13 && currHour <= 18){
			setWelcome("下午好！")
		}
		else if(currHour >= 19 || currHour <= 5){
			setWelcome("晚上好！")
		}
		else{
			setWelcome("欢迎回来")
		}
	},[])

	const handleClick = () => {
		console.log(email, password);
		auth()
			.signInWithEmailAndPassword(email, password)
			.then((user) => {
				console.log('Im here');
				console.log(user);
			})
			.catch(function (error) {
				console.log(error);
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// [START_EXCLUDE]
				if (errorCode === 'auth/wrong-password') {
					alert('密码错误');
				} else if (
					errorMessage ==
					'There is no user record corresponding to this identifier. The user may have been deleted.'
				) {
					alert('电子邮箱不正确或未注册');
				} else if (errorMessage == 'The email address is badly formatted.') {
					alert('未输入电子邮箱或格式不正确');
				} else {
					alert(errorMessage);
				}
				console.log(error);
				// [END_EXCLUDE]
			});
	};

	auth().onAuthStateChanged((user) => {
		console.log(user);
	});

	return (
		<div className='login-container'>
			<div className='container-fluid'>
				<div className='row no-gutter'>
					<div className='d-none d-md-flex col-md-4 col-lg-6 bg-image'></div>
					<div className='col-md-8 col-lg-6'>
						<div className='login d-flex align-items-center py-5'>
							<div className='container'>
								<div className='row'>
									<div className='col-md-9 col-lg-8 mx-auto'>
										<h2 className='login-heading mb-4'>未来领域 | 学生中心</h2>
										<h3 className='login-heading mb-4'>{welcome}</h3>
										<form onSubmit={(e) => e.preventDefault()}>
											<div className='form-label-group'>
												<input
													autoFocus
													autoComplete='on'
													placeholder='电子邮箱'
													className='loginEmail'
													type='email'
													id='txtEmail'
													onChange={(event) => setEmail(event.target.value)}
												/>
											</div>

											<div className='form-label-group'>
												<input
													autoComplete='on'
													placeholder='密码'
													className='loginPassword'
													type='password'
													id='txtPassword'
													onChange={(event) => setPassword(event.target.value)}
												/>
											</div>
											<button
												onClick={handleClick}
												className='btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2'
												type='submit'
											>
												登录
											</button>
											{/* <div className='text-center'>
											<a className='small' href='#'>
												Forgot password?
											</a>
										</div> */}
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
