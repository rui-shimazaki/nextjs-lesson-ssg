import fetch from "node-fetch";
const apiUrl = "https://jsonplaceholder.typicode.com/posts";
const apiUrl2 =
	"https://cdn.contentful.com/spaces/lrd294txi42g/environments/master/entries?access_token=nNXjfQsXF5auOgn0W65tYn55NN56J_HD-3yrNwyopkU";

const baseApiUrl =
	"https://cdn.contentful.com/spaces/lrd294txi42g/environments/master/";
const access_token =
	"?access_token=nNXjfQsXF5auOgn0W65tYn55NN56J_HD-3yrNwyopkU";

export async function getAllPostsData() {
	const res = await fetch(new URL(apiUrl2));
	const data = await res.json();
	const items = await data.items;

	const posts = items.filter((item) => {
		return "posts" === String(item.sys.contentType.sys.id);
	});
	// console.log(posts);
	return posts;
}

export async function getAllPostIds() {
	const res = await fetch(new URL(apiUrl2));
	const data = await res.json();
	const items = await data.items;

	const posts = items.filter((item) => {
		return "posts" === String(item.sys.contentType.sys.id);
	});

	return posts.map((post) => {
		console.log(post);
		var id = String(post.sys.id);
		return {
			params: {
				id: id,
			},
		};
	});
}

export async function getPostData(id) {
	const res = await fetch(new URL(`${baseApiUrl}entries/${id}${access_token}`));
	const post = await res.json();

	return post;
}
