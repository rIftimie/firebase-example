import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSignOut } from "react-firebase-hooks/auth";

function Navbar() {
    const [user] = useAuthState(auth);
    const [signOut, loading, error] = useSignOut(auth);

    return (
        <>
            <nav className="flex items-center justify-between px-4 py-2 text-xl font-bold text-white bg-blue-500">
                <ul className="flex justify-center space-x-3">
                    <li>
                        <Link
                            className="px-2 py-1 underline hover hover:bg-blue-400"
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    {!auth.currentUser ? (
                        <li>
                            <Link
                                className="px-2 py-1 underline hover hover:bg-blue-400"
                                to="/login"
                            >
                                Login
                            </Link>
                        </li>
                    ) : (
                        <li>
                            <Link
                                className="px-2 py-1 underline hover hover:bg-blue-400"
                                to="/create"
                            >
                                Create Post
                            </Link>
                        </li>
                    )}
                </ul>
                {auth.currentUser && (
                    <ul className="flex items-center justify-center space-x-4">
                        <li className="flex items-center">
                            {auth.currentUser.displayName}
                            <img
                                className="w-8 rounded-full"
                                src={auth.currentUser.photoURL}
                            />
                        </li>
                        <li>
                            <button
                                onClick={() => signOut()}
                                className="px-2 py-1 font-normal text-black bg-white rounded hover:bg-white/75"
                            >
                                Sign out
                            </button>
                        </li>
                    </ul>
                )}
            </nav>
        </>
    );
}
export default Navbar;
