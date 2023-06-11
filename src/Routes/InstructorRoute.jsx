
import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useInstractor from "../Hooks/useInstractor";


const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstractor, isInstractorLoading] =useInstractor()
    const location = useLocation();

    if(loading || isInstractorLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstractor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;



