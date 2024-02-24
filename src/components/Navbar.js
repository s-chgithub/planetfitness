import React from "react";
import { user, useAuth0 } from "@auth0/auth0-react";
import Logo from '../assets/images/Logo.png';
import {Button} from '@mui/material';
import {Link} from 'react-router-dom';


import '../App.css';



const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  
  


 

  return (
    
    <nav>
        <Link to="/">
        <img src={Logo} alt="LOGO" height="50px" width="50px"/> 
        <Button className="Search-btn"
        variant="contained"
             sx={{
                bgcolor:'#FF2625', 
                color:'#fff',
                textTransform:'none',
                width: {lg:'100px',xs:'80px'},
                fontSize:{lg:'20px',xs:'14px'},
                height:'30px',
                margin:'3px',
                
                right:'0'
                }}
                // onClick={() => navigateToHome()}
            
            >HOME</Button></Link>

<Button className="Search-btn" variant="contained"
             sx={{
                bgcolor:'#FF2625', 
                color:'#fff',
                textTransform:'none',
                width: {lg:'130px',xs:'80px'},
                fontSize:{lg:'20px',xs:'14px'},
                height:'30px',
                margin:'10px',
                
                right:'0'
                }}
                onClick={() => window.location.hash = 'exercises'}
            
            >EXERCISES</Button>


            {isAuthenticated && <Link to="/form"><Button bgcolor="#009900" variant="contained" sx={{width:{lg:'270px',xs:'80px'}}}>Welcome,{user.name}</Button></Link>}
            {/* //  <Button className="Search-btn"
            //   sx={{
            //      bgcolor:'#009900', 
            //      color:'#fff',
            //      textTransform:'none',
            //      width: {lg:'160px',xs:'80px'},
            //      fontSize:{lg:'20px',xs:'14px'},
            //      height:'70px',
            //      margin:'10px',
                 
            //      right:'0'
            //      }}>{user.name}
            //   </Button>} */}

           

              {isAuthenticated ? (
              <Button variant="contained"
              sx={{
                 bgcolor:'#009900', 
                 color:'#fff',
                //  textTransform:'none',
                 width: {lg:'130px',xs:'80px'},
                 fontSize:{lg:'20px',xs:'14px'},
                 height:'30px',
                 margin:'10px',
                 
                //  right:'0'
                 }}
                 onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
             
             >LOG OUT</Button> ) : 

            (
<Button className="Search-btn" variant="contained"
             sx={{
                bgcolor:'#009900', 
                color:'#fff',
                textTransform:'none',
                width: {lg:'120px',xs:'80px'},
                fontSize:{lg:'20px',xs:'14px'},
                height:'40px',
                
                right:'0'
                }}
                onClick={() => loginWithRedirect()}
            
            >LOG IN</Button> ) } <br/><br/>



        





     


      
    </nav>
   
  );
};

export default Navbar;
