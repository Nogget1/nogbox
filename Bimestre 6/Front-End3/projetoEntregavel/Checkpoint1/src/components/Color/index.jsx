import styles from './color.module.css';

export function Color({ color, toggleColorBoughtStatus }) {
  return (
    <div className={styles.card}>
      <input type="checkbox" onClick={toggleColorBoughtStatus} />
      <li>
        {color.isBought ?
          (
            <del>
              {color.amount} {color.name}
            </del>
          ) :
          (
            `${color.amount} ${color.name}`
          )
        }
      </li>
    </div>
  )
}