import React from 'react';
import './index.scss';

export default function Scores({
	studentQuiz,
	studentExam,
	studentHW,
	studentProject,
}) {
	const data = [
		{
			title: '作业成绩',
			data: studentHW,
		},
		{
			title: '测验成绩',
			data: studentQuiz,
		},
		{
			title: '考试成绩',
			data: studentExam,
		},
		{
			title: '项目成绩',
			data: studentProject,
		},
	];
	const average = (arr) =>{
		return eval(arr.join("+")) / arr.length;
	}
	return (
		<div className='content'>
			<div className='container-fluid'>
				<div className='row'>
					{data.map((scores) => (
						<div className='col-lg-6 col-md-6 col-sm-6'>
							<div className='card card-stats'>
								<div className='card-header card-header-success card-header-icon'>
									<div className='card-icon'>{scores.title}</div>
									<div className='card-content'>
										{scores.data ? (
											scores.data.map((item, index) => (
												<li key={item}>
													<span>第 {index + 1} 周</span>
													<span style={item < 65 ? {"color":"#ff0000"}:{}}>{item} %</span>
												</li>
											))
										) : (
											<p>暂无成绩</p>
										)}
									</div>
								</div>
								<div className='card-footer'>
									<div className='stats'>
										<span>平均成绩:</span>
										{String(average(scores.data)) !== "NaN" ? (<span>{average(scores.data).toFixed(2)}</span>) : (<span>暂无成绩</span>)}
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
