import { useState } from 'react'
import { PerfilGitHub } from '../../components/PerfilGitHub'
import styles from './home.module.css'
import { api } from '../../services/api';

export function Home() {
const [perfil, setPerfil] = useState({});
const [usuarioASerBuscado, setUsuarioASerBuscado] = useState('');

const buscaDadosPerfil = async (event) => {
    event.preventDefault();

    if(usuarioASerBuscado.length > 0 ){
        try {
            const {data} = await api.get(`/users/${usuarioASerBuscado}`)
            setPerfil(data);
        } catch (error) {
            if (error.response.data.message === 'Not Found'){
                alert('Usuário não encontrado');
            }
            
        }
    }else {
        alert('Campo de pesquisa deve ser preenchido');
    }
}


return (
    <>
    <main className={styles.main}>
        <section id='card' className={styles.cardSection}>
        <form onSubmit={buscaDadosPerfil}>
            <input type="text" placeholder='Insira o nome do seu usuário do GitHub' 
            id='nomeUsuario' name='nomeUsuario'
            onChange={(event) => setUsuarioASerBuscado(event.target.value)} value={usuarioASerBuscado} />
            <button type='Submit'>Pesquisar</button>
        </form>
        <div>
        {perfil.login && <PerfilGitHub perfil={perfil} />}
        </div>
        </section>
    </main>
    </>
)
}


