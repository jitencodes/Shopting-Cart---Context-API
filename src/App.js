import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Footer, Header, Sidebar} from './components';
import {ProductDetails, Home} from './pages';
// const AppLayout = () => (
//   <>
//     <Navbar />
//     <Outlet />
//   </>
// );

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<AppLayout />}>
//       <Route path="/" element={<Home />} />
//       <Route path='/product/:id' element={<ProductDetails/>} />
//     </Route>
//   )
// );
const App = () => {
  return <div className='overflow-hidden'>
    <Router>
    <Header/>
    <Sidebar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:id' element={<ProductDetails/>} />
      </Routes>
      <Footer/>
    </Router>
  </div>;
};

export default App;
