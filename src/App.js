import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from "react-router-dom"
import Home from "./screens/Home"
import NavBar from "./screens/NavBar"
import Aboutme from "./screens/Aboutme"
import Art from "./screens/Art"
import CS from "./screens/CS"
import Video from "./screens/Video"
import Contact from "./screens/Contact"
import './App.css'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path="/navbar" element={<NavBar/>}/>
        <Route path="/aboutme" element={<Aboutme/>}/>
        <Route path="/art" element={<Art/>}/>
        <Route path="/cs" element={<CS/>}/>
        <Route path="/video" element={<Video/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

const Root = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
