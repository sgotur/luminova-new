import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import { ProtectedRoute } from './auth/ProtectedRoute';
import { LoginPage } from './pages/LoginPage';
import { DashboardLayout } from './pages/DashboardLayout';
import { DashboardHome } from './pages/DashboardHome';
import { ResourcesPage } from './pages/resources/ResourcesPage';
import { ResourceDetail } from './pages/resources/ResourceDetail';
import { JobsPage } from './pages/jobs/JobsPage';
import { JobDetail } from './pages/jobs/JobDetail';
import { EmployeesPage } from './pages/employees/EmployeesPage';
import { EmployeeDetail } from './pages/employees/EmployeeDetail';
import './styles/admin.css';

export function AdminApp() {
  return (
    <AuthProvider>
      <Routes>
        {/* Login — no auth required */}
        <Route index element={<LoginPage />} />

        {/* Protected dashboard shell */}
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
        </Route>

        {/* Protected resources */}
        <Route
          path="resources"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<ResourcesPage />} />
          <Route path=":id" element={<ResourceDetail />} />
        </Route>

        {/* Protected jobs */}
        <Route
          path="jobs"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<JobsPage />} />
          <Route path=":id" element={<JobDetail />} />
        </Route>

        {/* Protected employees */}
        <Route
          path="employees"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<EmployeesPage />} />
          <Route path=":id" element={<EmployeeDetail />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </AuthProvider>
  );
}
