import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        postToDisplay: null,
    }
    componentDidUpdate() {
        if(this.props.postClickedId) {
            if(!this.state.postToDisplay || (this.state.postToDisplay && this.props.postClickedId !== this.state.postToDisplay.id)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.postClickedId)
                    .then((response) => {
                        this.setState({
                            postToDisplay: response.data,
                        })
                });
             }
        }
    }
    deletePostHandler = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.postClickedId)
            .then((response) => {
                console.log(response);
            })
    }
    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.props.postClickedId) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>; 
        }
        if(this.state.postToDisplay) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.postToDisplay.title}</h1>
                    <p>{this.state.postToDisplay.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;