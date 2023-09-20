import React from "react";
import Profile from "../profile/Profile";
import Sidebar from "../sidebar/Sidebar";

export default function Dashboard() {
	return (
		<div>
			<Sidebar />
			<Profile />
		</div>
	);
}
