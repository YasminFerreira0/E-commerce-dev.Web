import { Navigate } from "react-router-dom";

export default function RotasPrivadas({children}) {
    const isAuth = localStorage.getItem("auth") === "true";
    return isAuth ? children : <Navigate to="/login" />;
}