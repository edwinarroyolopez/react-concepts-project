import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Hooks = lazy(() => import("@/pages/hooks"));


const MainRoutes = () =>{
    return(
        <Routes>
             <Route index element={<Hooks />} />
            <Route path="/" element={<Hooks />} />
        </Routes>
    )
}

export default MainRoutes;