import {Route, Routes} from 'react-router-dom';
import Login from '../pages/Login';
import CadastroUsuario from '../pages/cadastroUsuario';
import Produtos from '../components/produtos';
import Home from '../pages/home';

export default function Rotas() {
    return(
        <Routes>
            <Route index element={<Home/>} />

            <Route path="/login" element={<Login/>} />
            <Route 
                path="/cadastro" 
                element={<CadastroUsuario/>} 
            />
            <Route 
                path="/produtos" 
                element={<Produtos/>} 
            />

        </Routes>
    )
}