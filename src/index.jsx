import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/sass/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Provider } from 'react-redux';
import configureStore from './manager/store';
import { addblog } from './manager/actionBlog';
import "../src/assets/sass/style.css"
import { ThemeProvider } from '../src/components/Context/ThemeContext';
import "./components/i18n/i18"
import 'react-toastify/dist/ReactToastify.css';


const mystore = configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));

// mystore.subscribe(()=>{
//   console.log(mystore.getState());
// })
// mystore.dispatch(removeBlog({id:blog1.newblog.id}))



root.render(
  <React.StrictMode>
  <ThemeProvider>
  <Provider store={mystore}>
    <App />
  </Provider>
  </ThemeProvider>
  </React.StrictMode>
);
