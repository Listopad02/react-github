import { Link } from "react-router-dom"

export const Card = () => (
    <div className="card mt-3">
        <img src={''} alt={''} className="card-image-top" />
        <div className="card-body">
            <h5 className="card-title">ReactJS</h5>
            <Link to={"/profile/" + 'React'} className="btn btn-primary">Open</Link>
        </div>
    </div>
)