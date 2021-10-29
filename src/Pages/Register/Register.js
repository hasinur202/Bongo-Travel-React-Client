import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';

    const auth = getAuth();

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
          setError('Password Must be at least 6 characters long.')
          return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
          setError('Password Must contain 2 upper case');
          return;
        }
        registerNewUser(email, password);
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            verifyEmail();
            setUserName();
            history.push(redirect_uri);
          })
          .catch(error => {
            setError(error.message);
          })
      }

      const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(result => { })
      }
    
      const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
          .then(result => {
            console.log(result);
          })
      }
    
    //   const handleResetPassword = () => {
    //     sendPasswordResetEmail(auth, email)
    //       .then(result => { })
    //   }

    return (
        <section id="appointment" className="appointment section-bg">
        <div className="container" data-aos="fade-up">
            <div className="section-title">
                <h2>Please Register</h2>
            </div>

            <form onSubmit={handleRegistration} className="php-email-form" data-aos="fade-up" data-aos-delay="100">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <div className="col-md-12 form-group">
                                <input onBlur={handleNameChange} type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                            </div>
                            <div className="col-md-12 form-group mt-3 mt-md-0">
                                <input onBlur={handleEmailChange} type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                            </div>
                            <div className="col-md-12 form-group mt-3 mt-md-0">
                                <input onBlur={handlePasswordChange} type="password" className="form-control" name="phone" id="phone" placeholder="Your Password" required />
                            </div>
                            <div className="py-3 mt-3 text-danger">{error}</div>
                        </div>
                    </div>
                </div>
                <div className="text-center"><button className="btn-primary" type="submit">Register</button></div>
                {/* <button type="button" onClick={handleResetPassword} className="btn btn-secondary btn-sm mt-3">Reset Password</button> */}
            </form>
        </div>
        <div className="mt-4">
            <Link to="/login">Already Have an account?</Link>
            <h5>Or</h5>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
        </div>
    </section>
    );
};

export default Register;