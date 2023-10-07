const LoginModal = () => {
  return (
    <div>
          <div className='sign-in mt-[40px] text-[#1e1e1e]'>
            <h3 className='text-[28px] text-center'>Sign In</h3>
            <p className='my-[20px] text-center w-[60%] text-[12px]'>Enter your email address or username & password to sign in</p>
            <div className='items-center flex flex-col'>
              <input type='text' placeholder='Email or Username' className='w-[60%] h-10 py-5 px-0 border-b border-solid border-[#747171]/50 mb-5' />
              <input type='password' placeholder='Password' className='w-[60%] h-10 py-5 px-0 border-b border-solid border-[#747171]/50 mb-5' />
            </div>
            <div className='second-section-sign-in w-[60%] m-auto text-[14px]'>
              <span className='text-xs text-left text-[#2680eb]'>Forget Password?</span><br/>
              <div style={{display:"flex", textAlign:"left",justifyContent:"flex-start",  margin: "20px 0px",gap:"5px"}}>
              <input id="sign-in-checkbox" type='checkbox'/>Stay Signed In
              </div>
              <button className='w-48 h-[38px] rounded-[19px] text-[#2680eb] mb-[60px] mx-auto mt-0 flex justify-center items-center cursor-pointer border-[#2680eb] border border-solid' >Sign In</button>
              <div>
                By clicking "Signing In" you agree to CPF <a className='text-[#2680eb] underline'>Terms of Services</a> and acknowledge that CPF <a className='text-[#2680eb] underline'>Privacy Policy</a> applies to you.
              </div>
            </div>
          </div>
        </div>
  )
}

export default LoginModal
