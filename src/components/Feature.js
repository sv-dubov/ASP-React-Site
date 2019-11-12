import React, { Component } from "react";
import axios from 'axios';

import EclipseWidget from './eclipse';

class Feature extends Component {

    state = {
        header: '',
        body: '',
        image: '',
        author: '',
        posts: [],
        loading: false
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    addProductSubmitForm = (e) => {
        //e.preventDefault();
        const { header, body, image, author } = this.state;
        const urlPosts = `http://localhost:51948/api/post`;
        const urlAddPost = 'http://localhost:51948/api/post/create';
        this.setState({ loading: true });
        const model = { header: header, body: body, image: image, author: author };
        axios.post(urlAddPost, model).then(
            (resp) => {
                console.log('-----axios res add post-----', resp);
                this.setState({ header: '', body: '', image: '', author: '', loading: false });
            }
        );

        setTimeout(() => {
            axios.get(urlPosts).then(
                (resp) => {
                    this.setState({ posts: resp.data, loading: false });
                }
            );
        }, 1000);
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h2>Додати статтю</h2>
                <form onSubmit={this.addProductSubmitForm}>
                    <div className="form-group">
                        <label for="header">Заголовок: </label>
                        <input id="header"
                            name="header"
                            type="text"
                            onChange={this.onChange}
                            value={this.state.header}
                            placeholder="Заголовок статті"
                            className="form-control" />
                    </div>

                    <div className="form-group">
                        <label for="">Текст: </label>
                        <textarea id="body"
                            name="body"
                            type="text"
                            onChange={this.onChange}
                            value={this.state.body}
                            placeholder="Текст статті"
                            className="form-control" />
                    </div>

                    <div className="form-group">
                        <label for="image">Фото: </label>
                        <input id="image"
                            name="image"
                            type="text"
                            onChange={this.onChange}
                            value={this.state.image}
                            placeholder="Фото до статті"
                            className="form-control" />
                    </div>

                    <div className="form-group">
                        <label for="author">Автор: </label>
                        <input id="author"
                            name="author"
                            type="text"
                            onChange={this.onChange}
                            value={this.state.author}
                            placeholder="Автор статті"
                            className="form-control" />
                    </div>

                    <button type="submit" class="btn btn-md btn-success">Додати</button>
                </form>
            </div>
        );
    }
}

export default Feature;
