import { FaSignInAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {toast} from 'react-toastify';
import {login,reset} from '../features/auth/authSlice';
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import './login.css'; 

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const { email, password } = formData;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth);

    useEffect(() => {
        if (isError) toast.error(message);
        if (isSuccess || user) navigate("/");
        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onChange = e => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = e => {
        e.preventDefault();
        const userData = { email, password };
        dispatch(login(userData));
    };

    return (
        isLoading ? <Spinner /> : (
            <div className="login-container">
                <div className="login-header">
                    
                    <h1>Inicia sesión</h1>
                </div>
                <form className="login-form" onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input 
                            type="email" 
                            className='form-control' 
                            id="email" 
                            name="email" 
                            value={email} 
                            placeholder='Correo electrónico' 
                            onChange={onChange} 
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type="password" 
                            className='form-control' 
                            id="password" 
                            name="password" 
                            value={password} 
                            placeholder='Contraseña' 
                            onChange={onChange} 
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className='btn btn-block'>Iniciar sesión</button>
                    </div>
                </form>
                <div className="login-footer">
                    <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
                    <p>¿No tienes cuenta? <a href="/register">Crear cuenta</a></p>
                </div>
            </div>
        )
    );
}

export default Login;
