import React , {useContext} from 'react'
import { useNavigate ,Link} from 'react-router-dom';
import Arrow from '../../assets/images/svg/Arrow';
import OlxLogo from '../../assets/images/svg/OlxLogo';
import Search from '../../assets/images/svg/Search';
import SellButton from '../../assets/images/svg/SellButton';
import SellButtonPlus from '../../assets/images/svg/SellButtonPlus';
import toast , { Toaster } from 'react-hot-toast';
import { getAuth } from 'firebase/auth';
import { AuthContext } from '../../store/context';


import './header.css'



const Header = () => {
  
  const {user} = useContext(AuthContext)
  const auth = getAuth()
  const navigate = useNavigate()
  // isLogin === true ? toast.success("Login Verified ✅") : ''
  const handleLogout = () => {
    auth.signOut()
    navigate('/')
    toast.success('Logout success...!')
  }

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="login">
          <span >{user ? "Welcome " +user.displayName :  <Link to='/login' className="login-link"> Login </Link> }</span>
        </div>
        <div className="loginPage">
          {user && <span><Link to='/' className="logout" onClick={handleLogout} >Logout</Link></span> }
        </div> 
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span><Link to='/create'>SELL</Link></span>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Header
