import { createBrowserRouter } from 'react-router-dom'
import { Admin } from './admin'


export const routers = createBrowserRouter ([
    {
        path: '',
        element: <Admin/>
      },
      
])