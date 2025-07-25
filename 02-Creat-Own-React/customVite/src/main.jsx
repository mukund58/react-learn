import React from 'react'
import { createRoot } from 'react-dom/client'
const reactElement = React.createElement(
  'a',
  {
    href: 'https://mukund.xyz',
    target: '_blank',
  },
  'Visit mukund.xyz'
)



createRoot(document.getElementById('root'))
.render(
reactElement
)
