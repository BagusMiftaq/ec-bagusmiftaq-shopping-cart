import './App.css';
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import React from "react";


function App(props) {
    const [totalPrice,setTotalPrice] = React.useState(0);

    return (
        <>
            <div className={'flex flex-col'}>
                <div className={'bg-gray-100 p-4'}>
                    <h1 className={'text-2xl mt-4 mb-4 w-full font-bold text-center text-gray-600'}>Shopping cart</h1>
                </div>
                <div className={'flex flex-row justify-center p-4'}>
                    <Cart value={(val)=>{
                        setTotalPrice(val);
                    }
                    }/>
                    <Checkout value={totalPrice.toFixed(2)}/>
                </div>
            </div>
        </>
    );
}

export default App;
