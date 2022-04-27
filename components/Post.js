import Link from "next/link";

const Post = ({ post }) => {
	return (
		<div>
			<span>{post.sys.id}</span>
			{" : "}
			<Link href={`/posts/${post.sys.id}`}>
				<span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
					{post.fields.title}
				</span>
			</Link>
		</div>
	);
};

export default Post;
