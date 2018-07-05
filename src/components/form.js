import { createElement } from "react";
import { Overlay } from "./overlay";

export const Form = () =>
    createElement('div', { className: "inputData" },
        createElement('h4', {}, "ADD NEW TASK"),
        createElement('form', {},
            createElement('div', {},
                createElement('h4', {}, "Task:"),
                createElement('input', { type: "text", placeHolder: "Enter name of task" } ),
                createElement('span', { className: "errorTask", ariaLive: "polite" } )

            ),
            createElement('div', {},
                createElement('h4', {}, "Time"),
                createElement('input', { type: "time", placeHolder: "Enter the time" } ),
                createElement('span', { className: "errorTime" } ),
                createElement('button', { className: "btn btn-primary" }, "Submit")
            )
        ),
        createElement(Overlay, {}, null )
    )




// class Overlay extends React.Component{
//     render(){
//         return(
//             <div id="overlay">
//                 <div id="text">
//                     edit name: <input type="text" id="editName" />
//                     <br /><br /> 
//                     edit time: <input type="time" id="editTime" />
//                     <br /><br /> 
//                     edit status: 
//                             <select id="editStatus">
//                                 <option>active</option>
//                                 <option>pending</option>
//                                 <option>complete</option>
//                                 <option>canceled</option>
//                                 <option>postponed</option>
//                             </select>
//                     <br />
//                     <br />
//                     <button id="editButton" class="btn btn-primary">Ok</button>
//                     <button id="deleteButton" class="btn btn-primary">Delete Task</button>
//                 </div>
//             </div>
//         );
//     }
// }



// export default class Form extends React.Component {
//     render() {
//         return (
//             <div className="inputData">

//             <h4>ADD NEW TASK</h4>
//             <br />
//             <form>
//                 <div>
//                     <h4>Task:</h4>
//                     <input type="text" id="taskName" placeholder="Enter name of task" />
//                     <br />
//                     <span class="errorTask anotha" aria-live="polite"></span>
//                 </div>

//                 <div>
//                     <h4>Time:</h4>
//                     <input type="time" id="taskTime" placeholder="Enter the time" />
//                     <br />
//                     <span class="errorTime" aria-live="polite"></span>
//                     <br />
//                     <br />
//                     <button class="btn btn-primary" id="push_data">Submit</button>
//                     <br />
//                 </div>
//             </form>

//             <Overlay />
//             </div>
//         );
//     }
// }
