This package provides an integration between React, Redux store and Meteor's Tracker.
It's simple composition of "connect" function from "react-redux" package and "createContainer" from "react-meteor-data".
Redux connector HOC applyes first, then props pass down to meteor HOC.