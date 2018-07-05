import { createElement} from 'react';
import ReactDOM from 'react-dom';
import "./bootstrap/css/bootstrap.min.css";
import './index.css';
<<<<<<< HEAD
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
=======
import { element as Banner } from "./components/banner";
import List from "./components/list";
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
>>>>>>> 60f66eb016111c3423685a3d765af319afc59521
  
  
//   // ========================================
  
//   ReactDOM.render(
//     <ToDoApp />,
//     document.getElementById('root')
//   );
