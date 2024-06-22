import { createStore, combineReducers } from "redux";
import { blogReducer } from "./reducerBlog";
import { wishReducer } from "./wishReducer"; 

const rootReducer = combineReducers({
    blog: blogReducer,
    wish: wishReducer
});

const configureStore = () => {
    const store = createStore(rootReducer);
    return store;
};

export default configureStore;
