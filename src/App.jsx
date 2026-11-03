import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import PDFViewer from './pages/PDFviewer'
import './App.css'
import Auth from './pages/Auth'


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pdf/:id" element={<PDFViewer/>}/>    
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App