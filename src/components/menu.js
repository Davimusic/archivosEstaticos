import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { updateInfo } from "@/funciones/redux/actions";
import '../estilos/menu.css'
import '../../src/app/globals.css'

import llamarTodoObjetoMatematico from "@/funciones/conectoresBackend/llamarTodoObjetoMatematico";
import { retornarLlavesValoresProcesados } from "@/funciones/conectoresBackend/retornarLlavesValoresProcesados";

export function Menu({ onActivate }){
    const router = useRouter();
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
    }, [router.asPath]);

    


    const handleNavigation = (ruta) => {
        router.push(ruta);
        dispatch({ type: 'NAVIGATE', payload: ruta });
    };
    
    function changeMenuState(){
        setIsOpen(!isOpen);
        onActivate(!isOpen);
    }

    return(
        <div className={`dropdown ${isOpen ? 'open' : ''}`}> 
            <img onClick={()=> changeMenuState()} className="imagenes" style={{margin: '5px'}} src="https://res.cloudinary.com/dplncudbq/image/upload/v1701542645/menu1_ui2fw4.png" alt="Descripción de la imagen" />
            {isOpen && (
                <div className='menuContent'>
                    <button onClick={() => handleNavigation('/about')}>Sobre nosotros</button>
                    <button onClick={() => handleNavigation('/')}>Inicio</button>
                    <button onClick={() => {
                        if (typeof window !== 'undefined') {
                            window.location.href='https://apu-kappa.vercel.app/'
                        }
                    }}>Ir a página externa</button>
                </div>
            )}
        </div>
    )
}


