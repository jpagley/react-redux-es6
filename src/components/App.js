/**
 * Created by jpagley on 5/31/2018.
 */
import React, {PropTypes} from 'react';
import Header from "./common/Header";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <p>Header Page with NAV Bar...</p>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
