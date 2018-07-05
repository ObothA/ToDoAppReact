import React from 'react';
import ReactDOM from 'react-dom';
import "./bootstrap/css/bootstrap.min.css";
import './index.css';
import Banner from "./components/banner";
import List from "./components/list";
 import { Form } from "./components/form";


class ToDoApp extends React.Component {
    render() {
      return (
        <div className="app">
          <Banner />
          <List />
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
  