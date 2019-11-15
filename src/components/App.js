import React, { Component } from "react";
import axios from 'axios';
import '../css-blog/clean-blog.min.css';

class App extends Component {
  
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

  render()
  {
      const todoItems = this.state.posts.map((post) =>
          <div className="container">
              <div className="row">
                  <div className="col-lg-8 col-md-10 mx-auto">
                      <div className="post-preview">
                          <a href="/Post">
                              <h2 className="post-title">
                                  <span key={post.id}> {post.header} </span>
                              </h2>
                          </a>
                          <p className="post-meta">
                              <span key={post.id}> {post.preview} </span>
                          </p>
                      </div>
                  </div>
              </div>
          </div>

      );
    return (
        <div className="container">
            <h1>Останні новини</h1>
            <p>
                <button type="button" className="btn btn-lg btn-info" onClick={this.getListDataHandler}>Переглянути список</button>
            </p>
            <div className="card-deck mb-3 text-center" style={{ overflow: "hidden" }}>
                {todoItems}
            </div>
        </div>
    );
  }
}

export default App;