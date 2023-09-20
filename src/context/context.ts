import { createContext, useContext } from "react";
import { IUser } from "../App";

export const AppContext = createContext<IUser | undefined>(undefined);

export const useAppContext = () => {
	const user = useContext(AppContext);

	if (user === undefined) {
		throw new Error("use context must be used with an AppContext");
	}

	return user;
};
