import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import CadastroUsuario from '../pages/cadastroUsuario';
import Produtos from '../components/produtos';
import Home from '../pages/home';
import Dashboard from '../pages/dashboard';
import RotasPrivadas from './rotasPrivadas';

export default function Rotas() {
    return (
        <Routes>
            <Route index element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route
                path="/cadastro"
                element={<CadastroUsuario />}
            />
            <Route
                path="/produtos"
                element={<Produtos />}
            />
            <Route
                path='/dashboard'
                element={
                    <RotasPrivadas>
                        <Dashboard />
                    </RotasPrivadas>
                }
            />


        </Routes>
    )
}