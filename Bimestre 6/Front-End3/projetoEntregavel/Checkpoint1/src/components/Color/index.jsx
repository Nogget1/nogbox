import styles from './color.module.css';

export function Color({ color }) {
  return (
    <div className={styles.card} style={{ backgroundColor: color.hex }}>
      
      <li>
        {color.isBought ?
          (
            <del>
              {color.name} {color.hex}
            </del>
          ) :
          (
            `${color.name} ${color.hex}`
          )
        }
      </li>
    </div>
  )
}