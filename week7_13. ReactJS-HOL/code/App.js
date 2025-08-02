// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('books');

  // Sample data
  const books = [
    { id: 1, title: 'React Basics', author: 'John Doe', pages: 200 },
    { id: 2, title: 'Advanced JavaScript', author: 'Jane Smith', pages: 350 }
  ];

  const blogs = [
    { id: 1, title: 'Getting Started with React', author: 'Alex Johnson', date: '2023-05-15' },
    { id: 2, title: 'ES6 Features You Should Know', author: 'Sarah Williams', date: '2023-06-20' }
  ];

  const courses = [
    { id: 1, title: 'React Fundamentals', duration: '4 weeks', level: 'Beginner' },
    { id: 2, title: 'Advanced React Patterns', duration: '6 weeks', level: 'Advanced' }
  ];

  return (
    <div className="App">
      <h1>Blogger App</h1>
      
      <div className="tabs">
        <button 
          onClick={() => setActiveTab('books')}
          className={activeTab === 'books' ? 'active' : ''}
        >
          Books
        </button>
        <button 
          onClick={() => setActiveTab('blogs')}
          className={activeTab === 'blogs' ? 'active' : ''}
        >
          Blogs
        </button>
        <button 
          onClick={() => setActiveTab('courses')}
          className={activeTab === 'courses' ? 'active' : ''}
        >
          Courses
        </button>
      </div>
      
      <div className="content">
        {activeTab === 'books' && (
          <div className="book-details">
            <h2>Book Details</h2>
            <ul>
              {books.map(book => (
                <li key={book.id}>
                  <h3>{book.title}</h3>
                  <p>Author: {book.author}</p>
                  <p>Pages: {book.pages}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {activeTab === 'blogs' && (
          <div className="blog-details">
            <h2>Blog Details</h2>
            <ul>
              {blogs.map(blog => (
                <li key={blog.id}>
                  <h3>{blog.title}</h3>
                  <p>By {blog.author} on {blog.date}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {activeTab === 'courses' && (
          <div className="course-details">
            <h2>Course Details</h2>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Duration</th>
                  <th>Level</th>
                </tr>
              </thead>
              <tbody>
                {courses.map(course => (
                  <tr key={course.id}>
                    <td>{course.title}</td>
                    <td>{course.duration}</td>
                    <td>{course.level}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;