import React from 'react';
import { X, Calendar, User, Clock, ArrowRight } from 'lucide-react';

export default function BlogDetailModal({ post, isOpen, onClose, onOpenEnquiry }) {
  if (!isOpen || !post) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '700px' }}>
        <div className="modal-header">
          <span className="badge-tag">{post.category}</span>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0d1b3e', marginBottom: '14px', lineHeight: '1.3' }}>
            {post.title}
          </h2>

          <div style={{ display: 'flex', gap: '16px', fontSize: '0.82rem', color: '#64748b', marginBottom: '20px', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> {post.date}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> {post.readTime}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><User size={14} /> {post.author}</span>
          </div>

          <div style={{ height: '280px', borderRadius: '14px', overflow: 'hidden', marginBottom: '24px' }}>
            <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <p style={{ fontSize: '1.02rem', color: '#1e293b', lineHeight: '1.7', marginBottom: '16px', fontWeight: 500 }}>
            {post.excerpt}
          </p>

          <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: '1.7', marginBottom: '16px' }}>
            Modern clinical studies continue to prove that preventive dental hygiene and timely intervention with specialized rotary endodontics, laser therapy, and orthodontics can safeguard your natural teeth for a lifetime.
          </p>

          <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: '1.7', marginBottom: '24px' }}>
            At Shivam Dental and Maxillofacial Centre in Yamuna Vihar, Delhi, our team of 7 senior MDS specialists combines deep surgical expertise with cutting-edge diagnostics to ensure your comfort every step of the way.
          </p>

          <button
            onClick={() => {
              onClose();
              onOpenEnquiry();
            }}
            className="btn btn-primary btn-block btn-lg"
          >
            Send Quick Enquiry
          </button>
        </div>
      </div>
    </div>
  );
}
