import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResources } from '../../hooks/useResources';
import { DataTable, type Column } from '../../components/DataTable';
import { StatusBadge } from '../../components/StatusBadge';
import type { Resource } from '../../types/adminTypes';

export function EmployeesPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const { items, loading, error, lastKey, loadMore } = useResources({
    onboarded: true,
    search: search || undefined,
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
      header: 'Visa Status',
      render: r => <StatusBadge status={r.status} />,
    },
    { key: 'assigned_client', header: 'Assigned Client' },
    {
      key: 'onboarded_date',
      header: 'OnBoarded Date',
      render: r => r.onboarded_date ? new Date(r.onboarded_date).toLocaleDateString() : '—',
    },
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
  ];

  return (
    <div>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Employees</h1>
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
            placeholder="Search by name, contact, skill…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      {error && <div className="alert alert-danger py-2 small mb-3">{error}</div>}

      <DataTable
        columns={columns}
        data={items}
        rowKey={r => r.resource_id}
        onRowClick={r => navigate(`/admin/resources/${r.resource_id}`)}
        loading={loading}
        emptyMessage="No onboarded employees found."
      />

      {lastKey && !loading && (
        <div className="text-center mt-3">
          <button className="btn btn-admin-ghost" onClick={loadMore}>Load More</button>
        </div>
      )}
    </div>
  );
}
