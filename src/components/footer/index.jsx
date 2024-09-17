import React, { useEffect, useState } from 'react'
import order from '../../images/order.svg'
import { useParams } from 'react-router'

const Index = () => {
    const { name } = useParams()
    const [color, setcolor] = useState('')

    useEffect(() => {
        switch (name) {
            case "model-3": setcolor("red")
                break
            case "model-x": setcolor("grey")
                break
            case "model-y": setcolor("black")
                break
            default: setcolor("blue")
        }
    }, [name])


    return (
        <footer className='mt-[20px] w-full bg-[#000] py-[20px] text-[#fff]'>
            <div className="w-full max-w-[1400px] min-h-[50px] bg-[#000] m-auto">
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <ul className='flex flex-col md:flex-row items-center gap-[20px] md:gap-[100px]'>
                        <li className='flex flex-col items-center justify-center'>
                            <h2 className='text-[20px] md:text-[24px] font-[500] leading-[28.6px]'>396 mi</h2>
                            <small className='text-[12px] leading-[14.32px] text-[#eeeded]'>Range (EPA est.)</small>
                        </li>
                        <li className='flex flex-col items-center justify-center'>
                            <h2 className='text-[20px] md:text-[24px] font-[500] leading-[28.6px]'>1.99s</h2>
                            <small className='text-[12px] leading-[14.32px] text-[#eeeded]'>0-60 mph*</small>
                        </li>
                        <li className='flex flex-col items-center justify-center'>
                            <h2 className='text-[20px] md:text-[24px] font-[500] leading-[28.6px]'>200mph</h2>
                            <small className='text-[12px] leading-[14.32px] text-[#eeeded]'>Top Speed†</small>
                        </li>
                        <li className='flex flex-col items-center justify-center'>
                            <h2 className='text-[20px] md:text-[24px] font-[500] leading-[28.6px]'>1,020hp</h2>
                            <small className='text-[12px] leading-[14.32px] text-[#eeeded]'>Peak Power</small>
                        </li>
                    </ul>
                    <button style={{ background: color }} className='flex items-center gap-[16px] md:gap-[24px] px-[12px] md:px-[16px] py-[8px] rounded-[85px]  bg-[#0081FF] mt-[20px] md:mt-0'>
                        <span className='text-[16px] md:text-[18px] font-[700] '

                        >Order Now</span>
                        <span><img src={order} alt="order icon" /></span>
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Index
