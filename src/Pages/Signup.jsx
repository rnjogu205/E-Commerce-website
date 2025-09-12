import './signup.css'

const Signup= () =>{
    return(
        <div className='signup'>
            <div className="signup-container">
                <h1>Sign Up</h1>
                <div className="signup-fields">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="Password"/>
                </div>
                <button>Continue</button>
                <p className="signup-signup">Already have an account? <span>Login here</span></p>
                <div className="signup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing i agree to the terms of use & privacy policy.</p>
                </div>
            </div>
            
        </div>
    );
}

export default Signup