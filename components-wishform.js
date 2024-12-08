import React, { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

function WishForm() {
    const [wish, setWish] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (wish.trim() === "") return;

        try {
            await addDoc(collection(db, "wishes"), { text: wish, likes: 0 });
            setWish("");
            alert("Wish added!");
        } catch (error) {
            console.error("Error adding wish:", error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={wish}
                onChange={(e) => setWish(e.target.value)}
                placeholder="Type your magical wish here..."
                rows="3"
            ></textarea>
            <button type="submit">Submit Wish</button>
        </form>
    );
}

export default WishForm;
