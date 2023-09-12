import { useEffect, useState } from 'react'
import { PerfilGitHub } from './components/PerfilGitHub';
import styles from './app.module.css'

function App() {
  const [perfil, setPerfil] = useState({});
  const [exibePerfil, setExibePerfil] = useState(false);

  useEffect(() => {
    async function carregaPerfil(){

      try {
        const response = await fetch('https://api.github.com/users/Nogget1');
      const perfil = await response.json();
      setPerfil(perfil);
        
      } catch (error) {
      console.log(error.message) 
      }
    }
    carregaPerfil();
  })

  const alternaVisibilidade = () => {
    setExibePerfil((valorAnterior) => !valorAnterior)
  }

  return (
    <>
      <main className={styles.main}>
        <section id='card' className={styles.cardSection}>
        <button onClick={alternaVisibilidade}>{exibePerfil ? 'Esconder' : 'Exibir'} Perfil</button>
        <div>
        {exibePerfil && <PerfilGitHub perfil={perfil} />}
        </div>
        </section>
      </main>
    </>
  )
}

export default App
