function ErrorMessage({ Items }) {
    return (
        <>
            {Items.length === 0 && <h4>I'm still hungry.</h4>}
        </>
    )
}

export default ErrorMessage