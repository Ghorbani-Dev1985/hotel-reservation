
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Layout from './Layout/Layout'


function App() {


  return (
    <>
     <Toaster />
     <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/hotels' element={<Layout />}>
            <Route index element={<div>هتل ها</div>} />
            <Route path=':id' element={<div>هتل تکی</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
