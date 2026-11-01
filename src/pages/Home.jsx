
import { useState, useEffect } from 'react'
import PDFCard from '../components/PDFCard'
import '../App.css'
import { supabase } from '../lib/supabase'


function App() {

async function testConnection() {
  const { data, error } = await supabase
    .from('pdfs')
    .select('*')

  console.log(data)
  console.log(error)
  }

  // Stores the PDF list
  const [pdf_list, setPdfList] = useState([])

  // Stores input values
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
  async function fetchPDFs() {
    const { data, error } = await supabase
      .from('pdfs')
      .select('*')
      .eq('status', 'approved')

    if (error) {
      console.log(error)
      return
    }

    setPdfList(data)
  }

  fetchPDFs()
}, [])

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

      <button onClick={testConnection}>
      Test Supabase
      </button>

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
