import { RouterProvider } from "react-router-dom"
import Landing from "./Pages/Landing"
import router from "./Routes/Routes"

function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
