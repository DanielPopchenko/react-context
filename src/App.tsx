import { useState } from "react";
import User from "./components/user/User";
import { AppContext } from "./context/context";

export interface IUser {
	isSubscribed: boolean;
	name: string;
}

const App = () => {
	const [user] = useState<IUser>({ isSubscribed: true, name: "Anton" });

	return (
		<div>
			<AppContext.Provider value={user}>
				<User />
			</AppContext.Provider>
		</div>
	);
};

export default App;
