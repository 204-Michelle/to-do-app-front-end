import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { configureStore} from "@reduxjs/toolkit"
import toDoReducer from './store/reducers/toDoReducer'
import authReducer from './store/reducers/authReducer'

const store = configureStore({
  reducer: {
    toDos: toDoReducer,
    auth: authReducer
  },
  middleware: [thunk, logger]
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
