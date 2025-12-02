import styles from './card.module.css'

function Card() {
  return (
    <div className={styles.box} style={{background: "red"}}>
        <h2 className={styles["box-title"]} style={{fontSize: "40px", fontWeight: "200"}}>Hello CSS Modules</h2>
    </div>
  )
}

export default Card

// Note: Inline CSS apply first and the external CSS applies
// Note: whenever we define inline style then then Syntax: {{key: "value"}}
// Note: when the class name have a '-' like box-title then We write that style like this styles["box-title"]