import { Outlet } from 'react-router-dom';
import { AdminSidebar } from '../components/AdminSidebar';
import { AdminTopBar } from '../components/AdminTopBar';

export function DashboardLayout() {
  return (
    <div className="admin-shell">
      <AdminSidebar />
      <div className="admin-content">
        <AdminTopBar />
        <main className="admin-main" id="admin-main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
