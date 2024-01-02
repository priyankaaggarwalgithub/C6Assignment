import { useEffect } from "react";

const RecordRide = (props) => {

    const tripId = props.tripId;
    const pickup = props.pickup;
    const drop = props.drop;
    const epoch = props.epoch;
    const ride = { tripId, pickup, drop, epoch };


    const CreateJson = () => {
        useEffect(() => {
            fetch('http://localhost:8000/api/ride', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(ride)
            }).then(() => {
                console.log('new ride added');
            })
        }, []);
    }

    return (
        <div className="create">
            <CreateJson />
        </div>
    );
}

export default RecordRide;