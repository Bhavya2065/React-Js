function WelcomeMessage({ onPostButton }) {
    return (
        <>
            <center style={{ width: "100%", textAlign: "center", marginTop: "50px" }}>
                <h1>There are no posts</h1>
                <button 
                    type="button"
                    className="btn btn-primary" 
                    style={{ display: "inline-block", marginTop: "5px" }} 
                    onClick={onPostButton}
                >
                    Get Post from Server
                </button>
            </center>
        </>
    )
}

export default WelcomeMessage