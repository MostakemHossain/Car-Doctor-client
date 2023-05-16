
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../../assets/images/login/login.svg'
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {

    const { logIn } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();
    const from1 = location.state?.from?.pathname || '/'
    const handleSubmit = (event) => {
        event.preventDefault();
        const from = event.target;

        const email = from.email.value;
        const password = from.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const loggedUser = {
                    email: email
                }



                fetch('http://localhost:4000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('jwt', data)
                        localStorage.setItem('car-doctor-token', data.token)
                        navigate(from1, { replace: true })
                    })
            })
            .then(error => {
                console.log(error);
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="p-10 w-1/2">

                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login now!</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text"
                                    name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password"
                                    name="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="login" />
                            </div>
                        </form>
                        <p className='text-center my-4'>
                            <h1>New to Car-doctor? <Link className='text-orange-600 font-bold' to="/signUp">Sign Up</Link> </h1>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;