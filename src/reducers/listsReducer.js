const initialState = [
    {
        id: 1,
        title: "Monday" ,
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
    }

]

const listsReducer = (state = initialState ,action) =>
{
    switch (action.type) {
        default:
             return state;
    }
};
export default listsReducer;