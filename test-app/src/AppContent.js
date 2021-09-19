import React, { Component } from 'react';

export default class AppContent extends React.Component{

    state =  {posts: []};


    constructor(props){
        super(props);
        this.handlePostChange = this.handlePostChange.bind(this);
    }

    handlePostChange(posts)
    {
        this.props.handlePostChange(posts);
    }

    fetchList = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(json =>
            {
                this.setState({posts: json});
                this.handlePostChange(json);
            })
    }

    clickedItem = (x) => {
        console.log("clicked",x);
    }
    render(){
        return(
            <div>
               
                <br />
                <hr />
               
                <button onClick = {this.fetchList} className = "btn btn-primary"> Fetch Data </button>
                
                <hr />
                
                <p>Posts is  { this.state.posts.length } items long! </p>

                
                <ul>
                { this.state.posts.map((c) => (
                    <li key  = {c.id}>
                        <a href = "#!" onClick = {() => this.clickedItem(c.id)}>
                            {c.title}
                        </a>
                    </li>
                ))}
                    
                </ul>

                </div>
        );
    }
}