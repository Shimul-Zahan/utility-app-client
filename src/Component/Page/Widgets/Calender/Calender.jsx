import { Calendar as AntCalendar, Badge } from "antd";
import { useEffect, useState } from "react";

const data = [
	{
		type: "warning",
		content: "Meeting with clients",
	},
	{
		type: "success",
		content: "Team lunch",
	},
	{
		type: "warning",
		content: "Project deadline",
	},
	{
		type: "error",
		content: "Doctor's appointment",
	},
	{
		type: "success",
		content: "Product demo",
	},
	{
		type: "error",
		content: "Call with investors",
	},
	{
		type: "warning",
		content: "Training session",
	},
	{
		type: "success",
		content: "Marketing campaign launch",
	},
	{
		type: "warning",
		content: "Budget review meeting",
	},
	{
		type: "success",
		content: "Client presentation",
	},
];

const getListData = (value, fetchEventCallback) => {
	// If data has already been fetched for this date, return it from cache
	const cachedData = JSON.parse(localStorage.getItem(value.format("YYYY-MM-DD")));
	if (cachedData) return cachedData;

	// Otherwise, fetch event data from the server
	fetchEventCallback(value)
		.then(response => response.json()) // Assuming your API returns JSON data
		.then(data => {
			// Process and transform the server data
			const processedData = data.map(item => ({
				type: item.type || "success", // Set default type if not provided
				content: item.content,
			}));
			// Cache the fetched data for future renders
			localStorage.setItem(value.format("YYYY-MM-DD"), JSON.stringify(processedData));
			return processedData;
		})
		.catch(error => {
			console.error("Error fetching event data:", error);
			return []; // Return empty array on error to avoid rendering issues
		});
};

const getMonthData = value => {
	// Implement your logic to fetch or calculate the backlog number for the month
	// using your server API or local data, adjusting the approach based on your data storage
	// and retrieval methods.
	// ...
};

const Calendar = () => {
	const [selectedDate, setSelectedDate] = useState(null);
	const [eventData, setEventData] = useState([]);

	// Function to handle server-side API call for event data
	const fetchEventCallback = async date => {
		const response = await fetch(`/api/events/${date.format("YYYY-MM-DD")}`); // Adapt the URL to your API endpoint
		return response;
	};

	useEffect(() => {
		if (selectedDate) {
			getListData(selectedDate, fetchEventCallback).then(data => setEventData(data));
		}
	}, [selectedDate]);

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
		return (
			<ul className='events'>
				{eventData.map(item => (
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
