import React from "react";

export default class List extends React.Component {
  render () {
    return (
      <div className="list">
        <h5>Today's Schedule</h5>
        <table id="tasksTable" className="table table-hover" />
      </div>
    );
    }
}

