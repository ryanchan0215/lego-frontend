import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'  // ✅ 新增
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* ✅ 新增 */}
      <App />
    </BrowserRouter>  {/* ✅ 新增 */}
  </StrictMode>,
)