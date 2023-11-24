import { Routes, Route } from "react-router-dom"
import AuthLayout from "./auth/AuthLayout"


function App() {

  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/sign-up' element/>
        </Route>
      </Routes>
    </main>
  )
}

export default App
