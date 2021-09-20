import React, { Component ,Fragment} from 'react'


export default class OneMovie extends Component{


    state = {movie: {}};

    componentDidMount(){
        this.setState({movie: {
            id: this.props.match.params.id,
            title: "Some movie",
            runtime: 140,
        }})
    }

    render(){

        return (
            <Fragment>
                <h2>Movie: {this.state.movie.title} {this.state.movie.id}</h2>
                <table className = "table table-compact table-striped">
                    <thead> </thead>
                    <tbody>
                        <tr>
                            <td><strong> Title:</strong></td>
                            <td>{this.state.movie.title}</td>
                        </tr>

                        <tr>
                            <td><strong> RunTime: </strong> </td>
                            <td>{this.state.runtime} minutes</td>
                        </tr>
                    </tbody>

                </table>

            </Fragment>

        )
    }
    

}