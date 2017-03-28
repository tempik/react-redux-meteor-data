This package provides an integration between React, Redux store and Meteor's Tracker.

It's simple composition of "connect" function from "react-redux" package and "createContainer" from "react-meteor-data".

Redux connector HOC applyes first, then props pass down to meteor HOC.

Signature: 

```
connectMeteor(mapTrackerToProps, mapStateToProps, mapDispatchToProps)(Component)
```

* First argument:  usual react-meteor-data createContainer function, as documented here:  https://www.npmjs.com/package/react-meteor-data
* Next arguments: usual react-redux connect arguments, as documented here:  https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
* Component - React dumb component that you will connect to redux & meteor


Example:

```
import connectMeteor from 'react-redux-meteor-data';

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapTrackerToProps = (props) => {
    Meteor.subscribe('process');
    let processState = ProcessesState.findOne({_id:  props.id})

  return {
    processState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connectMeteor(mapTrackerToProps, mapStateToProps, mapDispatchToProps)(NodeState);
```
