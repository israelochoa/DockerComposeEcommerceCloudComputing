import React,{useState} from 'react'
import { Link,useNavigate} from 'react-router-dom'
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './Firebase.js';
import './Login.css';


function Login() {
    const [email,setEmail]=useState('');
    const history=useNavigate();
    
    const [password,setPassword]=useState('');
    const signIn=e=>{
        e.preventDefault();
        console.log('methodPreventDefault');
        signInWithEmailAndPassword(auth,email,password).
        then(auth=>{
            history('/');
        }).
        catch(error=> alert(`error message:${error.message}`));
    }
    const register=e=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email, password).
        then((userCredential)=>{
            if(userCredential){
                history('/');
            }
        }).catch(error=>alert(error.message));
        console.log('methodPreventDefault');
    }
    return (
    <div className='login'>
        <Link to='/'>
            <img 
            className='login__logo'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbVOPXoqaqB2HycGjKb-ZpzMC3jeAf_pM-dQ&usqp=CAU'>
            </img>
        </Link>
        <div
        className='login__container'>
            <h1>Sign In</h1>
            <form>
                <h5> Email </h5>
                <input type='text' value={email} onChange={e=> setEmail(e.target.value)}/>
                <h5> Password </h5>
                <input type='Password' value={password} onChange={e=> setPassword(e.target.value)}/>
                <button 
                type='submit'
                onClick={signIn}
                className='login__signInButton'>
                    Sign In
                </button>
            </form>
            <p>
                By signing-in you agree to the Amazon FAKE
                Conditions of Use & Sale. Please see our Privacy
                notice, our Cookies Notice and our Interest-Based
                Ads Notice
            </p>
            <button  
            onClick={register}
            className='login__registerButton'>
                Create your ecommerce Account
            </button>
        </div>
    </div>
  )
}

export default Login
