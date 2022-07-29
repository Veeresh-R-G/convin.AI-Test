import React, { useState } from 'react'
import { v4 } from 'uuid'
function InputAdd({ setNewCard, setCard, cards }) {
    const [title, setTextTitle] = useState("")
    const [link, setTextLink] = useState("")
    function handleCardAdd() {
        console.log("Before")
        console.log(cards)
        setCard((prev) => ([...prev, { id: `card-${v4()}`, title: `${title}`, link: `${link}` }]));
        console.log("after")
        console.log(cards);
        setTextTitle("");
        setTextLink("");

    }
    console.log(cards);
    return (
        <div className='Input'>
            <input type="text" className='edit' placeholder='Enter Title' value={title} onChange={(e) => setTextTitle(e.target.value)} />
            <input type="text" className='edit' placeholder='Enter Video Link' value={link} onChange={(e) => setTextLink(e.target.value)} />

            <div className="button">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon h-5 w-5" viewBox="0 0 20 20" fill="currentColor" onClick={handleCardAdd}>
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setNewCard((prev) => !prev)}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>


        </div>
    )
}

export default InputAdd
