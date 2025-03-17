import React, { useContext } from 'react'
import { AdminContext } from './context/AdminContext';
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import Login from './pages/Login';
import { BankerContext } from './context/BankerContext';
import AddBanker from './pages/Admin/AddBanker';
import EmployeesList from './pages/Admin/EmployeesList';
import BankerDashboard from './pages/Banker/BankerDashboard';
import BankerAppointments from './pages/Banker/BankerAppointments';
import BankerProfile from './pages/Banker/BankerProfile';

const App = () => {

  const { dToken } = useContext(BankerContext)
  const { aToken } = useContext(AdminContext)

  return dToken || aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/add-Banker' element={<AddBanker />} />
          <Route path='/Banker-list' element={<EmployeesList />} />
          <Route path='/Banker-dashboard' element={<BankerDashboard />} />
          <Route path='/banker-appointments' element={<BankerAppointments />} />
          <Route path='/Banker-profile' element={<BankerProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <ToastContainer />
      <Login />
    </>
  )
}

export default App