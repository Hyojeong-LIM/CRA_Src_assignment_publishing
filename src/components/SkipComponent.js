import React, { Component } from 'react';

class SkipComponent extends Component {
    render() {
        return (
            <>
                <ul id="skip">
                    <li><a href="#header">메뉴바로가기</a></li>
                    <li><a href="#main">콘텐츠바로가기</a></li>
                    <li><a href="#footer">푸터바로가기</a></li>
                </ul>
            </>
        );
    }
}

export default SkipComponent;