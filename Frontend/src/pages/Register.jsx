import React, {useState} from 'react'
import './css/Register.css'
import login_img from '../assets/login_img.jpg'
import google_icon from '../assets/google_icon.png'
import {Navigate} from 'react-router-dom'

const Register = () => {


    const [username, setUsername] = useState('');
    const [userpassword, setUserpassword] = useState('');
    const [redirect,setRedirect] = useState(false);


    async function register(e){
        e.preventDefault();


        const response = await fetch('http://localhost:3010/register',{
            method : 'POST',
            body : JSON.stringify({username,userpassword}),
            headers: {'Content-Type' : 'application/json'}
        })

        if(response.status == 200){
            alert('Registation Success');
            setRedirect(true);

        }
        else{
            alert('Registation Failed')

        }
    }





    if(redirect){
        return <Navigate to={'/login'}/>
    }


  return (
    <div className='outerLogin'>


        <div className='left-div imageAnimation-div'>
            <img src={login_img} height={400} width={368}/>
        </div>

        <form onSubmit={register}>

                <div className='right-div'>

                <div className='outer-right-div animationDiv-div'>

                    <h1>Register</h1>
                    <input className='inputField' placeholder='Email' type="email"
                            name="email"
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                            />
                    <input className='inputField' placeholder='password' type="password"
                            name="password"
                            value={userpassword}
                            onChange={(e) => setUserpassword(e.target.value)}
                            />
                    <button className='login-button'>Register</button>
                    <div className='forgot-div'>

                        {/* <p>Login</p> */}
                        {/* <p>Forgot Password</p> */}


                    </div>

                    {/* <p className='or-login'> -- or --</p>
                    <button className='glogin-button'><img src={google_icon} width={16} height={16}/>Login with Google</button> */}
                </div>
                </div>

        </form>

       
      
    </div>
  )
}

export default Register


//nd81V1MYPlgsqhzH

//mongodb+srv://sidharth:nd81V1MYPlgsqhzH@cluster0.g53ndyb.mongodb.net/