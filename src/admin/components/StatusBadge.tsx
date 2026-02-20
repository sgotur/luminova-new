import type { VisaStatus } from '../types/adminTypes';

const BADGE_CLASS: Record<VisaStatus, string> = {
  H1B: 'admin-badge-h1b',
  OPT: 'admin-badge-opt',
  'I-140 Approved': 'admin-badge-i140',
  Citizen: 'admin-badge-citizen',
  GC: 'admin-badge-gc',
};

interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const cls = BADGE_CLASS[status as VisaStatus] ?? 'admin-badge-h1b';
  return <span className={`admin-badge ${cls}`}>{status}</span>;
}
