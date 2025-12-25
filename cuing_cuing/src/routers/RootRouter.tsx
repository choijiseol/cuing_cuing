import {BrowserRouter, Route, Routes} from "react-router";
import HomeScreen from "../screens/home/HomeScreen.tsx";
import NotFoundScreen from "../screens/NotFoundScreen.tsx";
import ExComponentScreen from "../screens/ExComponentScreen.tsx";

export default function RootRouter(){
    return <BrowserRouter>
        <Routes>
            <Route path={"*"} element={<NotFoundScreen/>}/>
            <Route path={"/"} element={<HomeScreen/>}/>
            <Route path={"/home"} element={<HomeScreen/>}/>
            {/*솔희의 Flex, Text 사용을 위한..*/}
            <Route path={"/ex/component"} element={<ExComponentScreen/>}/>
        </Routes>
    </BrowserRouter>
}