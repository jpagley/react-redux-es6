/**
 * Created by jpagley on 6/5/2018.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);

  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave() {
    //alert(`Saving ${this.state.course.title}`);
    console.log('Local this.state.course = ' + this.state.course);
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    // Need a key for iterating through an array
    return <div key={index}>{course.title}</div>;

  }

  render() {
    // return HTML then use parentheises
    return (
      <div>
        <h3>Index.js => Routes.js => App.js => Header.js => CoursesPage.js</h3>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave}/>
      </div>
    );
  }
}

CoursesPage.PropTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  // to return an object use curly braces
  return {
    // the courses property in the state.courses is defines in the rootReducer constant in index.js file
    // This statement add courses to the component's local props to be reference throughout its code.
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  debugger;
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

// Connect is a higher order function the going to wrap the coursespage to be connected to Redux store.
// Below is two function calls.  Connect function ends up returning a function and that function
// immediately calls our our container component with the result of the first function.
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
