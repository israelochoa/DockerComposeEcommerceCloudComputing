import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link,useNavigate} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';


function Header() {
    const history=useNavigate();
    const [{basket,user}]= useStateValue();
    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
            
        }
    }
  return (
    <div className='header'>
        <Link to="/">
            <img 
            className="header__logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbVOPXoqaqB2HycGjKb-ZpzMC3jeAf_pM-dQ&usqp=CAU"
            />

        </Link>
        
        <div 
        className='header__search'>
            <input 
            className='header__searchInput'
            type="text"
            />
            <SearchIcon 
            className='header__searchIcon'
            />
        </div>
        <div className='header__nav'>
            <Link to={!user && '/login'}>
            <div 
            onClick={handleAuthentication}
            className='header__option'>
                <span
                className='header__optionLineOne'>
                    {user ? user.email : 'hello guest'}
                </span>
                <span
                className='header__optionLineTwo'>
                   {user ? 'Sign Out': 'Sign In'}
                </span>
            </div>
            </Link>
            <div 
            className='header__option'>
                <span
                className='header__optionLineOne'>
                    Returns
                </span>
                <span
                className='header__optionLineTwo'>
                    & Orders
                </span>
            </div>
            <div 
            className='header__option'>
                <span
                className='header__optionLineOne'>
                    Your
                </span>
                <span
                className='header__optionLineTwo'>
                    Prime
                </span>
            </div>
            <Link to="/checkout">
                <div
                className='header__optionBasket'>
                    <ShoppingBasketIcon/>
                    <span 
                    className='header__optionLineTwo 
                                header__basketCount'>
                        {basket.length}
                    </span>
                </div>
            </Link>
            

        </div>
    </div>
  )
}

export default Header