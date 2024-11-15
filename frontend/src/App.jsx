import { Signup } from './Pages/Signup';
import { Signin } from './Pages/Signin';
import { Dashboard } from './Pages/dashboard';
import { Send } from './Pages/Send'; 
import './App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom'

function App() {


  return (
    <div>
     <BrowserRouter>
       <Routes>
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path="/Signin" element={<Signin/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/Send" element={<Send/>}></Route>
       </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
