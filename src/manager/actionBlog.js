export const addblog = ({title,text,img})=>({
    type:"ADD_BLOG",
    newblog:{
        id:crypto.randomUUID(),
        title,
        text,
        img
    }
})


export const editBlog = (id,update)=>({
    type:"EDIT_BLOG",
    id, 
    update
})

export const removeBlog = ({id})=>({
    type:"REMOVE_BLOG",
    id
})


