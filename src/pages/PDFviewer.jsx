import { useLocation,useNavigate } from 'react-router-dom'

function PDFViewer () {
    const navigate = useNavigate()
    const location = useLocation()
    const { title, description } = location.state
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <button onClick={() => navigate('/')}>
                Back to Library
            </button>
        </div>
        
    )
}

export default PDFViewer