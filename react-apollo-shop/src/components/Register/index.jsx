import './index.css';

const Register = () => {

    return (

        <div className='backdrop'>
            <div className='register-modal-container'>
                <h3> Create your account </h3>
                <input
                    className='username'
                    name='username' 
                    type="text" 
                    placeholder='Username'
                />
                <input
                    className='email'
                    name='email' 
                    type="text" 
                    placeholder='Email'
                />
                <input
                    className='password'
                    name='password' 
                    type="password" 
                    placeholder='Password'
                />
                <button
                    className='register-btn btn' 
                >
                    Submit
                </button>
                <div className='hr'>
                    
                </div>
                <span>OR</span>
                <button
                    className='google-btn btn' 
                >
                    Continue with Google
                </button>
                
            </div>
        </div>

    )
};

export default Register;