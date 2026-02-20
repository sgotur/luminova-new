import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResources } from '../../hooks/useResources';
import { DataTable, type Column } from '../../components/DataTable';
import { StatusBadge } from '../../components/StatusBadge';
import { ConfirmModal } from '../../components/ConfirmModal';
import { ResourceForm } from './ResourceForm';
import { createResource, deleteResource } from '../../api/resourcesApi';
import type { Resource, ResourceCreate } from '../../types/adminTypes';

const VISA_FILTER_OPTIONS = ['', 'H1B', 'OPT', 'I-140 Approved', 'Citizen', 'GC'];

export function ResourcesPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [showCreate, setShowCreate] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Resource | null>(null);
  const [creating, setCreating] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const { items, loading, error, reload, lastKey, loadMore } = useResources({
    search: search || undefined,
    status: statusFilter || undefined,
  });

  const columns: Column<Resource>[] = [
    {
      key: 'first_name',
      header: 'Name',
      render: r => `${r.first_name} ${r.last_name}`,
    },
    { key: 'contact', header: 'Contact' },
    {
      key: 'status',
      header: 'Status',
      render: r => <StatusBadge status={r.status} />,
    },
    { key: 'assigned_client', header: 'Client' },
    {
      key: 'key_skills',
      header: 'Skills',
      sortable: false,
      render: r => (
        <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
          {(r.key_skills ?? []).slice(0, 3).map(s => (
            <span key={s} className="admin-badge admin-badge-h1b" style={{ fontSize: '0.65rem' }}>{s}</span>
          ))}
          {(r.key_skills ?? []).length > 3 && (
            <span style={{ fontSize: '0.75rem', color: 'var(--admin-text-muted)' }}>
              +{r.key_skills.length - 3}
            </span>
          )}
        </div>
      ),
    },
    {
      key: 'onboarded',
      header: 'OnBoarded',
      sortable: false,
      render: r => r.onboarded ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
          <span style={{ color: 'var(--admin-success, #10B981)', fontWeight: 600, fontSize: '0.8rem' }}>✓ Yes</span>
          {r.onboarded_date && (
            <span style={{ color: 'var(--admin-text-muted)', fontSize: '0.72rem' }}>
              {new Date(r.onboarded_date).toLocaleDateString()}
            </span>
          )}
        </div>
      ) : <span style={{ color: 'var(--admin-text-muted)', fontSize: '0.8rem' }}>—</span>,
    },
    {
      key: 'resume_url',
      header: 'Resume',
      sortable: false,
      render: r => r.resume_url ? (
        <a href={r.resume_url} target="_blank" rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          style={{ color: 'var(--admin-accent)', fontSize: '0.8rem' }}
        >
          View
        </a>
      ) : <span style={{ color: 'var(--admin-muted)', fontSize: '0.8rem' }}>—</span>,
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
          aria-label="Delete resource"
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

  async function handleCreate(data: ResourceCreate) {
    setCreating(true);
    await createResource(data);
    setCreating(false);
    setShowCreate(false);
    reload();
  }

  async function handleDelete() {
    if (!deleteTarget) return;
    setDeleting(true);
    await deleteResource(deleteTarget.resource_id);
    setDeleting(false);
    setDeleteTarget(null);
    reload();
  }

  return (
    <div>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Resources</h1>
        <button className="btn btn-admin-primary" onClick={() => setShowCreate(true)}>
          + New Resource
        </button>
      </div>

      {/* Filters */}
      <div className="d-flex gap-2 mb-3 flex-wrap align-items-center">
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
            placeholder="Search by name, contact, skill…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <select
          className="form-select admin-form-control"
          style={{ maxWidth: 160 }}
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
        >
          {VISA_FILTER_OPTIONS.map(v => (
            <option key={v} value={v}>{v || 'All Statuses'}</option>
          ))}
        </select>
      </div>

      {error && <div className="alert alert-danger py-2 small mb-3">{error}</div>}

      <DataTable
        columns={columns}
        data={items}
        rowKey={r => r.resource_id}
        onRowClick={r => navigate(`/admin/resources/${r.resource_id}`)}
        loading={loading}
        emptyMessage="No resources found."
      />

      {lastKey && !loading && (
        <div className="text-center mt-3">
          <button className="btn btn-admin-ghost" onClick={loadMore}>Load More</button>
        </div>
      )}

      {/* Create modal */}
      {showCreate && (
        <div className="admin-modal-backdrop">
          <div className="admin-modal admin-modal-lg">
            <div className="admin-modal-header">
              <h2 className="admin-modal-title">New Resource</h2>
              <button className="btn-close btn-close-white" onClick={() => setShowCreate(false)} />
            </div>
            <ResourceForm
              onSubmit={d => handleCreate(d as ResourceCreate)}
              onCancel={() => setShowCreate(false)}
              loading={creating}
            />
          </div>
        </div>
      )}

      {/* Delete confirm */}
      {deleteTarget && (
        <ConfirmModal
          title="Delete Resource"
          message={`Are you sure you want to delete ${deleteTarget.first_name} ${deleteTarget.last_name}? This cannot be undone.`}
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
          loading={deleting}
        />
      )}
    </div>
  );
}
