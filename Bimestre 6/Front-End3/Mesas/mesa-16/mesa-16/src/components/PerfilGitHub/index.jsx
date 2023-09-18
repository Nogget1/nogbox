import { useEffect, useState, useCallback } from 'react';
import styles from './perfil.module.css'

export function PerfilGitHub({perfil}){

    const [perfilNormalizado, setPerfilNormalizado] = useState({});

    const usuarioNormalizado = useCallback(() => {
        setPerfilNormalizado({login: perfil.login, 
            imgUrl: perfil.avatar_url, 
            nome: perfil.name ? perfil.name : perfil.login});

        
    }, [perfil.avatar_url, perfil.login, perfil.name])

    useEffect(() => {
        usuarioNormalizado()
    }, [usuarioNormalizado])

    return (
        <div className="styles.card">
            <div className="imageContainer">
                <img src={perfilNormalizado.imgUrl} className={styles.cardUserImage} 
                alt={`Imagem do usuário ${perfilNormalizado.nome}`} />
            </div>
        <h3>Oi eu sou o {perfilNormalizado.nome}</h3>
        </div>
    )
}