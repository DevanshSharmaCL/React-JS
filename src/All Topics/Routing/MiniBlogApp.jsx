import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

// Fake blog data
const posts = [
  { id: 1, title: 'First Post', content: 'This is my first post!' },
  { id: 2, title: 'Second Post', content: 'Another great post.' },
];

// Components
function Home() {
  return <h2>Welcome to My Blog</h2>;
}

function PostList() {
  return (
    <div>
      <h2>All Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Post() {
  const { id } = useParams(); // Get the URL parameter
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <h2>Post not found!</h2>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to="/posts">Back to Posts</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/posts">Posts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// How It Works:
// Home: Just a welcome message.
// PostList:
// Shows all posts as links to /post/1, /post/2, etc.
// Post:
// Uses useParams() to grab the id from the URL (e.g., 1 from /post/1).
// Finds the matching post and shows it, or “not found” if there’s no match.
// Routing:
// / → Home.
// /posts → Post list.
// /post/:id → Specific post (e.g., /post/1).
// Try it:

// Click “Posts” to see the list.
// Click a post title (e.g., “First Post”) to view it.
// Use “Back to Posts” to return.




// Key Tips
// Wrap Everything: Put BrowserRouter at the top (usually in App or index.js).
// Dynamic Paths: Use :param (like :id) for flexible URLs.
// Nesting: You can put <Routes> inside other components for deeper routing (not shown here).
// Use useNavigate: For programmatic navigation (e.g., navigate('/home')).
// Surprising Detail: It’s All Fake!
// React Router doesn’t really load new pages—it just swaps components in and out based on the URL. The browser’s back/forward buttons still work because it syncs with the browser’s history.