import { Outlet , Navigate } from "react-router-dom"

function PrivateRoute(props){
    return(
        props.auhtorizationStatus?<Outlet />:<Navigate to="/" />
    )
}
export default PrivateRoute