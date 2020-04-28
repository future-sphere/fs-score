import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { auth } from '../../services/firebase';
import { Link, withRouter } from 'react-router-dom';

const routes = [
	{
		title: '课程成绩',
		path: '/',
	},
	{
		title: '课程资料',
		path: '/docs',
	},
	{
		title: '课程视频',
		path: '/videos',
	},
	{
		title: '备战面试',
		path: '/interviews',
	},
	{
		title: '拓展资料',
		path: '/extra',
	},
];

function Navbar({ match }) {
	const [path, setPath] = useState(null);
	useEffect(() => {
		setPath(window.location.pathname);
	}, [match]);
	return (
		<div className='sidebar' data-color='azure' data-background-color='white'>
			<div className='logo-container'>
				<img
					src='https://res.cloudinary.com/dtgh01qqo/image/upload/v1578112543/FutureSphere/logo%E9%95%BF%E6%96%B9%E5%BD%A2%E9%80%8F%E6%98%8E%E8%83%8C%E6%99%AF.png'
					alt='logo'
				/>
			</div>
			<div className='sidebar-wrapper'>
				<ul className='nav'>
					{routes.map((route) => (
						<li
							className={classnames('nav-item', {
								active: path === route.path,
							})}
						>
							<Link className='nav-link' to={route.path}>
								<p>{route.title}</p>
							</Link>
						</li>
					))}
				</ul>
				<div className='bottom-nav'>
					<button
						onClick={() => {
							const pw1 = window.prompt('请输入新密码');
							const pw2 = window.prompt('请再次输入新密码');
							const user = auth().currentUser;
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
						}}
						className='btn btn-block btn-warning'
					>
						修改密码
					</button>
					<button
						onClick={() => auth().signOut()}
						className='btn btn-block btn-danger'
					>
						退出登录
					</button>
				</div>
			</div>
		</div>
	);
}

export default withRouter(Navbar);
