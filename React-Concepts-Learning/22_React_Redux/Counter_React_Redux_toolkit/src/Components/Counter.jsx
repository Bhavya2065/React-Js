import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../store/counter'
import { privalcyActions } from '../store/privacy'

function Counter() {
    const { counter } = useSelector(state => state.counter) // Professional Method & Best Practises(Object destructring)
    const privacy = useSelector(state => state.privacy)

    const dispatch = useDispatch()
    const AddElement = useRef()
    const SubtractElement = useRef()

    const handleIncrement = () => {
        dispatch(counterActions.Increment())
    }
    const handleDecrement = () => {
        dispatch(counterActions.Decrement())
    }
    const handleAdd = () => {
        dispatch(counterActions.Add(AddElement.current.value))
    }
    const handleSub = () => {
        dispatch(counterActions.Subtract(SubtractElement.current.value))
    }
    const handlePrivacy = () => {
        dispatch(privalcyActions.toggle())
    }

    return (
        <center>
            <div className="card mt-5" style={{ width: "50rem", border: "1px solid black" }}>
                <div className="px-4 py-5 my-5 text-center">
                    <img className="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                    <h1 className="display-5 fw-bold text-body-emphasis">Counter</h1>
                    <div className="col-lg-6 mx-auto">
                        {/* <p className="lead mb-4">Counter Current Value: {counter}</p> */}
                        {privacy ? <p className="lead mb-4">These is the Private Content</p> : <p className="lead mb-4">Counter Current Value: {counter}</p>}
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center my-3">
                            <button type="button" className="btn btn-primary" onClick={handleIncrement}>Increment</button>
                            <button type="button" className="btn btn-secondary" onClick={handleDecrement}>Decrement</button>

                        </div>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center my-3">
                            <input type="number" placeholder='Enter Add Value Here..' ref={AddElement} />
                            <button type="button" className="btn btn-danger" onClick={handleAdd}>Add</button>
                        </div>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center my-3">
                            <input type="number" placeholder='Enter Subtract Value Here..' ref={SubtractElement} />
                            <button type="button" className="btn btn-success" onClick={handleSub}>Subtract</button>
                        </div>
                        <button type="button" className="btn btn-warning" onClick={handlePrivacy}>Privacy Content</button>
                    </div>
                </div>
            </div>
        </center>
    )
}

export default Counter