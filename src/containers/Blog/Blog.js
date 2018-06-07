import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        postClickedId: null,
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( response => {
                const posts = response.data.slice(0,4);
                const postsWithAuthors = posts.map((post) => {
                    return {
                        ...post,
                        author: 'Dinika',
                    }
                })
                this.setState({
                    posts: postsWithAuthors,
                })
            });
    }
    postClickedHandler(id) {
        this.setState({
            postClickedId: id,
        })
    }
    render () {
        const posts = this.state.posts.map( (post) => <Post key={post.id} 
            title={post.title} 
            author={post.author}
            clicked={ () => this.postClickedHandler(post.id) }/>)
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost postClickedId={this.state.postClickedId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;