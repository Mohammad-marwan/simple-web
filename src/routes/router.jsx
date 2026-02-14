import { createBrowserRouter } from "react-router-dom";
import Home from "../page/user/Home/Home.jsx";
import Login from "../page/user/Login/Login.jsx";
import Root from "../Root.jsx";
import Rigester from "../page/user/Rigester/Rigester.jsx";
import ProtectedRouter from "../components/user/ProtectedRouter/ProtectedRouter.jsx";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[{
            path:"/",
           element:
           <ProtectedRouter>
            <Home/>
           </ProtectedRouter>
           

        },
            {
                path:"/Login",
                element:<Login/>

        },
        {
            path:"/Rigester",
            element:<Rigester/>
        }
    ]
    }
]);

export default router;