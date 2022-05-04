import { useEffect, useState } from "react";

function Posts() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getPosts();
	}, []);

	const getPosts = async () => {
		const api = await fetch(`${process.env.REACT_APP_API}/posts`);
		const data = await api.json();

		setPosts(data);
	};

	return (
		<>
			<ul>
				{posts.map((post, index) => {
					return <li key={index}>{post.title}</li>;
				})}
			</ul>
		</>
	);
}

export default Posts;
