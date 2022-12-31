import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../config/firebase";

function Post(props) {
    const { post } = props;
    const [likeAmount, setLikeAmount] = useState(0);

    const likesRef = collection(db, "likes");
    const [user] = useAuthState(auth);

    const likesDoc = query(likesRef, where("postId", "==", post.id));

    async function getLikes() {
        const data = await getDocs(likesDoc);
        setLikeAmount(data.docs.length);
    }

    async function addLike() {
        await addDoc(likesRef, {
            userId: user?.uid,
            postId: post?.id,
        });
    }

    useEffect(() => {
        getLikes();
    }, []);

    return (
        <section key={post.id} className="w-2/6 p-2 m-auto border border-black">
            <h1 className="font-bold">Title: {post.title}</h1>
            <p>Description: {post.description}</p>
            <footer className="text-sm text-end">
                <div>
                    <button onClick={addLike}>👍</button>
                    Likes : {likeAmount}
                </div>
                <div>Author: {post.author}</div>
            </footer>
        </section>
    );
}

export default Post;
