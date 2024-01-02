import { useState } from "react";
import { useHistory } from 'react-router-dom';

function BookRide(props) {
    const history = useHistory();

    const [pickup, setPickup] = useState("");
    const [drop, setDrop] = useState("");

    const options = [
        {
            label: "Location1",
            value: "location1",
        },
        {
            label: "Location2",
            value: "location2",
        },
        {
            label: "Location3",
            value: "location3",
        },
        {
            label: "Location4",
            value: "location4",
        },
    ];

    // const logState = () => {
    //     alert(`
    //         ____Your Details____\n
    //         Pickup : ${pickup}
    //         Drop : ${drop}
    //     `)
    // }

    return (
        <div className="App">
            <header>
                <h1 className="page-heading">Ride Share</h1>
            </header>
            <form>
                <table>
                    <tr>
                        <td>Pickup location: </td>
                        <td><select
                            type="text"
                            value={pickup}
                            onChange={(e) => setPickup(e.target.value)}>
                            <option value="">--Choose--</option>
                            {options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                        </td>
                    </tr>

                    <tr>
                        <td>Destination: </td>
                        <td> <select
                            type="text"
                            value={drop}
                            onChange={(e) => setDrop(e.target.value)}>
                            <option value="">--Choose--</option>
                            {options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                        </td>
                    </tr>
                    <tr>
                        {/* <button type="submit" onClick={ logState }>Request Ride</button> */}
                        <button type="submit" onClick={() => history.push({
                            pathname: '/rideOptions',
                            state: { pick: pickup, drop: drop }
                        }
                        )} >Request Ride</button>
                    </tr>
                </table>
            </form>
        </div>
    );
}
export default BookRide;