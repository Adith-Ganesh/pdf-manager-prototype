import { useNavigate } from 'react-router-dom'

function PDFCard({ id,title, description, onDelete}) {
  const navigate = useNavigate()
  return (
    <div className="pdf-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick ={() => navigate(`/pdf/${id}`, {
        state: {title, description}
      }
      )}>View PDF</button>

      <button onClick={() => onDelete(id)}>Delete</button>

    </div>
  )
}

export default PDFCard
