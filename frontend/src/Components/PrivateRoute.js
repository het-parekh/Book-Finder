import { Outlet , Navigate } from "react-router-dom"

function PrivateRoute(props){
    return(
        props.authorizationStatus?<Outlet />:<Navigate to="/" />
    )
}
export default PrivateRoute