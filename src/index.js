import React from 'react';
import ReactDOM from 'react-dom';
import "./bootstrap/css/bootstrap.min.css";
import './index.css';
import Banner from "./banner";
import List from "./list";
import Form from "./form";


class ToDoApp extends React.Component {
    render() {
      return (
        <div className="app">
          <Banner />
          <List />
          <br />
          <br />
          <br />
          <Form />

        </div>
      );
    }
  }
  
  
  // ========================================
  
  ReactDOM.render(
    <ToDoApp />,
    document.getElementById('root')
  );
  