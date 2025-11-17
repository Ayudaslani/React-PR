import { Route, Routes } from "react-router"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Addmoive from "./Components/Add/Addmoive"
import HomePage from "./Components/HomePage/HomePage"
import Editmoive from "./Components/Edit/Editmoive"
import SignIn from "./Components/SignIn/SignIn"
import SignUp from "./Components/SignUp/SignUp"



function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/add" element={<Addmoive></Addmoive>}></Route>
        <Route path="/edit/:id" element={<Editmoive></Editmoive>}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>


      </Routes>
      <Footer />
    </>
  )
}

export default App
