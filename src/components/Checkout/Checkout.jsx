import React from "react";

export default function Checkout(props) {
    return (
        <div className={'p-6 bg-white rounded-md drop-shadow-xl flex-col justify-start h-96'}>
            <div className={'font-semibold text-2xl mb-8 mr-24'}>
                <p>The total amount of</p>
            </div>
            <div className={'text-sm flex text-slate-400 justify-between mb-4'}>
                <p>Temporal amount</p>
                <p className={'text-black font-semibold'}>${props.value}</p>
            </div>
            <div className={'text-sm flex text-slate-400 flex-row justify-between pb-4 mb4 border-b'}>
                <p>Shipping</p>
                <p className={'text-black font-semibold'}>Gratis</p>
            </div>
            <div className={'flex flex-row justify-between items-center'}>
                <div className={'font-semibold text-xl  mb-8 mr-24'}>
                    <p>The total amount of </p>
                    <p>(including MAT)</p>
                </div>
                <div className={'font-semibold text-xl mb-8 ml-24'}>
                    <p>${props.value}</p>
                </div>
            </div>
            <div></div>
        </div>
    )
}