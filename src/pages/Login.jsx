import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    async function signInWithGoogle() {
        try {
            const response = await signInWithPopup(auth, provider);
            navigate("/");
        } catch (e) {
            console.log("error");
        }
    }

    return (
        <>
            <main className="flex justify-center p-8">
                <button
                    className="p-1 bg-gray-200 border border-black hover:bg-gray-100"
                    onClick={signInWithGoogle}
                >
                    Sign in with Google
                </button>
            </main>
        </>
    );
}
export default Login;
