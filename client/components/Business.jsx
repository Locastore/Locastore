import React from 'react';
import BusinessList from './BusinessList.jsx';
import BusinessDetail from './BusinessDetail.jsx';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';

class Business extends React.Component {
  constructor (props) {
    super(props);
  }

  // Need to render business search view as well
  render () {
    return (
      <div>
        <Switch>
          <Route path="/location/:place" render={ (props) =>
            this.props.businesses.map((business) => {
              if (business.place_id === props.match.params.place) {
                return (<BusinessDetail match={props.match} business={business} />)
              }
            })
          } />
          <Route path="/location" render={ () =>
            <BusinessList businesses={this.props.businesses} />
          } />
        </Switch>
      </div>
    )
  }
}

export default Business;