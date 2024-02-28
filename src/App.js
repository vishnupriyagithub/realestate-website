import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './components/usersapp/Register';
import Login from './components/usersapp/Login';
import RootLayout from './RootLayout';
import AboutUs from './components/usersapp/AboutUs';
import Home from './components/usersapp/Home';
import  Userprofile from './components/user-profile/Userprofile'
import Products from './components/products/Products';

import Diamond from './components/diamond/Diamond'; 
import LegalServices from './components/legalservices/LegalServices';
import BankLoan from './components/legalservices/BankLoan';
import LegalVerification from './components/legalservices/LegalVerification';
import PostLand from './components/postLand/PostLand';
import Help from './components/help/Help'; 
import General from './components/postLand/General';
import Dashboard from './components/postLand/Dashboard';
import Footer from './components/usersapp/Footer';  

import LandDetailsPost from './components/postLand/LandDetailsPost';
import LandData from './components/diamond/LandData';
import AddScheme from './components/admin/AddScheme';
import RegScheme from './components/regScheme/RegScheme';
function App() {
  const router=createBrowserRouter([
      {
        path:"/",
        element:<RootLayout/>,
        children:[
          {
            path:"/",
            element:<Home/>
          },
          {
            path:"/Register",
            element:<Register/>
          },
          {
            path:"/Login",
            element:<Login/>
          },
          {
            path:"/AboutUs",
            element:<AboutUs/>
          },
          {
            path:"/Help",
            element:<Help/>
          },
          {
              path:"/Diamond",
              element:<Diamond/>
          },
          {
            path:'/RegScheme',
            element:<RegScheme/>
          },   
          {
            path:"/LegalServices",
            element:<LegalServices/>,
            children:[
              {
                path:"BankLoan",
                element:<BankLoan/>
              },
              {
                path:"LegalVerification",
                element:<LegalVerification/>
              }
               
               
            ]
          },
          {
            path:"/General",
            element:<General/>
          },
          {
            path:"/PostLand",
            element:<PostLand/>  
          }, 
          {
              path:"/UserProfile",
              element:<Userprofile/> 
          },
          
          {
            path:"/Footer",
            element:<Footer/>
          },
          {
            path:"/LandDetailsPost",
            element:<LandDetailsPost/>
          },
          {
            path:'/LandData',
            element:<LandData/>
          },
          {
            path:'/addScheme',
            element:<AddScheme/>
          }
          
           
        ]
      }
       
  ])
  return (
    <div  className='main'>
      
       
      <RouterProvider router={router} />
      </div>

     
  );
}

export default App;
