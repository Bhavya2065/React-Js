import BagItem from '../components/BagItem'
import BagSummary from '../components/BagSummary'
import { useSelector } from 'react-redux'
import EmptyCart from '../components/EmptyCart'

function Bag() {

    const bagItem = useSelector(store => store.bagItem)

    return (
        <>
            <main>
                <div className="bag-page">
                    {bagItem.length === 0 ? <EmptyCart /> : (
                        <>
                            <div className='bag-item-div'>
                                {bagItem.map((item) => <BagItem key={item.id} item={item} />)}
                            </div>
                            <BagSummary />
                        </>
                    )}
                </div>
            </main>
        </>
    )
}

export default Bag