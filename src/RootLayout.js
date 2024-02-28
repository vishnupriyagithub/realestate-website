import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from './components/usersapp/NavigationBar';
import Footer from './components/usersapp/Footer';
function RootLayout() {
  return (
    <div > 
    
    <NavigationBar/>
    
    <div  >
          <Outlet/>
    </div>
     {
    <Footer style={{minHeight:'100vh'}}/>
   }
    </div>
  )
}

export default RootLayout