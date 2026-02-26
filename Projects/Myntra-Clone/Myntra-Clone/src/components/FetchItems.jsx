import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { itemActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatus";

function FetchItems() {

    const fetching = useSelector(state => state.fetchStatus)
    const dispatch = useDispatch();

    useEffect(() => {
        if (fetching.fetchDone) return;
        dispatch(fetchStatusActions.markFetchingStarted());
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('http://localhost:8080/items', { signal })
            .then(res => res.json())
            .then(({ items }) => {
                dispatch(fetchStatusActions.markDone())
                dispatch(fetchStatusActions.markFetchingFinished())
                dispatch(itemActions.addInitialItems(items[0]));
            });

        return () => {
            controller.abort();
        }
    }, [])

    return (
        <>

        </>
    )
}

export default FetchItems