export const addWish =({id,title,img})=>({
    type:"ADD_WISH",
    wishItems:{
        id,
        title,
        // price,
        img
    }
})

export const removeWish=({id})=>({
    type:"REMOVE_WISH",
    id
})