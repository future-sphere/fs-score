import React from 'react';

export default function Footer() {
	return (
		<footer className='footer '>
			<div className='container-fluid'>
				<nav className='pull-left'>
					<ul>
						<li>
							<a href='https://thefuturesphere.com'>未来领域</a>
						</li>
						<li>
							<a href='https://thefuturesphere.com/career-program.html'>
								就业保证计划
							</a>
						</li>
						<li>
							<a href='https://thefuturesphere.com/track.html?=frontend-engineer'>
								软件工程师旗舰课程
							</a>
						</li>
						<li>
							<a href='https://thefuturesphere.com/faq.html'>常见问题</a>
						</li>
					</ul>
				</nav>
				<div className='copyright pull-right'>
					©<script></script>2020 未来领域 The Future Sphere Corp.
				</div>
			</div>
		</footer>
	);
}
