import { useState } from 'react';
import './App.css';

export default function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [blogs, setBlogs] = useState([]);

  function addBlog() {
    const newBlog = {
      id: Date.now(),
      title: title.trim(),
      content: content.trim(),
    };

    setBlogs([newBlog, ...blogs]);
    setTitle('');
    setContent('');
  }

  return (
    <div className="app">
      <h1 className="heading">✍️ My Blog</h1>

      {/* FORM */}
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addBlog();
        }}
      >
        <h2>Write a Blog</h2>

        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="What's on your mind?"
          rows="5"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <button type="submit" className="submit-btn">
          Publish 🚀
        </button>
      </form>

      {/* DISPLAY */}
      <div className="blogs">
        <h2>Blogs ({blogs.length})</h2>

        {blogs.length === 0 && (
          <div className="empty">
            <span className="empty-icon">📝</span>
            <p>No blogs yet. Write your first one!</p>
          </div>
        )}

        {blogs.map((blog) => (
          <div className="blog" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}