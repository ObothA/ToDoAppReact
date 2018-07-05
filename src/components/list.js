// import React from "react";

import { createElement } from 'react';

  const List = (props) => createElement('div', { className:"list"},
      createElement('h5', {}, "Today's Schedule"),
      createElement('table', {className: "table table-hover"})
)

export default List;










// export default class List extends React.Component {
  //  render(){
  //      return          <div className="list">
   //             <h5>Today's Schedule</h5>
    //            <table id="tasksTable" className="table table-hover">
    //            </table>
    //        </div>
    //    );
   // }
//=}