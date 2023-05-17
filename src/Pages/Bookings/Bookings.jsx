import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";


const Bookings = () => {

    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:4000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-doctor-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    const handleBooking = (id) => {
        fetch(`http://localhost:4000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Uptaded successfully')
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const uptaded = bookings.filter(booking => booking._id === id)
                    uptaded.status = 'confirm'

                    const newi = [uptaded, ...remaining]
                    setBookings(newi)
                }
            })
    }

    const handleDelete = (id) => {
        const procced = confirm('are You sure to delete this secition');
        if (procced) {
            fetch(`http://localhost:4000/bookings/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (data.deletedCount > 0) {
                        alert('Delete successfully');
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)
                    }
                })
        }



    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleBooking={handleBooking}
                                handleDelete={handleDelete}


                            ></BookingRow>)
                        }



                    </tbody>


                </table>
            </div>
        </div >
    );
};

export default Bookings;