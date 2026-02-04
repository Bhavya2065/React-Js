import styles from "./Container.module.css"

function Container(propes) {
    return (
        <>
            <h1>{propes.data}</h1>
            <div className={styles.container}>{propes.children}</div>
        </>
    )
}

export default Container