import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './redux/store/store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const persister= persistStore(Store)

createRoot(document.getElementById('root')).render(

  <Provider store={Store}>
  <BrowserRouter>
  <PersistGate persistor={persister}>
    <App />
    </PersistGate>
  </BrowserRouter>,
  </Provider>
)
