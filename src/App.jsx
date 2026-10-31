import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import PDFViewer from './pages/PDFviewer'
import './App.css'

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pdf/:id" element={<PDFViewer/>}/>    
      </Routes>
    </BrowserRouter>
  )
}
export default App