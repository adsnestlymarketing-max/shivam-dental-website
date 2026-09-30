import React from 'react';
import { blogPosts } from '../data/clinicData';
import { ArrowRight } from 'lucide-react';

export default function BlogSection({ onSelectBlog, onViewAllBlogs }) {
  return (
    <section className="section-padding bg-white" id="blog">
      <div className="container">
        {/* Header Row */}
        <div className="section-header-row">
          <div>
            <h2 className="section-title" style={{ marginBottom: '6px' }}>
              From Our Blog
            </h2>
            <div className="title-underline"></div>
          </div>

          <button
            onClick={onViewAllBlogs}
            className="btn btn-outline btn-sm btn-pill"
          >
            <span>View all Posts</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* 3-Column Blog Cards Grid matching theme screenshot 4 */}
        <div className="blog-grid-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="blog-card-modern"
              onClick={() => onSelectBlog(post)}
              style={{ cursor: 'pointer' }}
            >
              <div className="blog-img-box">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                />
              </div>

              <div className="blog-card-body">
                <div className="blog-meta-date">{post.date} • {post.category}</div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-read-more">
                  <span>Read article</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
