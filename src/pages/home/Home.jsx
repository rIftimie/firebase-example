import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import Post from "./Post";

function Home() {
    const [postList, setPostList] = useState(null);
    const postsRef = collection(db, "posts");
    async function getPosts() {
        const data = await getDocs(postsRef);
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            <main>
                {postList?.map((doc) => (
                    <Post post={doc} />
                ))}
            </main>
        </>
    );
}
export default Home;
