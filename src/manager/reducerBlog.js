const initialBlog = [
    {
        id: 1,
        title: "How Interior Design Impacts Your Mental Health?",
        text: "Everything in your home triggers an emotional response. The spaciousness of your home, the layout of the room, the lighting, the use...",
        img: 'https://images.unsplash.com/photo-1471560090527-d1af5e4e6eb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
        id: 2,
        title: "Designing a home",
        text: "Choosing the right designer is an important step. Designers offer a range of services from concept design through to detailed design and project management. They can also coordinate a team of specialist...",
        img: 'https://plus.unsplash.com/premium_photo-1663054520894-850f9ea0ac23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80'
    },
    
    
]


export const blogReducer = (state = initialBlog, action) => {
    switch (action.type) {
        case "ADD_BLOG":
            return [...state,action.newblog]
        

        case "EDIT_BLOG":
            return state.map((b)=>{
                if (b.id === action.id) {
                        return {
                            ...b,...action.update
                        }
                }else{
                    return b;
                }
            })
            

        case "REMOVE_BLOG":
            return state.filter(item=>{
                return item.id !== action.id
            })
       
        default:
            return state
    }
}