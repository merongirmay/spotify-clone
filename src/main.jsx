import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SpotifyContextProvider from './context/SpotifyContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <SpotifyContextProvider>
    <App />
  </SpotifyContextProvider>,
)
