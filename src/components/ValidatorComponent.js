import React, { Component } from 'react';

class ValidatorComponent extends Component {
    render() {
        return (
            <>
                <div className="validator">
                    <p className="validator">
                        <a href="http://validator.kldp.org/check?uri=referer"
                           title="validator">
                        <img src="http://validator.kldp.org/w3cimgs/validate/html5-blue.png" alt="Valid HTML 5" height="15" width="80"/></a>
                    </p>
    
   
                    <p className="css-validator">
                        <a href="http://css-validator.kldp.org/check/referer">
                            <img style={{border:'0',width:'80px',height:'15px'}}
                                 src="http://css-validator.kldp.org/images/validate/css-blue"
                                 alt="올바른 CSS입니다!" />
                        </a>
                    </p>
                </div>  
            </>
        );
    }
}

export default ValidatorComponent;