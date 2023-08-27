import { useState } from 'react';
import { Color } from './components/Color';
import styles from './app.module.css';

function App() {
  const [ColorList, setColorList] = useState([]);
  const [nomeCor, setnomeCor] = useState('');
  const [hexCor, setHexCor] = useState(0);

  const handleColorSubmit = (event) => {
    event.preventDefault();

    const newColor = { name: nomeCor, amount: hexCor, isBought: false };
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
          <p>Nome</p>
          <input
            type="text"
            name='nomeCor'
            id='nomeCor'
            placeholder='Digite o nome da sua cor'
            onChange={(event) => setnomeCor(event.target.value)}
            value={nomeCor}
          />
          <p>Cor</p>
          <input
            type="text"
            name='hexCor'
            id='hexCor'
            placeholder='Digite o Hexadecimal da sua cor'
            onChange={(event) => setHexCor(event.target.value)}
            value={hexCor}
          />
          <button
            type="submit"
            disabled={nomeCor === ''}
          >Add
          </button>
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
