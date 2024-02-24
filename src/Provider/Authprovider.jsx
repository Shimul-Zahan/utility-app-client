import axios from "axios";
import {
	GoogleAuthProvider,
	getAuth,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null);

const auth = getAuth(app);


// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);

	const googleProvider = new GoogleAuthProvider();

	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	useEffect(() => {
		const fetchUserFromLocalStorage = () => {
			setLoading(true);
			const storedUser = localStorage.getItem('loginUser');
			const loggedUser = JSON.parse(storedUser);

			if (storedUser) {
				setUser(loggedUser);
			}

			setLoading(false);
		};
		fetchUserFromLocalStorage();
	}, []);


	const logOut = () => {
		setLoading(true);
		signOut(auth)
			.then(() => {
				localStorage.removeItem("token");
				setUser(null);
			})
			.catch(error => {
				console.error("Sign out error:", error);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const login = async (email, password) => {
		try {
			const response = await axios.post("http://localhost:5000/login", { email, password });
			const user = response.data;
			console.log('user', user);

			localStorage.setItem("loginUser", JSON.stringify(user));
			window.location.reload();

		} catch (error) {
			console.error("Login failed:", error);
		}
	};


	const authInfo = {
		login,
		user,
		setUser,
		loading,
		logOut,
		googleSignIn,
	};

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
