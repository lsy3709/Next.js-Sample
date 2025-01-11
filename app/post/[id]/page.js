export default function PostDetailPage({ params }) {
  const { id } = params;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Post ID: {id}</h1>
      <p>This is the detail page for post ID {id}.</p>
    </div>
  );
}
