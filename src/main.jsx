import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { persistor } from './redux'
import ErrorBoundary from './component/erreur/ErrorBoundary'
import LoadingDots from './component/loading/LoadingDots'
import App from './App.jsx'
import './index.css'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<LoadingDots />}>
            <App />
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
