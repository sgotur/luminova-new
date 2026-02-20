import { useState, type FormEvent } from 'react';
import type { Job, JobCreate, JobUpdate } from '../../types/adminTypes';
import { FormField } from '../../components/FormField';

interface JobFormProps {
  initial?: Partial<Job>;
  onSubmit: (data: JobCreate | JobUpdate) => Promise<void>;
  onCancel: () => void;
  loading?: boolean;
}

export function JobForm({ initial, onSubmit, onCancel, loading }: JobFormProps) {
  const [jobTitle, setJobTitle] = useState(initial?.job_title ?? '');
  const [jobDescription, setJobDescription] = useState(initial?.job_description ?? '');
  const [clientName, setClientName] = useState(initial?.client_name ?? '');
  const [referredBy, setReferredBy] = useState(initial?.referred_by ?? '');
  const [expectedStartDate, setExpectedStartDate] = useState(initial?.expected_start_date ?? '');
  const [vendorPayRate, setVendorPayRate] = useState(initial?.vendor_pay_rate ?? '');
  const [vendorName, setVendorName] = useState(initial?.vendor_name ?? '');
  const [location, setLocation] = useState(initial?.location ?? '');
  const [duration, setDuration] = useState(initial?.duration ?? '');
  const [clientType, setClientType] = useState(initial?.client_type ?? '');
  const [preferredQualifications, setPreferredQualifications] = useState(initial?.preferred_qualifications ?? '');
  const [additionalQualifications, setAdditionalQualifications] = useState(initial?.additional_qualifications ?? '');
  const [billingRate, setBillingRate] = useState(initial?.billing_rate ?? '');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    const data: JobCreate = {
      job_title: jobTitle,
      job_description: jobDescription,
      client_name: clientName,
      referred_by: referredBy,
      expected_start_date: expectedStartDate,
      vendor_pay_rate: vendorPayRate,
      vendor_name: vendorName,
      location,
      duration,
      client_type: clientType,
      preferred_qualifications: preferredQualifications,
      additional_qualifications: additionalQualifications,
      billing_rate: billingRate,
    };
    try {
      await onSubmit(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save job');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="admin-modal-body">
        {error && <div className="alert alert-danger py-2 small mb-3">{error}</div>}
        <div className="row g-3">
          <div className="col-md-6">
            <FormField fieldId="job-title" label="Job Title" required value={jobTitle} onChange={e => setJobTitle(e.target.value)} />
          </div>
          <div className="col-md-6">
            <FormField fieldId="job-client" label="Client Name" required value={clientName} onChange={e => setClientName(e.target.value)} />
          </div>
          <div className="col-12">
            <FormField as="textarea" fieldId="job-desc" label="Job Description" value={jobDescription} onChange={e => setJobDescription(e.target.value)} rows={4} />
          </div>
          <div className="col-md-6">
            <FormField fieldId="job-referred-by" label="Referred By" value={referredBy} onChange={e => setReferredBy(e.target.value)} />
          </div>
          <div className="col-md-6">
            <FormField fieldId="job-start-date" label="Expected Start Date" type="date" value={expectedStartDate} onChange={e => setExpectedStartDate(e.target.value)} />
          </div>
          <div className="col-md-6">
            <FormField fieldId="job-vendor-name" label="Vendor Name" value={vendorName} onChange={e => setVendorName(e.target.value)} />
          </div>
          <div className="col-md-6">
            <FormField fieldId="job-vendor-pay" label="Vendor Pay Rate" placeholder="e.g. $85/hr" value={vendorPayRate} onChange={e => setVendorPayRate(e.target.value)} />
          </div>
          <div className="col-md-6">
            <FormField fieldId="job-billing" label="Billing Rate" placeholder="e.g. $110/hr" value={billingRate} onChange={e => setBillingRate(e.target.value)} />
          </div>
          <div className="col-md-6">
            <FormField fieldId="job-location" label="Location" value={location} onChange={e => setLocation(e.target.value)} />
          </div>
          <div className="col-md-6">
            <FormField fieldId="job-duration" label="Duration" placeholder="e.g. 6 months" value={duration} onChange={e => setDuration(e.target.value)} />
          </div>
          <div className="col-md-6">
            <FormField fieldId="job-client-type" label="Client Type" value={clientType} onChange={e => setClientType(e.target.value)} />
          </div>
          <div className="col-12">
            <FormField as="textarea" fieldId="job-pref-qual" label="Preferred Qualifications" value={preferredQualifications} onChange={e => setPreferredQualifications(e.target.value)} rows={3} />
          </div>
          <div className="col-12">
            <FormField as="textarea" fieldId="job-add-qual" label="Additional Qualifications" value={additionalQualifications} onChange={e => setAdditionalQualifications(e.target.value)} rows={3} />
          </div>
        </div>
      </div>
      <div className="admin-modal-footer">
        <button type="button" className="btn btn-admin-ghost" onClick={onCancel} disabled={loading}>Cancel</button>
        <button type="submit" className="btn btn-admin-primary" disabled={loading}>
          {loading ? (
            <><span className="spinner-border spinner-border-sm me-1" role="status"></span>Saving…</>
          ) : initial?.job_id ? 'Update Job' : 'Create Job'}
        </button>
      </div>
    </form>
  );
}
