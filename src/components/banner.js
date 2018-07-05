import React from 'react';

export default class Banner extends React.Component {
    element = (<div className="banner">
                    <h3>TO DO APP</h3>
                    <p id="date">the date today is {new Date().toLocaleDateString()}</p>
                    <div className="button">
                        <button className="btn btn-info btn-md">&#x2b;</button>
                        <button className="btn btn-info btn-md">&#xe086;</button>
                    </div>
                    </div>
                );

    render(){
        return (
            this.element
        );
    }
}

