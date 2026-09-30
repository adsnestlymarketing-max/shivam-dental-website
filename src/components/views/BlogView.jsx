import React from 'react';
import { blogPosts } from '../../data/clinicData';
import { ArrowRight, Calendar, User } from 'lucide-react';

export default function BlogView({ onSelectBlog }) {
  return (
    <div className="section-padding bg-white">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="badge-tag" style={{ marginBottom: '10px' }}>Dental & Oral Health Insights</span>
          <h1 className="section-title" style={{ fontSize: '2.8rem' }}>
            Articles & Clinical Updates
          </h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#64748b', fontSize: '1rem' }}>
            Expert advice, guidance on CGHS procedures, oral hygiene tips, and latest advancements in maxillofacial surgery.
          </p>
        </div>

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
                  <span>Read full article</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
