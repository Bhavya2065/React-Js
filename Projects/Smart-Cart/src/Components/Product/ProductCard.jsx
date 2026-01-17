import { useContext, useState } from 'react';
import { ShoppingBag, Minus, Plus, Heart, Tag } from 'lucide-react';
import { ProductContext } from '../../Context/CartContext';

export default function ProductCard({ product }) {
    const [quantity, setQuantity] = useState(1);

    // const { addNewProduct } = useContext(ProductContext)

    return (
        <div className="bg-gray-100 p-6 font-sans flex justify-center">
            <div className="w-full max-w-[320px] bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-50 hover:shadow-2xl transition-shadow duration-300">

                {/* Image Section */}
                <div className="relative h-56 bg-white p-6 flex items-center justify-center group">
                    <div className="absolute top-5 left-5 right-5 flex justify-between z-10">
                        <span className="bg-[#242424] text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                            <Tag size={10} className="text-yellow-400 fill-yellow-400" />
                            {product.discountPercentage}% OFF
                        </span>
                        <button className="p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-red-500 transition-colors border border-gray-100">
                            <Heart size={16} />
                        </button>
                    </div>

                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-full object-contain drop-shadow-md transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                </div>

                {/* Content Section */}
                <div className="px-8 pb-8 pt-2">
                    <div className="mb-8 min-h-12.5">
                        <h2 className="text-[1.1rem] font-bold text-gray-800 leading-tight">
                            {product.title}
                        </h2>
                    </div>

                    <div className="flex items-center justify-between mb-8">
                        {/* Quantity Selector */}
                        <div className="flex items-center bg-gray-50 border border-gray-100 rounded-full p-1 shadow-inner">
                            <button
                                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                className="w-9 h-9 flex items-center justify-center bg-white rounded-full text-gray-400 shadow-sm hover:text-indigo-600 transition-colors border border-gray-100"
                            >
                                <Minus size={16} />
                            </button>

                            <span className="w-10 text-center text-sm font-bold text-gray-800 select-none">
                                {quantity}
                            </span>

                            <button
                                onClick={() => setQuantity(q => q + 1)}
                                className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors"
                            >
                                <Plus size={16} />
                            </button>
                        </div>

                        {/* Price Details */}
                        <div className="text-right">
                            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Total</p>
                            <p className="text-xl font-extrabold text-gray-900 tracking-tight">
                                ${(product.price * quantity).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                            </p>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-[#5841ff] hover:bg-[#4731e6] text-white text-sm font-bold py-4 rounded-2xl shadow-indigo-100 shadow-2xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                        <ShoppingBag size={18} />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}