import { useNavigate } from "react-router-dom";
import {useEffect} from "react";

export default function NotFoundScreen() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/home");
    })

    return <></>
}