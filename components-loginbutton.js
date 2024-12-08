import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

function LoginButton() {
    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            alert("Logged in successfully!");
        } catch (error) {
            console.error("Login failed:", error.message);
        }
    };

    return <button onClick={handleLogin}>Login</button>;
}

export default LoginButton;
