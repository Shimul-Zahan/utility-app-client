import { Calendar as AntCalendar, Badge } from "antd";
import { useEffect, useState } from "react";

const Calendar = () => {
	const [events, setEvents] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchEvents = async () => {
			setLoading(true);
			try {
				const response = await fetch("http://localhost:5000/events");
				const eventData = await response.json();
				setEvents(eventData);
			} catch (error) {
				console.error("Error fetching events:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchEvents();
	}, []);

	const filteredEvents = info => {
		if (info.type === "date") {
			// Filter events for the specified date by converting to Date objects
			const date = new Date(info?.value?.format("YYYY-MM-DD"));
			return events.filter(event => new Date(event.start) <= date && new Date(event.end) >= date);
		} else if (info.type === "month") {
			// Filter events for the entire month (optional)
			const monthStart = new Date(info.value.year(), info.value.month(), 1);
			const monthEnd = new Date(info.value.year(), info.value.month() + 1, 0);
			return events.filter(
				event => new Date(event.start) >= monthStart && new Date(event.end) <= monthEnd
			);
		}
		return null; // Return null for other cell types
	};

	return (
		<div>
			{loading ? (
				<p>Loading events...</p>
			) : (
				<AntCalendar
					cellRender={(current, info) => {
						const filteredList = filteredEvents(info);

						if (filteredList) {
							return (
								<ul className='events'>
									{filteredList.map(item => (
										<li key={item.title}>
											<Badge status={item.type || "warning"} text={item.title} />
										</li>
									))}
								</ul>
							);
						}
						return null; // Return default content for cells without events
					}}
				/>
			)}
		</div>
	);
};

export default Calendar;
