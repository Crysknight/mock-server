module.exports = (req, res) => {
	setTimeout(() => {
		res.send([
			{
				id: 0,
				title: 'ЖК \"Дом в Сокольниках\"',
				address: 'Русаковская, 31',
				additional: 'ВАО, Сокольники, доступно 5 экранов',
				lat: 55.766542,
				lng: 37.619446,
				sort_order: 1
			},
			{
				id: 1,
				title: 'ЖК \"Эгоист\"',
				address: 'Шумкина, 11А',
				additional: 'ВАО, Сокольники, доступен 1 экран',
				lat: 55.789157,
				lng: 37.668677,
				sort_order: 2
			},
			{
				id: 2,
				title: 'ЖК \"АкадемикА\"',
				address: 'Академика Павлова, 24',
				additional: 'ВАО, Сокольники, доступно 2 экрана',
				lat: 55.746064,
				lng: 37.404985,
				sort_order: 3
			},
			{
				id: 12,
				title: 'ЖК \"Эгоист\"',
				address: 'Шумкина, 11А',
				additional: '',
				lat: 55.715816,
				lng: 37.529021,
				sort_order: 4
			},
			{
				id: 13,
				title: 'ЖК \"АкадемикА\"',
				address: 'Академика Павлова, 24',
				additional: 'ВАО, Сокольники, доступно 2 экрана',
				lat: 55.736993,
				lng: 37.530384,
				sort_order: 5
			}
		]);
	}, 50);
};