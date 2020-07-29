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
        default:
             return state;
    }
};
export default listsReducer;