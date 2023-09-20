import { useAppContext } from "../../context/context";

export default function Sidebar() {
	const user = useAppContext();

	return (
		<div>
			<p>{user.name}</p>
			<p>Subscription status: {user.isSubscribed}</p>
		</div>
	);
}
