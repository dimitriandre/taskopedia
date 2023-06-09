import React from "react";

class Students extends React.Component{
  render() {
    return (
      <div className="col-4 p-4">
        <div className="row border">
          <div className="col-2">
            <img
              src={this.props.headshot}
              className="w-100 py-2"
            ></img>
          </div>
          <div className="col-8">
            {this.props.name}
            <br />
            Coding Experience {this.props.experience} years
          </div>
          <div className="col-2">
            {this.props.children} {/* this will render the StudentReview component */}
          </div>
        </div>
      </div>
    );
  }
}

export default Students;