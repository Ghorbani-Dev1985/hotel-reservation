
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Layout from './Layout/Layout'
import Hotels from './Components/Hotels/Hotels'


function App() {


  return (
    <>
     <Toaster />
     <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/hotels' element={<Layout />}>
            <Route index element={<Hotels />} />
            <Route path=':id' element={<div>هتل تکی</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
