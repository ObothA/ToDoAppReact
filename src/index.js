import { createElement} from 'react';
import ReactDOM from 'react-dom';
import "./bootstrap/css/bootstrap.min.css";
import './index.css';
import { element as Banner } from "./components/banner";
import {List} from "./components/list";
import Form from "./components/form";

const props = {
  date: new Date().toLocaleDateString()
}

const ToDoApp = (props) => createElement("div", {className:"app"},
  createElement(Banner,{date:props.date},null),
  createElement(List,{},null),
  createElement(Form,{},null)
);

ReactDOM.render(
  createElement(ToDoApp,{props},null), document.getElementById("root")
);



// please pull me
// class ToDoApp extends React.Component {

//    constructor(props){
//     super(props);

//     this.state = {
//       bannerTime : '2pm'
//     }

//     this.submitData = this.submitData.bind(this);
//   }

//     render() {
//       return (
//         <div className="app">
//           <Banner date = { this.state.bannerTime }/>
//           <List />
  
//           <Form handleClick = { this.submitData }/>

//         </div>
//       );
//     }

//     submitData(){
//       this.setState(
//         {bannerTime : '3pm'}
//       )
    
//     }
//   }
  
  
//   // ========================================
  
//   ReactDOM.render(
//     <ToDoApp />,
//     document.getElementById('root')
//   );
