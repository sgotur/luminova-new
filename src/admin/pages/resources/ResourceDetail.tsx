import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getResource, updateResource } from '../../api/resourcesApi';
import { StatusBadge } from '../../components/StatusBadge';
import { ResumeUpload } from '../../components/ResumeUpload';
import { ResourceForm } from './ResourceForm';
import type { Resource, ResourceUpdate } from '../../types/adminTypes';

export function ResourceDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [resource, setResource] = useState<Resource | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getResource(id)
      .then(setResource)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  async function handleUpdate(data: ResourceUpdate) {
    if (!id) return;
    setSaving(true);
    const updated = await updateResource(id, data);
    setResource(updated);
    setSaving(false);
    setEditing(false);
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 300 }}>
        <div className="spinner-border" style={{ color: 'var(--admin-accent)' }} role="status">
          <span className="visually-hidden">Loading…</span>
        </div>
      </div>
    );
  }

  if (error || !resource) {
    return (
      <div>
        <button className="btn btn-admin-ghost mb-3" onClick={() => navigate('/admin/resources')}>← Back</button>
        <div className="alert alert-danger py-2 small">{error ?? 'Resource not found'}</div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-page-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button className="btn btn-admin-ghost btn-sm" onClick={() => navigate('/admin/resources')}>←</button>
          <h1 className="admin-page-title">{resource.first_name} {resource.last_name}</h1>
          <StatusBadge status={resource.status} />
        </div>
        <button className="btn btn-admin-primary btn-sm" onClick={() => setEditing(true)}>
          Edit
        </button>
      </div>

      <div className="admin-card mb-3">
        <div className="admin-detail-grid">
          <div className="admin-detail-field">
            <span className="admin-detail-label">Contact</span>
            <span className="admin-detail-value">{resource.contact || '—'}</span>
          </div>
          <div className="admin-detail-field">
            <span className="admin-detail-label">Referred By</span>
            <span className="admin-detail-value">{resource.referred_by || '—'}</span>
          </div>
          <div className="admin-detail-field">
            <span className="admin-detail-label">Assigned Client</span>
            <span className="admin-detail-value">{resource.assigned_client || '—'}</span>
          </div>
          <div className="admin-detail-field">
            <span className="admin-detail-label">Expected Salary</span>
            <span className="admin-detail-value">{resource.expected_salary || '—'}</span>
          </div>
          <div className="admin-detail-field">
            <span className="admin-detail-label">Shared With</span>
            <span className="admin-detail-value">{resource.shared_with || '—'}</span>
          </div>
          <div className="admin-detail-field">
            <span className="admin-detail-label">Date Added</span>
            <span className="admin-detail-value">{new Date(resource.date_added).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="mt-3">
          <span className="admin-detail-label d-block mb-1">Key Skills</span>
          <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
            {resource.key_skills.length > 0
              ? resource.key_skills.map(s => (
                  <span key={s} className="admin-badge admin-badge-h1b">{s}</span>
                ))
              : <span style={{ color: 'var(--admin-text-muted)', fontSize: '0.875rem' }}>—</span>
            }
          </div>
        </div>

        <div className="admin-detail-field">
          <span className="admin-detail-label">OnBoarded</span>
          <span className="admin-detail-value">
            {resource.onboarded ? (
              <>
                <span style={{ color: 'var(--admin-success, #10B981)', fontWeight: 600 }}>✓ Yes</span>
                {resource.onboarded_date && (
                  <span style={{ color: 'var(--admin-text-muted)', fontSize: '0.85rem', marginLeft: '0.5rem' }}>
                    {new Date(resource.onboarded_date).toLocaleDateString()}
                  </span>
                )}
              </>
            ) : '—'}
          </span>
        </div>

        <div className="mt-3">
          <span className="admin-detail-label d-block mb-1">Resume</span>
          <ResumeUpload
            resourceId={resource.resource_id}
            currentUrl={resource.resume_url}
            currentFilename={resource.resume_filename}
            onUploaded={setResource}
          />
        </div>
      </div>

      {/* Edit modal */}
      {editing && (
        <div className="admin-modal-backdrop">
          <div className="admin-modal admin-modal-lg">
            <div className="admin-modal-header">
              <h2 className="admin-modal-title">Edit Resource</h2>
              <button className="btn-close btn-close-white" onClick={() => setEditing(false)} />
            </div>
            <ResourceForm
              initial={resource}
              onSubmit={handleUpdate}
              onCancel={() => setEditing(false)}
              loading={saving}
            />
          </div>
        </div>
      )}
    </div>
  );
}
