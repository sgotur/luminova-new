import { Link } from 'react-router-dom';

interface StatCardProps {
  title: string;
  to: string;
  icon: React.ReactNode;
  description: string;
}

function StatCard({ title, to, icon, description }: StatCardProps) {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <div className="admin-stat-card h-100" style={{ cursor: 'pointer', transition: 'border-color 0.15s' }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--admin-accent)')}
        onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--admin-border)')}
      >
        <div style={{ color: 'var(--admin-accent)', marginBottom: '0.75rem' }}>{icon}</div>
        <div style={{ fontWeight: 700, color: 'var(--admin-text)', marginBottom: '0.375rem' }}>{title}</div>
        <div style={{ fontSize: '0.8125rem', color: 'var(--admin-text-muted)' }}>{description}</div>
      </div>
    </Link>
  );
}

export function DashboardHome() {
  return (
    <div>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Dashboard</h1>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <StatCard
            title="Resources"
            to="/admin/resources"
            description="Manage consultant resources and resume uploads"
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            }
          />
        </div>
        <div className="col-md-4">
          <StatCard
            title="Jobs"
            to="/admin/jobs"
            description="Post and track client job openings"
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            }
          />
        </div>
        <div className="col-md-4">
          <StatCard
            title="Employees"
            to="/admin/employees"
            description="View employee records and placements"
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            }
          />
        </div>
      </div>

      <div className="admin-card">
        <h2 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--admin-text)', marginBottom: '0.5rem' }}>
          Welcome to Luminova Admin Portal
        </h2>
        <p style={{ color: 'var(--admin-text-muted)', fontSize: '0.875rem', marginBottom: 0 }}>
          Use the sidebar to navigate to Resources, Jobs, and Employees sections.
          This portal is only accessible to authorized administrators.
        </p>
      </div>
    </div>
  );
}
