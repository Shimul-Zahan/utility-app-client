import { Calendar as AntCalendar, Badge } from "antd";
import { useEffect, useState } from "react";

const mockData = [
	{
		date: "2024-02-15", // Assuming "date" property for event date
		type: "warning",
		content: "Meeting with clients",
	},
	{
		date: "2024-02-20",
		type: "success",
		content: "Team lunch",
	},
];

const getListData = value => {
	// No more API call as fake data is used
	const matchingEvents = mockData.filter(event => event.date === value);
	return matchingEvents;
};

const getMonthData = value => {
	// ... Implement your logic to fetch or calculate the backlog number for the month
	// using your server API or local data, adjusting the approach based on your data storage
	// and retrieval methods.
	// ...
};

const Calendar = () => {
	const [selectedDate, setSelectedDate] = useState(null);
	const [eventData, setEventData] = useState([]);

	// Find days with events and update eventData using useEffect
	useEffect(() => {
		const datesWithEvents = mockData.map(event => event.date);
		const initialEventData = datesWithEvents.map(date => ({
			date,
			events: getListData(new Date(date)), // Convert string to Date
		}));
		setEventData(initialEventData);
	}, []);

	const monthCellRender = value => {
		const num = getMonthData(value);
		return num ? (
			<div className='notes-month'>
				<section>{num}</section>
				<span>Backlog number</span>
			</div>
		) : null;
	};

	const dateCellRender = value => {
		const matchingEvents = eventData.find(day => day.date === value)?.events || [];
		return (
			<ul className='events'>
				{matchingEvents.map(item => (
					<li key={item.content}>
						<Badge status={item.type} text={item.content} />
					</li>
				))}
			</ul>
		);
	};

	const cellRender = (current, info) => {
		if (info.type === "date") return dateCellRender(current);
		if (info.type === "month") return monthCellRender(current);
		return info.originNode;
	};

	const onSelect = date => {
		setSelectedDate(date);
	};

	return (
		<div className='mx-10 mt-8'>
			<AntCalendar onSelect={onSelect} className='' cellRender={cellRender} />
		</div>
	);
};

export default Calendar;
