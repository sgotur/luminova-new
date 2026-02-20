import { useState, type FormEvent } from 'react';
import type { Resource, ResourceCreate, ResourceUpdate, VisaStatus } from '../../types/adminTypes';
import { FormField } from '../../components/FormField';
import { TagInput } from '../../components/TagInput';

const VISA_STATUSES: VisaStatus[] = ['H1B', 'OPT', 'I-140 Approved', 'Citizen', 'GC'];

interface ResourceFormProps {
  initial?: Partial<Resource>;
  onSubmit: (data: ResourceCreate | ResourceUpdate) => Promise<void>;
  onCancel: () => void;
  loading?: boolean;
}

export function ResourceForm({ initial, onSubmit, onCancel, loading }: ResourceFormProps) {
  const [firstName, setFirstName] = useState(initial?.first_name ?? '');
  const [lastName, setLastName] = useState(initial?.last_name ?? '');
  const [contact, setContact] = useState(initial?.contact ?? '');
  const [referredBy, setReferredBy] = useState(initial?.referred_by ?? '');
  const [status, setStatus] = useState<VisaStatus>((initial?.status as VisaStatus) ?? 'H1B');
  const [assignedClient, setAssignedClient] = useState(initial?.assigned_client ?? '');
  const [keySkills, setKeySkills] = useState<string[]>(initial?.key_skills ?? []);
  const [expectedSalary, setExpectedSalary] = useState(initial?.expected_salary ?? '');
  const [sharedWith, setSharedWith] = useState(initial?.shared_with ?? '');
  const [onboarded, setOnboarded] = useState(initial?.onboarded ?? false);
  const [onboardedDate, setOnboardedDate] = useState(initial?.onboarded_date ?? '');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    const data: ResourceCreate & { onboarded: boolean; onboarded_date: string } = {
      first_name: firstName,
      last_name: lastName,
      contact,
      referred_by: referredBy,
      status,
      assigned_client: assignedClient,
      key_skills: keySkills,
      expected_salary: expectedSalary,
      shared_with: sharedWith,
      onboarded,
      onboarded_date: onboarded ? onboardedDate : '',
    };
    try {
      await onSubmit(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save resource');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="admin-modal-body">
        {error && (
          <div className="alert alert-danger py-2 small mb-3">{error}</div>
        )}
        <div className="row g-3">
          <div className="col-md-6">
            <FormField
              fieldId="res-first-name"
              label="First Name"
              required
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <FormField
              fieldId="res-last-name"
              label="Last Name"
              required
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <FormField
              fieldId="res-contact"
              label="Contact (Email / Phone)"
              required
              value={contact}
              onChange={e => setContact(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <FormField
              fieldId="res-referred-by"
              label="Referred By"
              value={referredBy}
              onChange={e => setReferredBy(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <FormField
              as="select"
              fieldId="res-status"
              label="Visa Status"
              required
              options={VISA_STATUSES.map(s => ({ value: s, label: s }))}
              value={status}
              onChange={e => setStatus(e.target.value as VisaStatus)}
            />
          </div>
          <div className="col-md-6">
            <FormField
              fieldId="res-assigned-client"
              label="Assigned Client"
              value={assignedClient}
              onChange={e => setAssignedClient(e.target.value)}
            />
          </div>
          <div className="col-12">
            <div className="mb-3">
              <label className="admin-label">Key Skills</label>
              <TagInput value={keySkills} onChange={setKeySkills} />
            </div>
          </div>
          <div className="col-md-6">
            <FormField
              fieldId="res-salary"
              label="Expected Salary"
              placeholder="e.g. $120,000"
              value={expectedSalary}
              onChange={e => setExpectedSalary(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <FormField
              fieldId="res-shared-with"
              label="Shared With"
              value={sharedWith}
              onChange={e => setSharedWith(e.target.value)}
            />
          </div>
          <div className="col-12">
            <div className="d-flex align-items-center gap-3 flex-wrap">
              <div className="form-check mb-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="res-onboarded"
                  checked={onboarded}
                  onChange={e => setOnboarded(e.target.checked)}
                  style={{ cursor: 'pointer' }}
                />
                <label className="form-check-label admin-label mb-0" htmlFor="res-onboarded">
                  OnBoarded
                </label>
              </div>
              {onboarded && (
                <FormField
                  fieldId="res-onboarded-date"
                  label="OnBoarded Date"
                  type="date"
                  value={onboardedDate}
                  onChange={e => setOnboardedDate(e.target.value)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="admin-modal-footer">
        <button type="button" className="btn btn-admin-ghost" onClick={onCancel} disabled={loading}>
          Cancel
        </button>
        <button type="submit" className="btn btn-admin-primary" disabled={loading}>
          {loading ? (
            <><span className="spinner-border spinner-border-sm me-1" role="status"></span>Saving…</>
          ) : initial?.resource_id ? 'Update Resource' : 'Create Resource'}
        </button>
      </div>
    </form>
  );
}
