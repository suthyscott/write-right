import { NavLink } from "react-router-dom"

const SessionCard = ({ session }) => {
    const { notes, length, date,id } = session
    return (
        <div className="border border-yellow-300">
            <p>{notes}</p>
            <h3>{length}</h3>
            <h3>{date}</h3>
            <NavLink to={`/sessionDisplay/${id}`}>See Details</NavLink>
        </div>
    )
}

export default SessionCard
