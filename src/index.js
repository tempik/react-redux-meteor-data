import { connect  as connectRedux   }     from 'react-redux'
import { createContainer } from 'react-meteor-data'

export default function connectMeteor(mapTrackerToProps, ...connectArgs) {
  return function(component) {
    let meteorDataHOC = createContainer(mapTrackerToProps, component);
    return connectRedux(...connectArgs)(meteorDataHOC);
  }
}
