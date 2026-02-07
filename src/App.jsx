
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import UserContextProvider from './context/user.jsx'

export default function App() {
  return (
    <>
    <UserContextProvider>
      <RouterProvider router={router}/>
    </UserContextProvider>
    
    </>
  )
}
