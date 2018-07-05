import { createElement } from 'react';

export const element = (props) => createElement('div', { className: "banner" },
    createElement('h1', {}, "To Do app"),
    createElement('p', {}, `the date today is ${props.date}`),
    createElement('div', { className: 'button' },

        createElement("button", { className: "btn btn-info btn-md" }, '&#x2b;'),
        createElement("button", { className:"btn btn-info btn-md" }, '&#xe086;')
    )
)


//commwnted
// export const element = (props) => (<div className="banner">
// //                     <h3>TO DO APP</h3>
// //                     <p id="date">the date today is { props.date }</p>
// //                     <div className="button">
// //                         <button className="btn btn-info btn-md">&#x2b;</button>
// //                         <button className="btn btn-info btn-md">&#xe086;</button>
// //                     </div>
// //                     </div>
// //                 );

