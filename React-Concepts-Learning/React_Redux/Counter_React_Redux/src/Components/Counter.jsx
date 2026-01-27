import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
    const counter = useSelector(state => state.counter)
    const privacy = useSelector(state => state.privacy)
    const dispatch = useDispatch()
    const AddElement = useRef()
    const SubtractElement = useRef()

    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT' })
    }
    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT' })
    }
    const handleAdd = () => {
        dispatch({
            type: 'ADD', payload: {
                num: AddElement.current.value
            }
        })
    }
    const handleSub = () => {
        dispatch({
            type: 'SUB', payload: {
                num: SubtractElement.current.value
            }
        })
    }
    const handlePrivacy = () => {
        dispatch({
            type: 'PRIVACY'
        })
    }

    return (
        <center>
            <div className="card mt-5" style={{ width: "50rem", border: "1px solid black" }}>
                <div className="px-4 py-5 my-5 text-center">
                    <img className="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                    <h1 className="display-5 fw-bold text-body-emphasis">Counter</h1>
                    <div className="col-lg-6 mx-auto">
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