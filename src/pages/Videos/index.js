import React from 'react';
import './index.scss';

const videoLists = [
	{
		title: 'Javascript',
		links: [
			{
				title: '开始编程',
				link: 'https://vimeo.com/400119656/db5a4f363b',
			},
			{
				title: '输出（上）',
				link: 'https://vimeo.com/400120176/c8422c65b5',
			},
			{
				title: '输出（下）',
				link: 'https://vimeo.com/400120438/44788a818a',
			},
			{
				title: '语法',
				link: 'https://vimeo.com/400120514/e1e0e8da7c',
			},
			{
				title: '数据结构 （上）',
				link: 'https://vimeo.com/400120919/539cc1805d',
			},
			{
				title: '数据结构 （中）',
				link: 'https://vimeo.com/400121566/dfc4009ee0',
			},
			{
				title: '数据结构 （下）',
				link: 'https://vimeo.com/400121895/8d37e5ddcf',
			},
			{
				title: '运算符',
				link: 'https://vimeo.com/401931103/14d966e215',
			},
			{
				title: '循环（上）',
				link: '"https://vimeo.com/401931447/05c9920ee6',
			},
			{
				title: '循环（中）',
				link: 'https://vimeo.com/401932242/a9f0117023',
			},
			{
				title: '循环（下）',
				link: 'https://vimeo.com/401932584/d4cb1e4485',
			},
			{
				title: '数组函数（上）',
				link: 'https://vimeo.com/401933254/87fdc883a2',
			},
		],
	},
	{
		title: 'React',
		links: [
			{
				title: '文件管理（上）',
				link: 'https://vimeo.com/399764487/567bd2ce38',
			},
			{
				title: '文件管理（下）',
				link: 'https://vimeo.com/399764487/567bd2ce38',
			},
			{
				title: '组件管理（上）',
				link: 'https://vimeo.com/399764907/fc53447b8d',
			},
			{
				title: '组件管理（下）',
				link: 'https://vimeo.com/399765090/7e909d0992',
			},
			{
				title: 'Props（上）',
				link: 'https://vimeo.com/401934216/7560ea3d1f',
			},
			{
				title: 'Props（中）',
				link: 'https://vimeo.com/401935775/03a1c44720',
			},
			{
				title: 'Props（下）',
				link: 'https://vimeo.com/401936757/79f13a5c39',
			},
			{
				title: 'State',
				link: 'https://vimeo.com/401937494/411e28eea9',
			},
			{
				title: 'Todo List',
				link: 'https://vimeo.com/404411602/cf2cd24be2',
			},
			{
				title: 'HTTP请求（上）',
				link: 'https://vimeo.com/395087772/f1d0a55a2d',
			},
			{
				title: 'HTTP请求（下）',
				link: 'https://vimeo.com/395086605/aadda1c8d3',
			},
			{
				title: 'Ref和覆盖层',
				link: 'https://vimeo.com/395086460/89aa6141e5',
			},
			{
				title: 'Hooks',
				link: 'https://vimeo.com/395091203/ad41073f71',
			},
			{
				title: 'React Router（上）',
				link: 'https://vimeo.com/395104039/b5642fc336',
			},
			{
				title: 'React Router（下）',
				link: 'https://vimeo.com/395104753/1558f575d1',
			},
		],
	},
	{
		title: 'Pwitter 项目',
		links: [
			{
				title: 'Router（上）',
				link: 'https://vimeo.com/399043223/bd68e1dd83',
			},
			{
				title: 'Router（中）',
				link: 'https://vimeo.com/399043634/fd7b6320bb',
			},
			{
				title: 'Router（下）',
				link: 'https://vimeo.com/399043683/58a8343ee7',
			},
			{
				title: '注册（1/5）',
				link: 'https://vimeo.com/399043952/d161402093',
			},
			{
				title: '注册（2/5）',
				link: 'https://vimeo.com/399045634/7455a9a126',
			},
			{
				title: '注册（3/5）',
				link: 'https://vimeo.com/399048227/af6362870f',
			},
			{
				title: '注册（4/5）',
				link: 'https://vimeo.com/399048177/dfe76e6acb',
			},
			{
				title: '注册（5/5)',
				link: 'https://vimeo.com/399047360/529dc49503',
			},
			{
				title: '上传文件（1/2）',
				link: 'https://vimeo.com/399050575/070184c7b8',
			},
			{
				title: '上传文件（2/2）',
				link: 'https://vimeo.com/399342899/a7203e9276',
			},
			{
				title: 'JWT验证登录状态',
				link: 'https://vimeo.com/399356471/e303e0ce8a',
			},
			{
				title: '全局状态Context（1/3）',
				link: 'https://vimeo.com/399359847/7ffc727002',
			},
			{
				title: '全局状态Context（2/3）',
				link: 'https://vimeo.com/399360209/791c0b16ca',
			},
			{
				title: '全局状态Context（3/3）',
				link: 'https://vimeo.com/399360289/9f8e84540d',
			},
			{
				title: '环境变量',
				link: 'https://vimeo.com/399361636/a183f5ca1f',
			},
		],
	},
];

export default function VideosPage() {
	return (
		<div className='content'>
			<div className='container-fluid'>
				<div className='row'>
					{videoLists.map((list) => (
						<div className='col-lg-12 col-md-12 col-sm-12'>
							<div className='card card-stats'>
								<div className='card-header card-header-warning card-header-icon'>
									<div className='card-icon'>{list.title}</div>
									<div className='card-content videos-container'>
										{list.links.map((item, index) => (
											<div className='video-block'>
												<i class='fas fa-video'>
													<div className='number'>{index + 1}</div>
												</i>

												<a href={item.link}>{item.title}</a>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
