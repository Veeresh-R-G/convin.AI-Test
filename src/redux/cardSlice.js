import { createSlice } from '@reduxjs/toolkit'

const initialState =
{
    listIds: ['list-1', 'list-2'],
    lists: {
        'list-1': {
            id: 'list-1',
            title: 'Bucket - 1',
            cards: [
                {
                    id: 'card-1',
                    title: 'Learning how',
                    link: "https://www.youtube.com/embed/C0DPdy98e4c"
                },
                {
                    id: 'card-2',
                    title: 'Making ich',
                    link: "https://www.youtube.com/embed/C0DPdy98e4c"
                },
            ],
        },
        'list-2': {
            id: 'list-2',
            title: 'Bucket - 2',
            cards: [
                {
                    id: 'card-4',
                    title: 'Learning how',
                    link: "https://www.youtube.com/embed/C0DPdy98e4c"
                },
                {
                    id: 'card-5',
                    title: 'Making ich',
                    link: "https://www.youtube.com/embed/C0DPdy98e4c"
                },
            ]
        },
    },

}



export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        //Toggling Action for the Iframe Video
        setClicked: (state) => {
            state.active = !state.active;

        },

        changeCard: (state, action) => {
            switch (action.payload.type) {
                case 'create':
                    state.lists[action.payload.listId].cards.push(action.payload.card);
                    break;
                case 'delete':
                    state.lists[action.payload.listId].cards = state.lists[action.payload.listId].cards.filter((item) => (item.id !== action.payload.id))
                    break;
                case 'edit':
                    state.lists[action.payload.listId].cards.every((item) => {
                        if (item.id === action.payload.card.id) {
                            item.title = action.payload.card.title;
                            item.link = action.payload.card.link;
                            return false;

                        }
                        return true;
                    })
                    break;
                default:
                    return;
            }
        },

        newData: (state, action) => {
            state.lists = action.payload
        },

        setDataIds: (state, action) => {
            state.listIds = action.payload;
        }



    },
})

// Action creators are generated for each case reducer function
export const { setClicked, changeCard, newData, setDataIds } = cardSlice.actions

export default cardSlice