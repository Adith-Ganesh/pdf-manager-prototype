
import { useState } from 'react'
import PDFCard from '../components/PDFCard'
import '../App.css'


function App() {


  // Stores the PDF list
  const [pdf_list, setPdfList] = useState([
    { id: crypto.randomUUID(), title: 'Operating Systems Notes', description: 'Module 1' },
    { id: crypto.randomUUID(), title: 'Data Structures Notes', description: 'Module 2' },
    { id: crypto.randomUUID(), title: 'Algorithms Notes', description: 'Module 3' },
  ])

  // Stores input values
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleAddPDF(){
  if (title.trim() == "" || description.trim() == ""){
    alert("Please fill in both the title and description fields.")
    return 
  }

  setPdfList([
    ...pdf_list,
    {
      id: crypto.randomUUID(),
      title: title,
      description: description,
    },
  ])

  setTitle("")
  setDescription("")
}

function handleDeletePDF(id) {
  setPdfList(
    pdf_list.filter((pdf) => pdf.id !== id)
  )
}

  return (
    <div>

      <h1>PDF Vault</h1>
      <p>Welcome to my PDF library.</p>

      {/* PDF title input */}
      <input
        type="text"
        placeholder="Enter PDF title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* PDF description input */}
      <input
        type="text"
        placeholder="Enter PDF description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Add PDF button */}
      <button
        onClick={handleAddPDF}>
        ADD PDF
      </button>

      {/* Display PDF cards */}
      <div className="pdf-grid">
        {pdf_list.map((pdf) => (
          <PDFCard
            key={pdf.id}
            id={pdf.id}
            title={pdf.title}
            description={pdf.description}
            onDelete={handleDeletePDF}
          />
        ))}
      </div>

    </div>
  )
}

export default App
