import React, { Component } from 'react';

export default class AppHeader extends React.Component{

    render(){
        return (
                    <h1>{ this.props.title }</h1>
            );
        }
    }
