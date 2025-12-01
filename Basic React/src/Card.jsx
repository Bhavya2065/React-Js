import styles from './card.module.css'

function Card() {
  return (
    <div className={styles.box} style={{background: "red"}}>
        <h2 className={styles.title} style={{fontSize: "40px", fontWeight: "200"}}>Hello CSS Modules</h2>
    </div>
  )
}

export default Card

// Note: Inline CSS apply first and the external CSS applies