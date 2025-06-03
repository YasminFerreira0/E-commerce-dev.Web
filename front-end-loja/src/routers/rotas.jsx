import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import CadastroUsuario from '../pages/cadastroUsuario';
import Produtos from '../components/produtos';
import Home from '../pages/home';
import Dashboard from '../pages/dashboard';
import RotasPrivadas from './rotasPrivadas';
import CadastroProdutos from '../components/cadastroProdutos';
import EditarProduto from '../components/editarProduto';

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
            <Route
                path='/cadastroProdutos'
                element={
                    <RotasPrivadas>
                        <CadastroProdutos />
                    </RotasPrivadas>
                }
            />
            
            <Route
                path='/editarProduto/:id'
                element={
                    <RotasPrivadas>
                        <EditarProduto />
                    </RotasPrivadas>
                }
            />


        </Routes>
    )
}