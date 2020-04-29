import React from 'react';
import videoLists from '../../constants/videos';
import './index.scss';

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
												<a
													target='_blank'
													rel='noopener noreferrer'
													href={item.link}
												>
													<i class='fas fa-video'>
														<div className='number'>{index + 1}</div>
													</i>
													{item.title}
												</a>
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
