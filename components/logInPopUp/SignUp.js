import '../header/header.css'

const SignUp = () => {
  return (
    <div>
    <div className='sign-in'>
      <h3>Sign Up</h3>
      <div className='input-fields'>
        <input type='text' placeholder='Type your full name here' className='input-class' />
        <input type='text' placeholder='Type a unique username here' className='input-class' />
        <input type='email' placeholder='Type a valid email' className='input-class' />
        <input type='password' placeholder='Password' className='input-class' />
      </div>
      <div className='second-section-sign-in'>
        <span>Forget Password?</span><br/>
        <div style={{display:"flex", textAlign:"left",justifyContent:"flex-start",  margin: "20px 0px",gap:"5px"}}>
        <input id="sign-in-checkbox" type='checkbox'/>Male
        <input id="sign-in-checkbox" type='checkbox'/>Female
        </div>
        <button className='sign-in-btn' >Create Account</button>
        <div>
          By clicking "Create Account" you agree to CPF <a>Terms of Services</a> and acknowledge that CPF <a>Privacy Policy</a> applies to you.
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignUp