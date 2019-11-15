import React, { Component } from "react";
import axios from 'axios';
import '../css-blog/clean-blog.min.css';

class Post extends Component {

    state = {
        header: '',
        preview: '',
        body: '',
        image: '',
        author: '',
        date: '',
        posts: [],
        loading: false
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    getListDataHandler = (e) => {
        e.preventDefault();
        const url = 'http://localhost:51948/api/post';
        this.setState({ loading: true });
        axios.get(url).then(
            (resp) => {
                console.log('-----axios res-----', resp);
                this.setState({ posts: resp.data, loading: false });
            }
        );
    }

    render() {
        const todoItems = this.state.posts.map((post) =>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div>
                            <h2 className="post-title">
                                <span key={post.id}> {post.header} </span>
                            </h2>
                            <p className="post-meta">
                                <span key={post.id}> {post.body} </span>
                            </p>
                            <p>
                                <img key={post.id} src={post.image} alt="" />
                            </p>
                            <p className="post-meta">Автор:
                              <span key={post.id}> {post.author} </span>
                            </p>
                            <p className="post-meta">Дата:
                              <span key={post.id}> {post.date} </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        );
        return (
            <div className="container">
                <p>
                    <button type="button" className="btn btn-lg btn-info" onClick={this.getListDataHandler}>Переглянути новини</button>
                </p>
                <div className="card-deck mb-3 text-center" style={{ overflow: "hidden" }}>
                    {todoItems}
                </div>
            </div>
        );
    }
}

export default Post;