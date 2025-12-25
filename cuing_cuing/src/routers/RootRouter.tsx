import {BrowserRouter, Route, Routes} from "react-router";
import HomeScreen from "../screens/home/HomeScreen.tsx";
import NotFoundScreen from "../screens/NotFoundScreen.tsx";

export default function RootRouter(){
    return <BrowserRouter>
        <Routes>
            <Route path={"*"} element={<NotFoundScreen/>}/>
            <Route path={"/"} element={<HomeScreen/>}/>
            <Route path={"/home"} element={<HomeScreen/>}/>
        </Routes>
    </BrowserRouter>
}