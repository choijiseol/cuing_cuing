import { useNavigate } from "react-router-dom";
import {useEffect} from "react";

// 주소 잘못 접속 시
// 바로 /home으로 이동
export default function NotFoundScreen() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/home");
    })

    return <></>
}