import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import{store} from './store'
// import { ApiProvider } from '@reduxjs/toolkit/query/react';
// import { productApi } from '../features/Api/productApi';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
     {/* <ApiProvider api={productApi}> */}
    <App />
    {/* </ApiProvider> */}
    </Provider>
  </React.StrictMode>,
)







// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
