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

// Note: children is always the fixed name. You cannot rename it. React always provides it as props.children or { children }.