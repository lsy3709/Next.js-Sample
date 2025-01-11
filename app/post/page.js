export default function PostListPage() {
  const posts = [
    { id: 1, title: "First Post" },
    { id: 2, title: "Second Post" },
    { id: 3, title: "Third Post" },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Posts</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li key={post.id}>
            <a
              href={`/post/${post.id}`}
              style={{ color: "blue", textDecoration: "underline" }}
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
