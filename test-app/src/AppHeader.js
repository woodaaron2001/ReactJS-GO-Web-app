import React, { Component, Fragment } from 'react';

export default class AppHeader extends React.Component{

    constructor(props){
        super(props)
        this.handlePostChange = this.handlePostChange.bind(this);

    }

    handlePostChange(posts){
        this.props.handlePostChange(posts);
    }
    render(){
        return (
            <Fragment>
                    <h1>{  this.props.title}</h1>
                    <p> Length of posts is {this.props.posts.lengths} entries in post</p>
            </Fragment>
            );
        }
    }
