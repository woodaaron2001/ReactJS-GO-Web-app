import React, {Component, Fragment } from 'react';
import './AppFooter.css';

export default class AppFooter extends React.Component{

    render(){
        const currYear = new Date().getFullYear();
        return (
                <Fragment> 
                    <hr />
                    <p className  = "footer"> CopyRight &copy; { currYear } Acme Ltd.</p>
                
                </Fragment>
            );
        }
    }
