import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyBooking = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState({});
    let sL = 0;

    useEffect(() => {
        const url = `https://bongo-travel.herokuapp.com/bookings/${user.uid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data));
    }, []);

     // DELETE AN USER
     const handleDeleteBooking = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://bongo-travel.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.updatedId > 0) {
                        alert('deleted successfully');
                        const remainingBookings = bookings.filter(book => book._id !== id);
                        setBookings(remainingBookings);
                    }
                });
        }
    }

    return (
        <section id="appointment" className="appointment section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>My Booking List</h2>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">SL. No.</th>
                            <th scope="col">Booking Id</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        bookings.length > 0 && bookings.map(book => <tr>
                                <th scope="row">{sL = sL + 1}</th>
                                <td>{book.tour_id}</td>
                                <td>{book.email}</td>
                                <td>{book.phone}</td>
                                <td>
                                   { book.status === 2 ? <span>Pending</span> : (book.status === 1 ? <span>Approved</span> : <span>Rejected</span>)}
                                </td>
                                <td>
                                    {
                                        book.status === 2 ? <button onClick={() => handleDeleteBooking(book._id)}>X</button> : 'N/A'
                                    }
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                    </table>
            </div>
        </section>
    );
};

export default MyBooking;