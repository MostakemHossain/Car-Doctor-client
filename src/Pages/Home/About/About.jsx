
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative p-4'>
                    <img className='w-3/4 rounded-lg shadow-2xl' src={person} alt="" />
                    <img className='w-1/2 right-5 top-1/2 border-8 border-white absolute rounded-lg shadow-2xl' src={parts} alt="" />


                </div>
                <div className='lg:w-1/2 p-6 space-y-6'>

                    <h1 className='text-[#FF3811] font-bold text-4xl'>About Us</h1>
                    <h1 className='text-6xl font bold'>
                        We are qualified <br /> & of experience <br /> in this field
                    </h1>
                    <p className='text-gray-500'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <p className='text-gray-500'>
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className="btn border-none bg-[#FF3811]  hover:bg-yellow-500">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;