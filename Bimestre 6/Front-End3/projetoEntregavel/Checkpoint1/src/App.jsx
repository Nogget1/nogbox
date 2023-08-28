import { useState } from 'react';
import { Color } from './components/Color';
import styles from './app.module.css';

function App() {
  const [ColorList, setColorList] = useState([]);
  const [nomeCor, setnomeCor] = useState('');
  const [hexCor, setHexCor] = useState(0);


  const handleColorSubmit = (event) => {
    event.preventDefault();
  
    const newColor = { name: nomeCor, hex: hexCor, isBought: false };

    if (nomeCor === '') {
      return;
    }

    const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

    if (!hexCor.match(regex)) {
      alert('O código hexadecimal é inválido.');
      return;
    }
  
    setColorList((OldColorList) => [...OldColorList, newColor]);
  }

  const toggleColorBoughtStatus = (colorToBeToggled) => {
    const listWithToggledStatus = ColorList.map(color => {
      if (colorToBeToggled === color) {
        color.isBought = !color.isBought
      }
      return color
    });
    setColorList(listWithToggledStatus);
  }

  

  return (
    <>
      <main className={styles.main}>
        <form className={styles.FormContainer} onSubmit={handleColorSubmit}>
          <h3>Adicionar nova cor</h3>
          <div className={styles.inputWrapper}>
            <div className={styles.inputBlock}>
            <p>Nome</p>
            <input
              type="text"
              name='nomeCor'
              id='nomeCor'
              placeholder='Digite o nome da sua cor'
              onChange={(event) => setnomeCor(event.target.value)}
              value={nomeCor}
            />
            </div>
            <div className={styles.inputBlock}>
            <p>Cor</p>
            <input
              type="text"
              name='hexCor'
              id='hexCor'
              placeholder='Digite o Hexadecimal da sua cor'
              onChange={(event) => setHexCor(event.target.value)}
              // value={hexCor}
            />
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <button
              type="submit"
              className='submit'
              disabled={nomeCor === ''}
            >Add
            </button>
          </div>
        </form>
        <section className={styles.listSection}>
          <h3>Minhas Cores Favoritas</h3>
          <div className={styles.listContainer}>
            <ul>
              {ColorList && (
                ColorList.map((color, index) => {
                  return (
                    <Color
                      key={index}
                      color={color}
                      toggleColorBoughtStatus={() => toggleColorBoughtStatus(color)}
                    />
                  )
                })
              )}
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
