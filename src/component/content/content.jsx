import React, { Component } from 'react';
class Content extends Component {
    state = {  } 
    render() { 
        return (
            <div className="card" style={{marginTop:"20px",backgroundColor:'lightblue'}}>
                <div className="card-body">    
                    {this.props.children}
                </div>
            </div>
        );
    }
}
 
export default Content;