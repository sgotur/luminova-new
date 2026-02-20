import { useLocation, Link } from 'react-router-dom';
import { getUserId } from '../auth/tokenStorage';

function buildBreadcrumbs(pathname: string): { label: string; path: string }[] {
  const parts = pathname.split('/').filter(Boolean);
  const crumbs: { label: string; path: string }[] = [];
  let current = '';

  for (const part of parts) {
    current += `/${part}`;
    const label = part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' ');
    crumbs.push({ label, path: current });
  }
  return crumbs;
}

export function AdminTopBar() {
  const { pathname } = useLocation();
  const userId = getUserId();
  const crumbs = buildBreadcrumbs(pathname);

  return (
    <header className="admin-topbar">
      <nav className="admin-breadcrumb" aria-label="Breadcrumb">
        {crumbs.map((crumb, i) => (
          <span key={crumb.path}>
            {i > 0 && <span className="mx-2" style={{ color: 'var(--admin-muted)' }}>/</span>}
            {i === crumbs.length - 1 ? (
              <span className="current">{crumb.label}</span>
            ) : (
              <Link to={crumb.path} style={{ color: 'var(--admin-text-muted)', textDecoration: 'none' }}>
                {crumb.label}
              </Link>
            )}
          </span>
        ))}
      </nav>
      {userId && (
        <span className="admin-user-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.375rem', verticalAlign: 'middle' }}>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          {userId}
        </span>
      )}
    </header>
  );
}
