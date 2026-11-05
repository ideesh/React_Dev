// Import the useState hook from React to manage component state
import { useState } from 'react';
// Import the CSS file that styles this component
import './App.css';

// Main component of the app. "export default" lets other files import it
export default function App() {
  // State for the title input field. Starts as an empty string
  const [title, setTitle] = useState('');

  // State for the content textarea. Starts as an empty string
  const [content, setContent] = useState('');

  // State for the list of all published blogs. Starts as an empty array
  const [blogs, setBlogs] = useState([]);

  // Runs when the form is submitted. Creates a new blog and adds it to the list
  function addBlog() {
    // Build a new blog object
    const newBlog = {
      id: Date.now(),          // Unique id using the current timestamp (used as the React key)
      title: title.trim(),     // Remove extra spaces from start and end of the title
      content: content.trim(), // Remove extra spaces from start and end of the content
    };

    // Put the new blog at the top, followed by all the existing blogs
    // (spread operator copies the old array, so state is never mutated directly)
    setBlogs([newBlog, ...blogs]);

    // Clear both input fields so the form is ready for the next blog
    setTitle('');
    setContent('');
  }

  // JSX: describes what the component renders on the screen
  return (
    <div className="app">
      {/* Page heading */}
      <h1 className="heading">✍️ My Blog</h1>

      {/* ---------- FORM SECTION ---------- */}
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault(); // Stop the browser from reloading the page on submit
          addBlog();          // Call our function to save the blog
        }}
      >
        <h2>Write a Blog</h2>

        {/* Controlled input: its value always comes from the "title" state */}
        <input
          placeholder="Title"
          value={title}                           // Shows the current state value
          onChange={(e) => setTitle(e.target.value)} // Updates state on every keystroke
          required                                // Browser blocks submit if this is empty
        />

        {/* Controlled textarea: its value always comes from the "content" state */}
        <textarea
          placeholder="What's on your mind?"
          rows="5"                                    // Height of the textarea in lines
          value={content}                             // Shows the current state value
          onChange={(e) => setContent(e.target.value)} // Updates state on every keystroke
          required                                    // Browser blocks submit if this is empty
        />

        {/* Submit button: clicking it triggers the form's onSubmit handler */}
        <button type="submit" className="submit-btn">
          Publish 🚀
        </button>
      </form>

      {/* ---------- DISPLAY SECTION ---------- */}
      <div className="blogs">
        {/* Shows how many blogs exist using the array length */}
        <h2>Blogs ({blogs.length})</h2>

        {/* Conditional rendering: only shows the empty message when there are no blogs */}
        {blogs.length === 0 && (
          <div className="empty">
            <span className="empty-icon">📝</span>
            <p>No blogs yet. Write your first one!</p>
          </div>
        )}

        {/* Loop through every blog and render a card for each one */}
        {blogs.map((blog) => (
          // "key" helps React track each item efficiently when the list changes
          <div className="blog" key={blog.id}>
            <h3>{blog.title}</h3>   {/* Blog title */}
            <p>{blog.content}</p>   {/* Blog content */}
          </div>
        ))}
      </div>
    </div>
  );
}