import { Route, Routes } from "react-router"
import CreatePost from "./pages/CreatePost"
import ViewPosts from "./pages/ViewPosts"

const App = () => {
  return (
   <Routes>
    <Route path="/" element={<CreatePost/>}/>
    <Route path="/step/1" element={<CreatePost/>}/>
    <Route path="/step/2" element={<ViewPosts/>}/>
   </Routes>
  )
}

export default App