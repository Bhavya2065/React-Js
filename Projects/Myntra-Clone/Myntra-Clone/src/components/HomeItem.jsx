import { useDispatch, useSelector } from 'react-redux'
import { bagActions } from '../store/bagSlice';
import { bagItemActions } from '../store/bagItemSlice';

function HomeItem({ item }) {

    const dispatch = useDispatch();
    const bag = useSelector(store => store.bag);

    const handleaddToBag = () => {
        dispatch(bagActions.addToBag(item.id));
        dispatch(bagItemActions.displayBagItem(item))
    }
    const handleRemoveformBag = () => {
        dispatch(bagActions.removefromBag(item.id));
    }

    return (
        <>
            <div className="item-container">
                <img className="item-image" src={item.image} alt="item image" />
                <div className="rating">
                    {item.rating.stars} ⭐ | {item.rating.count}
                </div>
                <div className="company-name">{item.company}</div>
                <div className="item-name">{item.item_name}</div>
                <div className="price">
                    <span className="current-price">Rs {item.current_price}</span>
                    <span className="original-price">Rs {item.original_price}</span>
                    <span className="discount">(${item.discount_percentage}% OFF)</span>
                </div>
                {bag.includes(item.id) ? <button type="button" className="btn-add-bag btn btn-danger" onClick={handleRemoveformBag}>Remove From Bag</button> : <button className="btn-add-bag btn btn-success" onClick={handleaddToBag}>Add to Bag
                </button>}
            </div>
        </>
    )
}

export default HomeItem