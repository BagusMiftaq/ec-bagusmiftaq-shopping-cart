import denim from '../../assets/item-blue-denim.png'
import hoodie from '../../assets/item-red-hoodie.png'
import {BsTrashFill, BsHeartFill} from "react-icons/bs";
import React from "react";

export default function Cart(props) {

    const [count1, setCount1] = React.useState(0);

    const [count2, setCount2] = React.useState(0);

    const [totalPrice,setTotalPrice] = React.useState(0);

    const [disBtn, setDisBtn] = React.useState(false);


    const increase1=()=>{
        setCount1(prevState => prevState + 1)
        setTotalPrice(prevState => prevState + ITEMS[0].price)
    }

    const decrease1=()=>{
        if(count1<=0){
            setDisBtn(true);
        } else {
            setCount1(prevState => prevState - 1)
            setTotalPrice(prevState => prevState - ITEMS[0].price)
        }
        setDisBtn(false);
    }

    const increase2=()=>{
        setCount2(prevState => prevState + 1)
        setTotalPrice(prevState => prevState + ITEMS[1].price)
    }

    const decrease2=()=>{
        if(count2<=0){
            setDisBtn(true);
        } else {
            setCount2(prevState => prevState - 1)
            setTotalPrice(prevState => prevState - ITEMS[1].price)
        }
        setDisBtn(false);
    }

    const ITEMS = [
        {name:"Blue denim shirt", image:denim, color:"Blue", size:"M", price: 17.99, qty:count1, increase:increase1, decrease:decrease1},
        {name:"Red Hoodie", image:hoodie, color:"Red", size:"M", price: 35.99, qty:count2, increase:increase2, decrease:decrease2}
    ]

    return (props.value(totalPrice),
        <>
                <div className={'p-6 mr-8 bg-white rounded-md drop-shadow-xl flex-col justify-start'}>
                    <div className={'font-semibold text-2xl mb-6'}>Cart ({ITEMS.length} items)</div>
                    {ITEMS.map((item, index)=>(
                        <div className={'mb-6 flex flex-row mb-8'}>
                            <div className={'h-52 w-48 rounded-md bg-gray-300 p-8'}>
                                <img src={item.image}/>
                            </div>
                            <div className={'ml-8'}>
                                <p className={'text-lg font-semibold mb-4'}>{item.name}</p>
                                <div className={'text-sm flex text-slate-400 pr-10 mb-4'}>
                                    <p className={'mr-2'}>SHIRT</p>
                                    <p className={'mr-2'}>-</p>
                                    <p>{item.color}</p>
                                </div>
                                <div className={'text-sm flex text-slate-400 pr-10 mb-2'}>
                                    <p className={'mr-6'}>Color</p>
                                    <p>{item.color}</p>
                                </div>
                                <div className={'text-sm flex text-slate-400 pr-16 mb-6'}>
                                    <p className={'mr-6'}>SIZE :</p>
                                    <p>{item.size}</p>
                                </div>
                                <div className={'flex flex-row cursor-pointer'}>
                                    <button className={'text-sm flex flex-row items-center text-slate-400 hover:text-red-600'}>
                                        <BsTrashFill/>
                                        <p className={'ml-1'}>REMOVE ITEM</p>
                                    </button>
                                    <button
                                        className={'text-sm flex flex-row items-center text-slate-400 ml-4 hover:text-pink-600'}>
                                        <BsHeartFill/>
                                        <p className={'ml-1'}>MOVE TO WISH LIST</p>
                                    </button>
                                </div>
                            </div>
                            <div className={'flex flex-col justify-start ml-24'}>
                                <div className={'flex'}>
                                    <button className={'bg-white border rounded-l-lg h-7 w-9 hover:bg-slate-100 active:bg-slate-300'} onClick={item.increase}>+</button>
                                    <div className={'flex justify-center items-center bg-white border h-7 w-9 '}>{item.qty}</div>
                                    <button className={'bg-white border rounded-r-lg h-7 w-9 hover:bg-slate-100 active:bg-slate-300'} onClick={item.decrease} disabled={disBtn}>-</button>
                                </div>
                                <div className={'flex justify-center w-27 mb-24'}>
                                    <p className={'text-xs mt-1 text-slate-400'}>(Note: 1 piece)</p>
                                </div>
                                <div className={'flex justify-end mt-2 font-bold'}>
                                    <p>${item.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
        </>
    )
}