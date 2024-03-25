'use client'
import React, { useState } from 'react'
import type { RootState } from '@/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@/redux/features/counter/counterSlice'
type Props = {}

const Page = (props: Props) => {
    // redux
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
    const btnIncrement = () => {
        dispatch(increment())
    }
    const btnDecrement = () => {
        dispatch(decrement())
    }
    return (
        <div className='flex h-screen'>
            <div className='grid grid-cols-4  bg-light-500 m-auto grap-5'>
                <div className='col-span-2 col-start-2'>
                    <div className='flex justify-center items-center text-5xl bg-white text-center m-auto rounded-xl h-24'>
                        {count}
                    </div>
                </div>
                <div className='col-span-2 col-start-2 gap-5'>
                    <input className='rounded-xl m-2 h-16 w-14 bg-green-400 text-white' type="button" value="+" onClick={btnIncrement} />
                    <input className='rounded-xl m-2 h-16 w-14 bg-red-400 text-white' type="button" value="-" onClick={btnDecrement} />
                </div>
            </div>
        </div>
    )
}

export default Page