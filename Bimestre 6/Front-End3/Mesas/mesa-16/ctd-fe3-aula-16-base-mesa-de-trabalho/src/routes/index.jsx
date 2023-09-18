import { Routes, Route } from "react-router-dom";

import Home from "../Home.jsx";
import Beer from "../Beer.jsx";
import Contact from "../Contact.jsx";

export function RoutesApp() {
return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beer/:id" element={<Beer />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
);
}