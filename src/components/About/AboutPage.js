/**
 * Created by jpagley on 5/31/2018.
 */
import React, {PropTypes} from 'react';

class AboutPage extends React.Component {
  render() {
    return(
      <div>
        <h1>About</h1>
        <p>This application uses React, Redux, React Router and a vearity of other helpful libraries</p>
      </div>
    );
  }
}

AboutPage.propTypes = {
  myProp: PropTypes.string.Required
  // Other Examples
  //courses: PropTypes.array.isRequired,
  //actions: PropTypes.object.isRequired
};

export default AboutPage;
