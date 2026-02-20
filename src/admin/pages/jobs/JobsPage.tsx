import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useJobs } from '../../hooks/useJobs';
import { DataTable, type Column } from '../../components/DataTable';
import { ConfirmModal } from '../../components/ConfirmModal';
import { JobForm } from './JobForm';
import { createJob, deleteJob } from '../../api/jobsApi';
import type { Job, JobCreate } from '../../types/adminTypes';

export function JobsPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [showCreate, setShowCreate] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Job | null>(null);
  const [creating, setCreating] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const { items, loading, error, reload, lastKey, loadMore } = useJobs({ search: search || undefined });

  const columns: Column<Job>[] = [
    { key: 'job_title', header: 'Job Title' },
    { key: 'client_name', header: 'Client' },
    { key: 'location', header: 'Location' },
    { key: 'duration', header: 'Duration' },
    { key: 'billing_rate', header: 'Billing Rate' },
    {
      key: 'date_created',
      header: 'Created',
      render: r => new Date(r.date_created).toLocaleDateString(),
    },
    {
      key: '_actions',
      header: '',
      sortable: false,
      width: '80px',
      render: r => (
        <button
          className="btn btn-sm"
          style={{ color: 'var(--admin-danger)', background: 'none', border: 'none', padding: '0.2rem 0.5rem' }}
          onClick={e => { e.stopPropagation(); setDeleteTarget(r); }}
          aria-label="Delete job"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
            <path d="M10 11v6"></path><path d="M14 11v6"></path>
            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>
          </svg>
        </button>
      ),
    },
  ];

  async function handleCreate(data: JobCreate) {
    setCreating(true);
    await createJob(data);
    setCreating(false);
    setShowCreate(false);
    reload();
  }

  async function handleDelete() {
    if (!deleteTarget) return;
    setDeleting(true);
    await deleteJob(deleteTarget.job_id);
    setDeleting(false);
    setDeleteTarget(null);
    reload();
  }

  return (
    <div>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Jobs</h1>
        <button className="btn btn-admin-primary" onClick={() => setShowCreate(true)}>+ New Job</button>
      </div>

      <div className="d-flex gap-2 mb-3">
        <div className="admin-search">
          <span className="admin-search-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input
            type="search"
            className="form-control admin-form-control admin-search-input"
            placeholder="Search by title, client, location…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      {error && <div className="alert alert-danger py-2 small mb-3">{error}</div>}

      <DataTable
        columns={columns}
        data={items}
        rowKey={r => r.job_id}
        onRowClick={r => navigate(`/admin/jobs/${r.job_id}`)}
        loading={loading}
        emptyMessage="No jobs found."
      />

      {lastKey && !loading && (
        <div className="text-center mt-3">
          <button className="btn btn-admin-ghost" onClick={loadMore}>Load More</button>
        </div>
      )}

      {showCreate && (
        <div className="admin-modal-backdrop">
          <div className="admin-modal admin-modal-lg">
            <div className="admin-modal-header">
              <h2 className="admin-modal-title">New Job</h2>
              <button className="btn-close btn-close-white" onClick={() => setShowCreate(false)} />
            </div>
            <JobForm
              onSubmit={d => handleCreate(d as JobCreate)}
              onCancel={() => setShowCreate(false)}
              loading={creating}
            />
          </div>
        </div>
      )}

      {deleteTarget && (
        <ConfirmModal
          title="Delete Job"
          message={`Are you sure you want to delete "${deleteTarget.job_title}" for ${deleteTarget.client_name}? This cannot be undone.`}
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
          loading={deleting}
        />
      )}
    </div>
  );
}
