export type VisaStatus = 'H1B' | 'OPT' | 'I-140 Approved' | 'Citizen' | 'GC';

export interface Resource {
  resource_id: string;
  first_name: string;
  last_name: string;
  contact: string;
  referred_by: string;
  status: VisaStatus;
  date_added: string;
  assigned_client: string;
  key_skills: string[];
  expected_salary: string;
  shared_with: string;
  resume_url: string;
  resume_filename: string;
  onboarded: boolean;
  onboarded_date: string;
}

export interface ResourceCreate {
  first_name: string;
  last_name: string;
  contact: string;
  referred_by?: string;
  status: VisaStatus;
  assigned_client?: string;
  key_skills?: string[];
  expected_salary?: string;
  shared_with?: string;
}

export interface ResourceUpdate extends Partial<ResourceCreate> {
  resume_url?: string;
  resume_filename?: string;
  onboarded?: boolean;
  onboarded_date?: string;
}

export interface Job {
  job_id: string;
  job_title: string;
  job_description: string;
  client_name: string;
  referred_by: string;
  expected_start_date: string;
  vendor_pay_rate: string;
  vendor_name: string;
  location: string;
  duration: string;
  client_type: string;
  preferred_qualifications: string;
  additional_qualifications: string;
  billing_rate: string;
  date_created: string;
}

export interface JobCreate {
  job_title: string;
  job_description?: string;
  client_name: string;
  referred_by?: string;
  expected_start_date?: string;
  vendor_pay_rate?: string;
  vendor_name?: string;
  location?: string;
  duration?: string;
  client_type?: string;
  preferred_qualifications?: string;
  additional_qualifications?: string;
  billing_rate?: string;
}

export type JobUpdate = Partial<JobCreate>;

export interface Employee {
  employee_id: string;
  first_name: string;
  last_name: string;
  basic_info: string;
  assigned_client: string;
  join_date: string;
  actual_billing_rate: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  last_key?: string | null;
}

export interface AdminUser {
  user_id: string;
  display_name: string;
}

export interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}
