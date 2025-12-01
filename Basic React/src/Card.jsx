import styles from './card.module.css'

function Card() {
  return (
    <div className={styles.box}>
        <h2 className={styles.title}>Hello CSS Modules</h2>
    </div>
  )
}

export default Card