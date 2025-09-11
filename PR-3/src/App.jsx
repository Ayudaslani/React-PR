import { Route, Routes } from "react-router"
import Calculator from "./assets/calculator/calculator"

function App() {
  
  return (
    <>
      
       <Routes>
     
      <Route path="/" element={<Calculator></Calculator>}></Route>
      
    </Routes>
    </>
  )
}

export default App
