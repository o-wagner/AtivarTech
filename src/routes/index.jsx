import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Food from "../pages/Food";
import Contato from "../pages/Contato";
import Conteudos from "../pages/Conteudos";
import Varejo from "../pages/Varejo";
import Indique from "../pages/Indique";

export default function AppRoutes() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/solucoes/food" exact element={<Food />} />
            <Route path="/solucoes/varejo" exact element={<Varejo />} />
            <Route path="/sobre" exact element={<Sobre />} />
            <Route path="/contato" exact element={<Contato />} />
            <Route path="/conteudos" exact element={<Conteudos />} />
            <Route path="/indique-e-ganhe" exact element={<Indique />} />
        </Routes>
    );
}