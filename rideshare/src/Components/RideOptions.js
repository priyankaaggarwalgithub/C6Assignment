import React from 'react';
import { useEffect } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import '../grid.css'

const fareAndTimeEst = {
  "location1": {
    "location2": {
      "premier": { "fare": "Rs 100", "time": "20 minutes" },
      "basic": { "fare": "Rs 70", "time": "20 minutes" }
    },
    "location3": {
      "premier": { "fare": "Rs 200", "time": "30 minutes" },
      "basic": { "fare": "Rs 150", "time": "30 minutes" }
    },
    "location4": {
      "premier": { "fare": "Rs 300", "time": "40 minutes" },
      "basic": { "fare": "Rs 230", "time": "40 minutes" }
    },
  },
  "location2": {
    "location1": {
      "premier": { "fare": "Rs 100", "time": "20 minutes" },
      "basic": { "fare": "Rs 70", "time": "20 minutes" }
    },
    "location3": {
      "premier": { "fare": "Rs 200", "time": "30 minutes" },
      "basic": { "fare": "Rs 150", "time": "30 minutes" }
    },
    "location4": {
      "premier": { "fare": "Rs 300", "time": "40 minutes" },
      "basic": { "fare": "Rs 230", "time": "40 minutes" }
    },
  },
  "location3": {
    "location1": {
      "premier": { "fare": "Rs 100", "time": "20 minutes" },
      "basic": { "fare": "Rs 70", "time": "20 minutes" }
    },
    "location2": {
      "premier": { "fare": "Rs 200", "time": "30 minutes" },
      "basic": { "fare": "Rs 150", "time": "30 minutes" }
    },
    "location4": {
      "premier": { "fare": "Rs 300", "time": "40 minutes" },
      "basic": { "fare": "Rs 230", "time": "40 minutes" }
    }
  },
  "location4": {
    "location1": {
      "premier": { "fare": "Rs 100", "time": "20 minutes" },
      "basic": { "fare": "Rs 70", "time": "20 minutes" }
    },
    "location2": {
      "premier": { "fare": "Rs 200", "time": "30 minutes" },
      "basic": { "fare": "Rs 150", "time": "30 minutes" }
    },
    "location3": {
      "premier": { "fare": "Rs 300", "time": "40 minutes" },
      "basic": { "fare": "Rs 230", "time": "40 minutes" }
    },

  }
}

const RideOption = (props) => {
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    console.log(location.pathname); // result: '/secondpage'
    console.log(location.state); // result: 'some_value'
  }, [location]);

  return (
    <>
      <h1>Ride Options</h1>
      <p>Pickup location: {location.state.pick}</p>
      <p>Drop location: {location.state.drop}</p>
      <div className="ride_container">
        <div className="ride_container">
          <div>
            <h5>Fare</h5>
            <h6>{fareAndTimeEst[location.state.pick][location.state.drop]['premier']['fare']}</h6>
          </div>
          <div>
            <h5>Estimated Time</h5>
            <h6>{fareAndTimeEst[location.state.pick][location.state.drop]['premier']['time']}</h6>
          </div>
          <div>
            <h5>Premier Category</h5>
            {/* <button type="submit" > Book </button> */}
            <button type="submit" onClick={() => history.push({
              pathname: '/rideOptions/confirmBooking',
              state: {
                pick: location.state.pick,
                drop: location.state.drop,
                category: 'Premier'
              }
            }
            )} >Book</button>
          </div>
        </div>
      </div>

      <div className="ride_container">
        <div className="ride_container">
          <div>
            <h5>Fare</h5>
            <h6>{fareAndTimeEst[location.state.pick][location.state.drop]['basic']['fare']}</h6>
          </div>
          <div>
            <h5>Estimated Time</h5>
            <h6>{fareAndTimeEst[location.state.pick][location.state.drop]['basic']['time']}</h6>
          </div>
          <div>
            <h5>Basic Category</h5>
            {/* <button type="submit" > Book </button> */}
            <button type="submit" onClick={() => history.push({
              pathname: '/rideOptions/confirmBooking',
              state: {
                pick: location.state.pick,
                drop: location.state.drop,
                category: 'Basic'
              }
            }
            )} >Book</button>
          </div>
        </div>
      </div>

      <br />
      <button onClick={() => history.goBack()}>Go Back</button>
    </>
  );
};

export default RideOption;