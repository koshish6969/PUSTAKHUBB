import React from 'react'
import { Link } from 'react-router-dom'
import HeaderTwo from '../HeaderTwo'
import Footer from '../Footer'
import './login.css'

export default function SignInPage() {
    return (
        <>
        
        <div className="text-center m-5-auto">
            <h2 className="signin_tit">Sign in</h2>
            <form className="login_f" action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label >Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                
          <Link style={{textDecoration: 'none'}} to="/profile">       <button id="sub_btn" type="submit" className="btn_login">Login</button> </Link> 
                
            </form>
            <footer>
                <p>Don't have account ?  <Link to="/signup">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
       
        </>
    )
}