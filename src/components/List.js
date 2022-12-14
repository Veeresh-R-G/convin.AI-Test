import React, { useEffect, useState } from 'react'
import { Droppable } from 'react-beautiful-dnd';
import AddCard from './AddCard';
import Card from './Card';
import InputAdd from './InputAdd';
import './list.css';
import { useDispatch, useSelector } from 'react-redux'
import { newData } from '../redux/cardSlice';
function List({ listD }) {

    console.log("listd");
    //console.log(props.listD);
    //console.log(props);

    const dispatch = useDispatch();
    //let listD=props.listD;
    const [listData] = useState(listD);

    const [title, setTitle] = useState(listData.title)
    const [cards, setCards] = useState(listData.cards);
    const [editable, setEditable] = useState(false)
    const [newCard, setNewCard] = useState(false)
    // const [newCardInput, setNewCardInput] = useState("");

    const data = useSelector((state) => state.card.lists)

    useEffect(() => {
        let newdata = {
            [listData.id]: {
                id: listData.id,
                title,
                cards
            }
        }
        dispatch(newData({ ...data, ...newdata }))
    }, [cards, data, dispatch, listData.id, title])

    console.log(cards);
    return (
        <div>
            <div className="list-container">
                <div className='title text-2xl uppercase text-center mx-auto mt-5 font-bold underline animate-bounce' >
                    {

                        editable ?
                            (<div >
                                <input type="text" className="edit" value={title} onChange={(e) => setTitle(e.target.value)} onBlur={() => setEditable((prev) => !prev)} />

                            </div>
                            ) :
                            (<div onDoubleClick={() => setEditable((prev) => !prev)} className='editable-container'>
                                <h2 className="mt-4" >{title}</h2>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                            </div>)
                    }


                </div>

                <hr />
                <Droppable droppableId={listData.id}>
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {
                                cards.map((card, index) => (
                                    <Card key={card.id} link={card.link} data={card.title} index={index} id={card.id} />
                                ))
                            }

                            {provided.placeholder}
                        </div>)}

                </Droppable>
                {
                    newCard ?
                        (
                            <InputAdd setNewCard={setNewCard} setCard={setCards} cards={cards} />
                        ) :
                        <AddCard setNewCard={setNewCard} title={"Add a Card"} />
                }


            </div>
        </div>
    )

}




export default List
