import { useNavigate } from "react-router";

function EmptyCart() {
    const navigate = useNavigate()
    return (
        <>
            <figure className="text-center">
                <blockquote className="blockquote">
                    <p>There is no cart Item in Bag !!</p>
                </blockquote>
                <figcaption className="">
                    <button type="button" className="btn btn-primary" onClick={() => navigate('/')}>Continue Shopping</button>
                </figcaption>
            </figure>
        </>
    )
}

export default EmptyCart