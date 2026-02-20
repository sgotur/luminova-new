import { useState, useEffect } from 'react';

interface Job {
  job_id: string;
  job_title: string;
  location: string;
  job_description: string;
  preferred_qualifications: string;
  additional_qualifications: string;
}

interface PaginatedJobs {
  items: Job[];
  last_key?: string | null;
}

function buildDescription(job: Job): string {
  return [job.job_description, job.preferred_qualifications, job.additional_qualifications]
    .filter(Boolean)
    .join('\n\n');
}

function JobCard({ job }: { job: Job }) {
  const [expanded, setExpanded] = useState(false);
  const description = buildDescription(job);

  return (
    <div
      style={{
        background: '#1E293B',
        border: '1px solid #334155',
        borderRadius: '0.75rem',
        padding: '1.5rem',
        marginBottom: '1rem',
      }}
    >
      {/* Title + Location row */}
      <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
        <h2
          style={{
            fontSize: '1.15rem',
            fontWeight: 700,
            color: '#00A8B5',
            margin: 0,
          }}
        >
          {job.job_title}
        </h2>
        {job.location && (
          <span
            style={{
              fontSize: '0.82rem',
              color: '#94A3B8',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              whiteSpace: 'nowrap',
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {job.location}
          </span>
        )}
      </div>

      {/* Description */}
      {description && (
        <div>
          <p
            style={{
              color: '#CBD5E1',
              fontSize: '0.9rem',
              lineHeight: '1.65',
              margin: 0,
              whiteSpace: 'pre-wrap',
              ...(expanded
                ? {}
                : {
                    display: '-webkit-box',
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: 'vertical' as const,
                    overflow: 'hidden',
                  }),
            }}
          >
            {description}
          </p>
          <button
            onClick={() => setExpanded(e => !e)}
            style={{
              background: 'none',
              border: 'none',
              color: '#00A8B5',
              cursor: 'pointer',
              padding: '0.3rem 0 0',
              fontSize: '0.85rem',
              fontWeight: 600,
            }}
          >
            {expanded ? 'less ▲' : 'more... ▼'}
          </button>
        </div>
      )}
    </div>
  );
}

export function Careers() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastKey, setLastKey] = useState<string | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);

  async function fetchJobs(reset = true) {
    reset ? setLoading(true) : setLoadingMore(true);
    try {
      const params = new URLSearchParams({ limit: '20' });
      if (!reset && lastKey) params.set('last_key', lastKey);
      const res = await fetch(`/api/public/jobs?${params}`);
      if (!res.ok) throw new Error(`Failed to load jobs (${res.status})`);
      const data: PaginatedJobs = await res.json();
      setJobs(prev => reset ? data.items : [...prev, ...data.items]);
      setLastKey(data.last_key ?? null);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unable to load openings');
    } finally {
      reset ? setLoading(false) : setLoadingMore(false);
    }
  }

  useEffect(() => { fetchJobs(true); }, []);

  return (
    <div>
      {/* Header strip */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          borderBottom: '3px solid #00A8B5',
          padding: '3rem 1.5rem 2.5rem',
        }}
      >
        <div className="container">
          <nav aria-label="breadcrumb" className="mb-3">
            <ol className="breadcrumb" style={{ '--bs-breadcrumb-divider-color': '#475569', fontSize: '0.85rem' } as React.CSSProperties}>
              <li className="breadcrumb-item">
                <a href="/" style={{ color: '#00A8B5', textDecoration: 'none' }}>Home</a>
              </li>
              <li className="breadcrumb-item active" style={{ color: '#94A3B8' }} aria-current="page">
                Careers
              </li>
            </ol>
          </nav>
          <h1 style={{ color: '#F8FAFC', fontWeight: 700, fontSize: '2rem', marginBottom: '0.5rem' }}>
            Open Positions
          </h1>
          <p style={{ color: '#94A3B8', maxWidth: '600px', margin: 0 }}>
            Join Luminova Technology and help shape the future of AI and cloud solutions.
          </p>
        </div>
      </div>

      {/* Job list */}
      <div className="container py-5">
        {loading && (
          <div className="text-center py-5">
            <div
              className="spinner-border"
              role="status"
              style={{ color: '#00A8B5', width: '2.5rem', height: '2.5rem' }}
            >
              <span className="visually-hidden">Loading…</span>
            </div>
          </div>
        )}

        {error && (
          <div
            className="alert"
            style={{ background: '#1E293B', color: '#F87171', border: '1px solid #334155' }}
          >
            {error}
          </div>
        )}

        {!loading && !error && jobs.length === 0 && (
          <p style={{ color: '#94A3B8', textAlign: 'center', padding: '3rem 0' }}>
            No open positions at this time. Check back soon!
          </p>
        )}

        {jobs.map(job => (
          <JobCard key={job.job_id} job={job} />
        ))}

        {lastKey && !loadingMore && (
          <div className="text-center mt-4">
            <button
              onClick={() => fetchJobs(false)}
              style={{
                background: 'none',
                border: '1px solid #334155',
                color: '#00A8B5',
                borderRadius: '0.5rem',
                padding: '0.5rem 1.5rem',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              Load More
            </button>
          </div>
        )}

        {loadingMore && (
          <div className="text-center mt-4">
            <div className="spinner-border spinner-border-sm" role="status" style={{ color: '#00A8B5' }}>
              <span className="visually-hidden">Loading…</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Careers;
