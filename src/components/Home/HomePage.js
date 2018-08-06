/**
 * Created by jpagley on 5/31/2018.
 */
import React, {PropTypes} from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h3>Index.js => Routes.js => App.js => Header.js => HomePage.js</h3>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

HomePage.propTypes = {
  myProp: PropTypes.string.Required
  // Other Examples
  //courses: PropTypes.array.isRequired,
  //actions: PropTypes.object.isRequired
};

export default HomePage;
