import { Link } from "react-router-dom"

export const Card = ({user}) => (
    <div className="card mt-3 h-100">
        <img src={user.avatar_url} alt={user.login} className="card-image-top h-100" />
        <div className="card-body">
            <h5 className="card-title">{user.login}</h5>
            <Link to={"/profile/" + user.login} className="btn btn-primary">Open</Link>
        </div>
    </div>
)