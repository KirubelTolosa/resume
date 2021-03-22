import React, { Component } from "react";

class ProjectPopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <form>
            <h3>Register!</h3>
            
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default ProjectPopUp;