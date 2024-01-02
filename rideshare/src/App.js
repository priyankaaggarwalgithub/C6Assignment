import './App.css';
import BookRide from './Components/bookRide';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RideOption from './Components/RideOptions'
import ConfirmBooking from './Components/confirmBooking'
import RideCancel from './Components/rideCancel'
import HoverRating from './Components/Rating'
import Create from './Components/recordRating';
import GiveRatingLater from './Components/giveRatingLater'
import EditRating from './Components/editRating'
import UserHome from './Components/UserHome'
import Register from './Components/Register'
import Home from './Components/Home'

function App() {
  return (
    <div>
       <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/UserHome" exact>
            <UserHome />
          </Route>
          <Route path="/Register" exact>
            <Register />
          </Route>
          <Route path="/BookRide" exact>
            <BookRide />
          </Route>

          <Route path="/rideOptions" exact>
            <RideOption />
          </Route>

          <Route path="/giveRating" exact>
            <GiveRatingLater />
          </Route>

          <Route path="/editRating" exact>
            <EditRating />
          </Route>

          <Route path="/rideOptions/confirmBooking" exact>
            <ConfirmBooking />
          </Route>

          <Route path="/rideOptions/cancelBooking" exact>
            <RideCancel />
          </Route>

          <Route path="/rideOptions/rateBooking" exact>
            <HoverRating />
          </Route>

          <Route path="/rideOptions/recordRating" exact>
            <Create />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
