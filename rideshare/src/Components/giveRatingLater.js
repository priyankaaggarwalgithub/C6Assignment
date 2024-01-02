import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import '../grid.css'

function GiveRatingLater() {
    const [data, setData] = useState([]);
    const [feedback, setFeedback] = useState([]);
    const currEpoch = Date.now();
    const history = useHistory();

    const FetchData = () => {
        fetch('http://localhost:8000/api/ride', { method: 'GET' })
            .then((response) => response.json())
            .then((actualData) => {
                console.log(actualData);
                setData(actualData);
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            });

    }


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
        FetchData();
    }, []);

    useEffect(() => {
        FetchFeedback();
    }, []);

    var feedbackTripIds = feedback.map(x => x.tripId)
    var rideTripIds = data.map(x => x.tripId)
    console.log(feedbackTripIds)
    console.log(rideTripIds)

    return (
        <div className="App">
            <table className="rating">
                <tr>
                    <th>TripID</th>
                    <th>Pickup Location</th>
                    <th>Drop Location</th>
                    <th>Epoch</th>
                </tr>
                {data.filter(item => (currEpoch - item.epoch <= (3600*24*1000)))
                    .filter(item => feedbackTripIds.indexOf(item.tripId) == -1)
                    .map((item) => (
                        <tr key={item.id}>
                            <td>{item.tripId}</td>
                            <td>{item.pickup}</td>
                            <td>{item.drop}</td>
                            <td>{item.epoch}</td>
                            <td>
                                {" "}
                                <button type="submit" onClick={() => history.push({
                                    pathname: '/rideOptions/rateBooking',
                                    state: {
                                        tripId: item.tripId
                                    }
                                }
                                )} >Rate Ride</button>
                            </td>
                        </tr>
                    ))}
            </table>
        </div>
    );
}

export default GiveRatingLater;