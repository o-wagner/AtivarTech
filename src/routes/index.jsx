import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Food from "../pages/Food";
import Contato from "../pages/Contato";
import Conteudos from "../pages/Conteudos";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/solucoes/food" exact element={<Food />} />
            <Route path="/sobre" exact element={<Sobre />} />
            <Route path="/contato" exact element={<Contato />} />
            <Route path="/conteudos" exact element={<Conteudos />} />
        </Routes>
    );
}