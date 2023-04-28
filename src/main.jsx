import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {GlobalStyle, theme} from './style/index.js'
import {ThemeProvider} from 'styled-components'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
)
