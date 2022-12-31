import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

function CreateForm() {
    const postsRef = collection(db, "posts");
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("You must add a title"),
        description: yup.string().required("You must add a description"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    async function onCreatePost(data) {
        await addDoc(postsRef, {
            ...data,
            author: user?.displayName,
            userId: user?.uid,
        });
        navigate("/");
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onCreatePost)}
                className="flex flex-col w-2/6 p-4 m-auto mt-4 space-y-4 text-white bg-blue-500 border border-black rounded-xl"
            >
                <label htmlFor="" className="flex flex-col font-bold">
                    Title of the post:
                    <input
                        type="text"
                        className="px-2 py-1 font-normal text-black bg-gray-200 border border-black rounded"
                        {...register("title")}
                    />
                    {errors.title && (
                        <p className="text-red-700">{errors.title.message}</p>
                    )}
                </label>
                <label htmlFor="" className="flex flex-col font-bold">
                    Description:
                    <textarea
                        className="px-2 py-1 font-normal text-black bg-gray-200 border border-black rounded resize-none"
                        cols="30"
                        rows="5"
                        {...register("description")}
                    ></textarea>
                    {errors.description && (
                        <p className="text-red-700">
                            {errors.description.message}
                        </p>
                    )}
                </label>
                <button
                    type="submit"
                    className="p-2 m-auto font-bold text-black bg-white rounded hover:bg-white/80 w-fit"
                >
                    Submit Post
                </button>
            </form>
        </>
    );
}

export default CreateForm;
