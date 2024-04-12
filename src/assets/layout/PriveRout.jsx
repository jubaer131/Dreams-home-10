import { useContext } from "react";
import { authContest } from "./AuthProvider";
import { Navigate } from "react-router-dom";


const PriveRout = ({ children }) => {

    const { user } = useContext(authContest)
    if (user) {
        return children
    } else {
        return <Navigate to='/login'></Navigate>
    }

    return (
        <div>


        </div>
    );
};

export default PriveRout;