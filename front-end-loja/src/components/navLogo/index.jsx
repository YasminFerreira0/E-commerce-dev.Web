import React from 'react'
import './style.css';
import { HiChip } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

export default function NavLogo() {
    const navigate = useNavigate();

    return (
        <>
            <div className="navLogin">
                <div className="logo" onClick={() => navigate("/")}>
                    <HiChip size={50} color="#2A7AE4" />
                    <h1><b>Tecno</b>Parts</h1>
                </div>
            </div>
        </>
    )
}