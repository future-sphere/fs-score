import React from 'react';

export default function StudentHeader({
	classInfo,
	name,
	signOut,
	changePassword,
	studentDrop,
}) {
	return (
		<React.Fragment>
			<div className='header'>
				<p className='studentTitle'>
					{classInfo} | <p className='studentName'>{name}</p>
				</p>
			</div>
			<div className='studentFunctions'>
				<button className='signOutBtn' type='button' onClick={signOut}>
					登出
				</button>
				<button className='signOutBtn' type='button' onClick={changePassword}>
					更改密码
				</button>
				{studentDrop ? (
					<div className='dropState dropTrue' title='您已不在就业保证计划内'>
						<i className='fas fa-times'></i>就业保证计划
					</div>
				) : (
					<div className='dropState dropFalse' title='您在就业保证计划内'>
						<i className='fas fa-check'></i>就业保证计划
					</div>
				)}
			</div>
		</React.Fragment>
	);
}
