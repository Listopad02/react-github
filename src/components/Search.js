import { useContext } from "react"
import { AlertContext } from "../context/alert/alertContext"

export const Search = () => {
    const {show} = useContext(AlertContext)

    const onSubmit = e => {
        if (e.key === 'Enter') {
            show('This is alert')
        }
    }
    
    return (
        <div className="form-group">
            <input type="text"
                   className="form-control"
                   placeholder="Github username..."
                   onKeyPress={onSubmit} />
        </div>
    )
}