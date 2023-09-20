import { useAppContext } from "../../context/context";

export default function Profile() {
	const user = useAppContext();

	return (
		<div>
			<h1>{user.name}</h1>
		</div>
	);
}
