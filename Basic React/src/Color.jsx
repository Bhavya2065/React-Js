import styles from './redBox.module.css'
import style from './blueBox.module.css'

export default function RedBox() {
  return <div className={styles.box}>Red Box</div>
}

export function BlueBox() {
  return <div className={style.box}>Blue Box</div>
}
