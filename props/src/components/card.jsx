// Method 1: call by object

// export default function Card(props) {
//     return (
//         <>
//             <div
//                 className="bg-white border border-gray-200 shadow-md w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
//                 <div className="p-6">
//                     <div>
//                         <h3 className="text-lg font-semibold">{props.heading}</h3>
//                         <p className="mt-2 text-sm text-slate-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas</p>
//                     </div>
//                     <button className="mt-6 rounded-md text-black bg-green-200">View</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// Method 2: call by object key directly

export default function Card({ heading, btnText="View" }) {
    return (
        <>
            <div
                className="bg-white border border-gray-200 shadow-md w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
                <div className="p-6">
                    <div>
                        <h3 className="text-lg font-semibold">{heading}</h3>
                        <p className="mt-2 text-sm text-slate-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas</p>
                    </div>
                    <button className="mt-6 rounded-md text-black bg-green-200">{btnText}</button> 
                </div>
            </div>
        </>
    )
}


// Note 1: By default the props is an object.
// Note 2: If the value of any key is not passed then print some text by default like this for btnText -> Card({ heading, btnText="View" })
// Note 3: <Card myArr=[1,2,3]/>   <===   We can't pass array and object directly into the component in App.jsx, if we pass the array or object then first we define it outside and then we can call it