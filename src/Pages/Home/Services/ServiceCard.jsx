import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className="h-60 rounded-lg mb-2 object-cover" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-bold">{title}</h2>

                    <div className="card-actions flex items-center justify-between">
                        <p className="text-2xl font-bold text-[#FF3811] shrink-0 mx-2">Price: ${price}</p>
                        <Link to={`/book/${_id}`}>
                            <p className=" text-3xl
                        text-[#FF3811] ml-32"><HiArrowRight></HiArrowRight></p>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;