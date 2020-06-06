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
				link: 'https://youtu.be/wXbfDNQP_X0',
			},
			{
				title: '文件管理（下）',
				link: 'https://youtu.be/OzX5V-LxIhI',
			},
			{
				title: '组件管理（上）',
				link: 'https://youtu.be/BIFZxp9F_ys',
			},
			{
				title: '组件管理（下）',
				link: 'https://youtu.be/4q-O759nImY',
			},
			{
				title: 'Props（上）',
				link: 'https://youtu.be/QDXuqOmxAJM',
			},
			{
				title: 'Props（中）',
				link: 'https://youtu.be/bKNp8iBRPsQ',
			},
			{
				title: 'Props（下）',
				link: 'https://youtu.be/EHZZjUsJLEo',
			},
			{
				title: 'State',
				link: 'https://youtu.be/XxhaEc2a_bo',
			},
			{
				title: 'Todo List',
				link: 'https://youtu.be/EV25KzqBukY',
			},
			{
				title: 'HTTP请求（上）',
				link: 'https://youtu.be/VFanqbip7fY',
			},
			{
				title: 'HTTP请求（下）',
				link: 'https://youtu.be/zAN26qIMZl8',
			},
			{
				title: 'Ref和覆盖层（上）',
				link: 'https://youtu.be/29mLclbhxdw',
			},
			{
				title: 'Ref和覆盖层（下）',
				link: 'https://youtu.be/QEP081cOh2o',
			},
			{
				title: 'Hooks',
				link: 'https://youtu.be/JhuBB6-SZ8g',
			},
			{
				title: 'React Router（上）',
				link: 'https://youtu.be/CcRyPU_OZZw',
			},
			{
				title: 'React Router（下）',
				link: 'https://youtu.be/sx-Il4rEq4w',
			},
		],
	},
	{
		title: 'Pwitter 项目',
		links: [
			{
				title: 'Router（上）',
				link: 'https://youtu.be/ufgm1NAXbYI',
			},
			{
				title: 'Router（中）',
				link: 'https://youtu.be/l5DUEA-xjTI',
			},
			{
				title: 'Router（下）',
				link: 'https://youtu.be/VDQ1XcwOWbc',
			},
			{
				title: '注册（1/5）',
				link: 'https://youtu.be/ywhmOFSidQ0',
			},
			{
				title: '注册（2/5）',
				link: 'https://youtu.be/XH1wRL1tVNU',
			},
			{
				title: '注册（3/5）',
				link: 'https://youtu.be/8ijm6-RtFMc',
			},
			{
				title: '注册（4/5）',
				link: 'https://youtu.be/zOtW8KZmFnQ',
			},
			{
				title: '注册（5/5)',
				link: 'https://youtu.be/NJj1oXA6O4w',
			},
			{
				title: '上传文件（1/2）',
				link: 'https://youtu.be/svj7JB600ys',
			},
			{
				title: '上传文件（2/2）',
				link: 'https://youtu.be/ULJMRZOrIOk',
			},
			{
				title: 'JWT验证登录状态',
				link: 'https://youtu.be/DOYkdngLhhA',
			},
			{
				title: '全局状态Context（1/3）',
				link: 'https://youtu.be/U6Oisiq-8Vo',
			},
			{
				title: '全局状态Context（2/3）',
				link: 'https://youtu.be/dX765SQ4z-0',
			},
			{
				title: '全局状态Context（3/3）',
				link: 'https://youtu.be/pmkFwzxWvVc',
			},
			{
				title: '环境变量',
				link: 'https://youtu.be/GI3OkqMgqWs',
			},
		],
	},
	{
		title: '1班录课视频',
		links: [
			{
				title: '0405 面试必看',
				link: 'https://youtu.be/DODhVh4q67k',
			},
		],
	},
	{
		title: '2班录课视频',
		links: [
			{
				title: '0405 ProTips网站设计代码示范',
				link: 'https://www.youtube.com/watch?v=FxjSv9FIAm0',
			},
			{
				title: 'Todolist（上）',
				link: 'https://youtu.be/0o2KzyqK2qk',
			},
			{
				title: 'Todolist（下）',
				link: 'https://youtu.be/W8FyOGh08xM',
			},
			{
				title: 'Lifecycle + todolist深入讲解',
				link: 'https://youtu.be/RVSTkrrcXz8',
			},
			{
				title: 'AsyncAwait & Promise & Kanban深入讲解',
				link: 'https://www.youtube.com/watch?v=XkV-RyWdaMk',
			},
			{
				title: '0502 英雄联盟React',
				link: 'https://youtu.be/A7TXbofbgK4',
			},
			{
				title: '0509 React Pagination/Dropdown/Modal/Popup',
				link: 'https://youtu.be/ih30RtFOilw',
			},
			{
				title:
					'0523 二班录课视频 Typescript + Node.js/Express.js + Controllers',
				link: 'https://www.youtube.com/watch?v=y-E4QyVRV38',
			},
			{
				title: '成人二班 0530 MongoDB Operators 上',
				link: 'https://www.youtube.com/watch?v=mTHejO8Wv9M',
			},
			{
				title: '成人二班 0530 MongoDB Operators 下',
				link: 'https://www.youtube.com/watch?v=Ycz69yuYle0',
			},
			{
				title: '0531 成人二班 $Lookup + 文件上传',
				link: 'https://www.youtube.com/watch?v=R5yH18GpHhM',
			},
			{
				title: '0606 成人二班 部署Node到Heroku+JWT登录注册',
				link: 'https://youtu.be/hwUETSvFzhM',
			},
		],
	},
];

export default videoLists;
