import './Navbar.css'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import { UserContext } from '../../context/UserContext'
const Navbar = () => {


    const [menu, setMenu] = useState("");
    const {getTotalCartItems} = useContext(ShopContext)

    const {setUserInfo,userInfo} = useContext(UserContext)

    
    useEffect(()=>{

        fetch('http://localhost:3010/profile',{
            credentials:'include',
        }).then((response)=>{
            response.json().then((info)=>{
                setUserInfo(info)
            })
        })

    },[])


    function logout(){
        fetch('http://localhost:3010/logout',{
            credentials:'include',
            method : 'POST'
        })
        setUserInfo(null)
    }


    const username = userInfo?.username


  return (
    <div className='navbar'>

            <div className='nav-logo'>
                <Link to='/'><img src={logo} alt=""/></Link>
                <p>SHOPPER</p>
            </div>

        <ul className='nav-menu'>

            <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration : 'none'}}>Shop</Link> {menu === "shop" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("men")}}> <Link to='/mens' style={{textDecoration : 'none'}}>Men</Link> {menu === "men" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("women")}}> <Link to='/womens' style={{textDecoration : 'none'}}>Women</Link> {menu === "women" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration : 'none'}}>Kids</Link> {menu === "kids" ? <hr/> : <></>}</li>

        </ul>

        <div className='nav-login-cart'>
            {
                username && (
                    <div className='nav-login-cart'>

                           <p>{username}</p>
                            <a className='cart-login' onClick={logout}>Logout</a>

                    </div>
                    

                )
            }
            {
                !username && (
                    <>
                        <Link to='/login'><button className='cart-login'>Login</button></Link>
                            <Link to='/register'><button className='cart-login'>Register</button></Link>
                    </>
                )
            }
            
            <Link to='/cart'><img className='carticon' src={cart_icon} alt=""/></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>

      
    </div>
  )
}

export default Navbar
