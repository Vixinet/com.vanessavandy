$(document).ready(function(){
	var chart = c3.generate({
		bindto: '#chart',
		data: {
       		x: 'x',
			columns: [
				['x', '2006-01-01', '2007-01-01', '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01'],
				['data1', 70, 60, 50, 10, 10, 10, 25, null, null, null],
				['data2', 30, 40, 50, 90, 90, 70, null, null, null, null],
				['data3', null, null, null, null, null, 20, 25, 50, 10, 50],
				['data4', null,null,null,null,null,null,50,50,30,50],
				['data5', null,null,null,null,null,null,null, null, 60, null]
			],
			order: 'DESC',
			names: {
				data1: 'Music composition',
				data2: 'Pole Vaulting',
				data3: 'Filmmaking',
				data4: 'Education',
				data5: 'Nintu',
			},
			type: 'bar',
			groups: [['data1', 'data2', 'data3', 'data4', 'data5']]
		},
		color: {
			pattern: ['#FD8267','#B3C9C0', '#ACCE45', '#E5AE35', '#5690CA']
		},
		axis: {
			y: {
				max: 90,
				show: false,
			},
			x: {
				type: 'timeseries',
				tick: {
					format: '%Y'
				}
			}
    	},
    	legend: {
  position: 'right'
}
	});
});

