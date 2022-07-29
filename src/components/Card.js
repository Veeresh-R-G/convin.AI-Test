import React from 'react'
import { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
// import { useSelector, useDispatch } from 'react-redux'
// import { setClicked } from '../redux/cardSlice'
import "./card.css"
import { MdDelete } from "react-icons/md";
function Card({ data, index, id, link }) {


    let [active, setActive] = useState(false)
    let [check, setCheck] = useState(false);
    /** 
     * 
     * Usage of Redux for Card was not necessary Hence Included code snippets 
     * 
     * const active = useSelector((state) => state.iframeToggler.active)
       const dispatch = useDispatch()
     * 
    */


    return (
        <Draggable draggableId={id} index={index}>
            {
                (provided) => (

                    <div className='card flex justify-center text-center' ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                        <div className="flex justify-around">
                            <div className=''>
                                {data}
                            </div>

                            <div className=''>
                                <input onClick={() => setCheck((prev) => (!prev))} type="checkbox" name="" id="" />
                            </div>
                            <div>
                                {check ? <MdDelete /> : null}
                            </div>
                        </div>

                        <div onClick={() => setActive((prev) => (!prev))} className='video bg-green-600 rounded-lg my-4 mx-10 text-center' >
                            <p className='text-white no-underline'> {!active ? "Click Me" : "Close"}</p>

                        </div>



                        {active && <div className="iframe">
                            <iframe width="200" height="160" src={link} title="TEST VIDEO" frameBorder="18" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>}

                    </div>
                )
            }

        </Draggable>
    )
}

export default Card
