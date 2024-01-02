import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { useLocation, useHistory } from 'react-router-dom';
import { useState } from "react";

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function HoverRating() {
    const history = useHistory();
    const location = useLocation();
    const [value, setValue] = React.useState(3.5);
    const [hover, setHover] = React.useState(-1);
    const [textarea, setTextarea] = useState("Any feedback is appreciated!");


    const handleChange = (event) => {
        setTextarea(event.target.value)
    }

    return (
        <div>
            <h4>Please rate the current trip of TripID: {location.state.tripId}</h4>
            <Box
                sx={{
                    width: 200,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                        setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {value !== null && (
                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
            </Box>
            <br />
            <form>
                <textarea value={textarea} onChange={handleChange} />
            </form>
            <br />
            <div className="ride_container_inner1">
                <button type="submit" onClick={() => history.push({
                    pathname: '/rideOptions/recordRating',
                    state: { tripId: location.state.tripId, 
                        rating: value, 
                        feedback: textarea, 
                        id: location.state.id,
                        flag: location.state.flag
                     }
                }
                )} >Submit</button>
                <button type="submit" onClick={() => history.push({
                    pathname: '/UserHome'
                }
                )} >Skip</button>
            </div>

        </div>

    );
}