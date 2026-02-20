import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEmployee } from '../../api/employeesApi';
import type { Employee } from '../../types/adminTypes';

export function EmployeeDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getEmployee(id)
      .then(setEmployee)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 300 }}>
        <div className="spinner-border" style={{ color: 'var(--admin-accent)' }} role="status">
          <span className="visually-hidden">Loading…</span>
        </div>
      </div>
    );
  }

  if (error || !employee) {
    return (
      <div>
        <button className="btn btn-admin-ghost mb-3" onClick={() => navigate('/admin/employees')}>← Back</button>
        <div className="alert alert-danger py-2 small">{error ?? 'Employee not found'}</div>
      </div>
    );
  }

  const fields: { label: string; value: string }[] = [
    { label: 'Assigned Client', value: employee.assigned_client },
    { label: 'Join Date', value: employee.join_date ? new Date(employee.join_date).toLocaleDateString() : '' },
    { label: 'Billing Rate', value: employee.actual_billing_rate },
    { label: 'Basic Info', value: employee.basic_info },
  ];

  return (
    <div>
      <div className="admin-page-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button className="btn btn-admin-ghost btn-sm" onClick={() => navigate('/admin/employees')}>←</button>
          <h1 className="admin-page-title">{employee.first_name} {employee.last_name}</h1>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-detail-grid">
          {fields.map(f => (
            <div key={f.label} className="admin-detail-field">
              <span className="admin-detail-label">{f.label}</span>
              <span className="admin-detail-value">{f.value || '—'}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
