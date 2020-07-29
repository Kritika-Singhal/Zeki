import { CONSTANTS } from '../actions'; 

let listID = 2;
let cardID = 4;

const initialState = [
    {
        id: 0,
        title: "Monday" ,
        cards: [
            {
                id: 1,
                text: "Check time table"
            },
            {
                id: 2,
                text: "Prepare notes"
            },
            {
                id: 3,
                text: "Prepare notes"
            }
        ]
    },
    {
        id: 1,
        title: "Tuesday" ,
        cards: [
            {
                id: 1,
                text: "Check time table"
            },
            {
                id: 2,
                text: "Prepare notes"
            }
        ]
    },

]

const listsReducer = (state = initialState ,action) =>
{
    switch (action.type) {

        case CONSTANTS.ADD_LIST: 
            const newList = {
                title: action.payload,
                cards: [],
                id: listID
            };

            listID += 1;
            return [...state, newList];

            case CONSTANTS.ADD_CARD:
                const newCard = {
                    text: action.payload.text,
                    id: cardID
                }
                cardID += 1;
                
                const newState = state.map(list => {
                    if(list.id === action.payload.listID)
                    {
                        return {
                            ...list,
                            cards: [...list.cards, newCard]
                         };
                    }
                    else {
                        return list;
                    }
                });

                return newState;
        default:
             return state;
    }
};
export default listsReducer;