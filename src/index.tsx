import React from 'react'
import { createRoot } from 'react-dom/client'
import Router from '~/components/Router'

import '~/modules/view-transitions/global.css'

const container = document.getElementById('app')

if (!container) throw new Error('Oops, root element is missing.')

const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
