import { Outlet , Navigate } from "react-router-dom"

function PrivateRoute(props){
    return(
<<<<<<< HEAD
        props.auhtorizationStatus?<Outlet />:<Navigate to="/"  replace={true}/>
=======
        props.authorizationStatus?<Outlet />:<Navigate to="/" />
>>>>>>> dev
    )
}
export default PrivateRoute