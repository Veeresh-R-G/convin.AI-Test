import { useState, useEffect } from 'react';
import { DragDropContext, } from 'react-beautiful-dnd';

import { useSelector, useDispatch } from 'react-redux';
import List from "./components/List"
import { newData } from './redux/cardSlice';
import NewList from './components/NewList';


import board from './utils/data'

function App() {
  // const [data, setData] = useState(board.lists);
  const data = useSelector((state) => state.card.lists);
  useEffect(() => {
    console.log("data has changed")
  }, [data]);
  const [ids] = useState(board.listIds);
  const dispatch = useDispatch();


  function dragHandle(result) {
    const { destination, source, draggableId } = result;


    if (!destination)
      return;
    const sourceList = JSON.parse(JSON.stringify(data[source.droppableId]));
    const destinationList = JSON.parse(JSON.stringify(data[destination.droppableId]));
    const draggingCard = sourceList.cards.find((card) => card.id === draggableId)

    sourceList.cards.splice(source.index, 1);
    destinationList.cards.splice(destination.index, 0, draggingCard)
    console.log("source --> ", sourceList);
    if (source.droppableId === destination.droppableId) {

      const newdata = {
        ...data,
        [sourceList.id]: destinationList
      }
      dispatch(newData(newdata))
    } else {
      const newdata = {
        ...data,
        [sourceList.id]: sourceList,
        [destinationList.id]: destinationList
      }

      dispatch(newData(newdata));
    }
  }
  // console.log("id --> ", ids)

  return (


    <DragDropContext onDragEnd={dragHandle}>


      <div className="App min-h-screen w-full">
        <div className='lists grid grid-cols-1 md:grid-cols-3'>

          {

            ids.map((item) => {
              console.log("Hello");
              return <List listD={data[item]} key={item} />
            })
          }


          <NewList />
        </div>

      </div>

    </DragDropContext >
  );
}

export default App;
