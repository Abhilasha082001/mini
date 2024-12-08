import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

function WishList() {
    const [wishes, setWishes] = useState([]);

    useEffect(() => {
        const fetchWishes = async () => {
            const querySnapshot = await getDocs(collection(db, "wishes"));
            setWishes(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        };

        fetchWishes();
    }, []);

    const handleLike = async (id, currentLikes) => {
        const wishRef = doc(db, "wishes", id);
        await updateDoc(wishRef, { likes: currentLikes + 1 });
        setWishes((prev) =>
            prev.map((wish) =>
                wish.id === id ? { ...wish, likes: wish.likes + 1 } : wish
            )
        );
    };

    return (
        <ul>
            {wishes.map((wish) => (
                <li key={wish.id}>
                    <p>{wish.text}</p>
                    <button onClick={() => handleLike(wish.id, wish.likes)}>
                        ❤️ {wish.likes} Likes
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default WishList;
