import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './componets/Card.jsx'
import CardContainer from './componets/ParentCard.jsx'

const productData={ name: "Apple", price: "$899", stock: "Add to card", img: "https://flowbite.com/docs/images/products/apple-watch.png" }
const obj={}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Card productData={productData}/> */}
    {/* <CardContainer/> */}
  </StrictMode>,
)
