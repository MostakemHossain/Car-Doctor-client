import { useContext } from 'react';
import { Link } from 'react-router-dom';
import login from '../../../assets/images/login/login.svg'
import { AuthContext } from '../../../Provider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const handleSignUP = (event) => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, name, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
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
                        <h1 className="text-3xl text-center font-bold">Sign Up!</h1>
                        <form onSubmit={handleSignUP}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name"
                                    name='name'
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email"
                                    name='email'
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" placeholder="password"
                                    name="password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="login" />
                            </div>
                        </form>
                        <p className='text-center my-4'>
                            <h1>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </h1>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;