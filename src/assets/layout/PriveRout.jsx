import { useContext } from "react";
import { authContest } from "./AuthProvider";
import { Navigate } from "react-router-dom";


const PriveRout = ({ children }) => {

    const { user, loading } = useContext(authContest)

    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }

    if (user) {
        return children
    } else {
        return <Navigate to='/login'></Navigate>
    }

};

export default PriveRout;