import { useContext } from "react"
import { NavLink } from "react-router-dom"
import AuthContext from "../store/authContext"

const Header = () => {
    const { logout, token } = useContext(AuthContext)
    return (
        <nav className="bg-gray-500 flex align-center justify-evenly">
            {token && (
                <>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/add">Add</NavLink>
                    <button onClick={() => logout()}>Logout</button>
                </>
            )}
        </nav>
    )
}

export default Header
