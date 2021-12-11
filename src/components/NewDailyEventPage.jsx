import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import config from "../config";

import "./NewDailyEventPage.css";

function NewDailyEventPage({ token }) {
	return (
		<div className="new-daily-event">
			<Navbar />
			<div className="body">
				<h2>New Daily Event</h2>
				<p>This event will repeat every day.</p>

				<form
					onSubmit={(e) => {
						e.preventDefault();

						const body = {
							start:
								Number(e.target.start.value.substr(0, 2)) * 60 +
								Number(e.target.start.value.substr(3)),
							end:
								Number(e.target.end.value.substr(0, 2)) * 60 +
								Number(e.target.end.value.substr(3)),
							name: e.target.name.value,
							description: e.target.description.value,
						};

						if (body.end < body.start) return alert("invalid time");

						axios
							.post(`${config.backend}/schedule-event/daily`, body, {
								headers: { token },
							})
							.then((res) => {
								console.log(res);
								window.location = "/dashboard";
							});
					}}
				>
					<label htmlFor="name-input">Event Title</label>
					<input type="text" required name="name" id="name-input" />
					<hr />

					<label htmlFor="description-input">Event Description</label>
					<input type="text" name="description" id="description-input" />
					<hr />

					<label htmlFor="start-input">Start Time</label>
					<input type="time" required name="start" id="start-input" />
					<hr />

					<label htmlFor="end-input">End Time</label>
					<input type="time" required name="end" id="end-input" />
					<hr />

					<input
						className="btn btn-primary"
						type="submit"
						value="Create Event"
					/>
				</form>
			</div>
		</div>
	);
}

export default NewDailyEventPage;
