'use client';
import React from 'react'

const AddToCard = () => {

    const handleClick = () => {
        alert('Click')
    }

    return (
        <div>
            <button
                className='p-4 bg-gray-800 text-white rounded text-base'
                onClick={handleClick}
            > Add To Card
            </button>
        </div>
    )
}

export default AddToCard