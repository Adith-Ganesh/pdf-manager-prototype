
function PDFCard({ title, description }) {
  return (
    <div className="pdf-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button>View PDF</button>
    </div>
  )
}

export default PDFCard
