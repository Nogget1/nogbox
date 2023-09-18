import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/home"
import { NotFound } from "../pages/notFound"


export function RouteList(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="*" element={NotFound}/>
        </Routes>
        </BrowserRouter>
    )
}