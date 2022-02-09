import React, { Component } from 'react';
import  HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import FooterComponent from './FooterComponent';

class WrapComponent extends Component {
    render() {
        return (
            <>
               <div id="wrap">
                    <HeaderComponent/>
                    <MainComponent/>
                    <FooterComponent/>
               </div>
            </>
        );
    }
}

export default WrapComponent;