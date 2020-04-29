import React from 'react';
import './index.scss';

const docs = [
	{
		title: '就业保证计划合同',
		link: '/files/Contract.pdf',
	},
	{
		title: '设备推荐',
		link: '/files/设备推荐.pdf',
	},
	{
		title: '上课时间安排',
		link: '/files/课程安排.pdf',
	},
	{
		title: 'SE100 课程大纲',
		link: '/files/SE100.pdf',
	},
	{
		title: ' SE200 课程大纲',
		link: '/files/SE200.pdf',
	},
	{
		title: ' SE300 课程大纲',
		link: '/files/SE300.pdf',
	},
	{
		title: ' SE400 课程大纲',
		link: '/files/SE400.pdf',
	},
];

export default function DocsPage() {
	return (
		<div className='content'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-lg-12 col-md-6 col-sm-6'>
						<div className='card card-stats'>
							<div className='card-header card-header-danger card-header-icon'>
								<div className='card-icon'>课程资料</div>
								<div className='card-content files-container'>
									{docs.map((item, index) => (
										<div className='fileIcon'>
											<i class='fas fa-file-pdf'></i>
											<a href={item.link} download>
												{item.title}
											</a>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
