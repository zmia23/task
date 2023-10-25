import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';

import { Provider } from 'react-redux'

import store from './redux/store/index.ts'

import App from './App.tsx';

const engine = new Styletron()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={ store }>
      <StyletronProvider value={ engine }>
        <App/>
      </StyletronProvider>
    </Provider>
  </React.StrictMode>,
)