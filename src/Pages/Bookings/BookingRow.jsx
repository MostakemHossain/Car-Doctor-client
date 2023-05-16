import React from 'react';

const BookingRow = ({ booking, handleDelete, handleBooking }) => {
    const { _id, customerName, email, price, service, img, date, status } = booking


    return (
        <>
            {/* row 1 */}
            <tr>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask rounded w-12 h-12">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">United States</div>
                        </div>
                    </div>
                </td>
                <td>
                    {customerName}
                </td>
                <td>${price}</td>
                <td>{service}</td>
                <td>{date}</td>
                <th>
                    {
                        status === 'confirm' ? <span>confirm</span> :
                            <button onClick={() => handleBooking(_id)} className="btn btn-ghost btn-xs">please Confirm</button>
                    }
                </th>
            </tr>
        </>
    );
};

export default BookingRow;