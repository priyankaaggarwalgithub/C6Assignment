import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import '../grid.css'

function EditRating() {
    const [feedback, setFeedback] = useState([]);
    const currEpoch = Date.now();
    const history = useHistory();


    const FetchFeedback = () => {
        fetch('http://localhost:8000/api/rating', { method: 'GET' })
            .then((response) => response.json())
            .then((actualData) => {
                console.log(actualData);
                setFeedback(actualData);
                console.log(feedback);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }


    useEffect(() => {
        FetchFeedback();
    }, []);

    return (
        <div className="App">
            <table className="rating">
                <tr>
                    <th>TripID</th>
                    <th>Rating</th>
                    <th>Feedback</th>
                </tr>
                {feedback
                    .filter(item => (currEpoch - item.epoch <= (3600*24*1000)))
                    .map((item) => (
                        <tr key={item.id}>
                            <td>{item.tripId}</td>
                            <td>{item.rating}</td>
                            <td>{item.feedback}</td>
                            <td>
                                {" "}
                                <button type="submit" onClick={() => history.push({
                                    pathname: '/rideOptions/rateBooking',
                                    state: {
                                        id: item.id,
                                        flag: 'update',
                                        tripId: item.tripId
                                    }
                                }
                                )} >Edit Rating</button>
                            </td>
                        </tr>
                    ))}
            </table>
        </div>
    );
}

export default EditRating;