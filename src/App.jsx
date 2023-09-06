
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'


function App() {


  return (
    <>
     <Toaster />
     <Routes>
        <Route exact path="/" element={<MainPage />} />
      </Routes>
    </>
  )
}

export default App
