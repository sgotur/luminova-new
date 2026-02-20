import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getJob, updateJob } from '../../api/jobsApi';
import { JobForm } from './JobForm';
import type { Job, JobUpdate } from '../../types/adminTypes';

export function JobDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getJob(id)
      .then(setJob)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  async function handleUpdate(data: JobUpdate) {
    if (!id) return;
    setSaving(true);
    const updated = await updateJob(id, data);
    setJob(updated);
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

  if (error || !job) {
    return (
      <div>
        <button className="btn btn-admin-ghost mb-3" onClick={() => navigate('/admin/jobs')}>← Back</button>
        <div className="alert alert-danger py-2 small">{error ?? 'Job not found'}</div>
      </div>
    );
  }

  const fields: { label: string; value: string }[] = [
    { label: 'Client Name', value: job.client_name },
    { label: 'Location', value: job.location },
    { label: 'Duration', value: job.duration },
    { label: 'Vendor Name', value: job.vendor_name },
    { label: 'Vendor Pay Rate', value: job.vendor_pay_rate },
    { label: 'Billing Rate', value: job.billing_rate },
    { label: 'Client Type', value: job.client_type },
    { label: 'Expected Start Date', value: job.expected_start_date },
    { label: 'Referred By', value: job.referred_by },
    { label: 'Date Created', value: new Date(job.date_created).toLocaleDateString() },
  ];

  return (
    <div>
      <div className="admin-page-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button className="btn btn-admin-ghost btn-sm" onClick={() => navigate('/admin/jobs')}>←</button>
          <h1 className="admin-page-title">{job.job_title}</h1>
        </div>
        <button className="btn btn-admin-primary btn-sm" onClick={() => setEditing(true)}>Edit</button>
      </div>

      <div className="admin-card mb-3">
        <div className="admin-detail-grid">
          {fields.map(f => (
            <div key={f.label} className="admin-detail-field">
              <span className="admin-detail-label">{f.label}</span>
              <span className="admin-detail-value">{f.value || '—'}</span>
            </div>
          ))}
        </div>

        {job.job_description && (
          <div className="mt-3">
            <span className="admin-detail-label d-block mb-1">Description</span>
            <p style={{ color: 'var(--admin-text)', fontSize: '0.875rem', whiteSpace: 'pre-wrap', marginBottom: 0 }}>
              {job.job_description}
            </p>
          </div>
        )}

        {job.preferred_qualifications && (
          <div className="mt-3">
            <span className="admin-detail-label d-block mb-1">Preferred Qualifications</span>
            <p style={{ color: 'var(--admin-text)', fontSize: '0.875rem', whiteSpace: 'pre-wrap', marginBottom: 0 }}>
              {job.preferred_qualifications}
            </p>
          </div>
        )}

        {job.additional_qualifications && (
          <div className="mt-3">
            <span className="admin-detail-label d-block mb-1">Additional Qualifications</span>
            <p style={{ color: 'var(--admin-text)', fontSize: '0.875rem', whiteSpace: 'pre-wrap', marginBottom: 0 }}>
              {job.additional_qualifications}
            </p>
          </div>
        )}
      </div>

      {editing && (
        <div className="admin-modal-backdrop">
          <div className="admin-modal admin-modal-lg">
            <div className="admin-modal-header">
              <h2 className="admin-modal-title">Edit Job</h2>
              <button className="btn-close btn-close-white" onClick={() => setEditing(false)} />
            </div>
            <JobForm
              initial={job}
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
