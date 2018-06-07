import React, { Component } from 'react';
import axios from 'axios';
import './NewPost.css';

class NewPost extends Component {
    state = {
        title: 'Story of my life',
        content: `Basically I grew up in Jhansi; I love Jhansi. I did my graduation in Delhi (University of Delhi);
        I'm not that fond of Delhi. I am currently working at CERN - not sure how I feel about it. I know I respect it 
        very highly.`,
        author: 'Dinika'
    }
    postHandler = () => {
        const post = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author,

        };
        axios.post('https://jsonplaceholder.typicode.com/posts', post)
            .then((response) => {
                console.log(response);
            });
    }
    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;