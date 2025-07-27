import Post from "./Post";
import React from "react";
class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
                const obj = data.map(value => new Post(value.id, value.title, value.body));
                this.setState({ posts: obj });
            })
            .catch((error) => {
                console.error("Error in Fetching : ", error);
            });
    }
    componentDidMount() {
        this.loadPosts();
    }
    render() {
        const { posts } = this.state;

        return (
            <>
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </li>
                    ))
                    }
                </ul>
            </>
        );
    }
    componentDidCatch(error, info) {
        console.error("Error in Posts Component: ", error);
    }

}
export default Posts;