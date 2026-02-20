import { useRef, useState } from 'react';
import { uploadResume } from '../api/resourcesApi';
import type { Resource } from '../types/adminTypes';

interface ResumeUploadProps {
  resourceId: string;
  currentUrl?: string;
  currentFilename?: string;
  onUploaded: (updated: Resource) => void;
}

export function ResumeUpload({ resourceId, currentUrl, currentFilename, onUploaded }: ResumeUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);
    setUploading(true);
    try {
      const updated = await uploadResume(resourceId, file);
      onUploaded(updated);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  }

  return (
    <div>
      <div className="d-flex align-items-center gap-2 flex-wrap">
        {currentUrl ? (
          <a
            href={currentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-admin-ghost"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.3rem' }}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
            {currentFilename || 'View Resume'}
          </a>
        ) : (
          <span style={{ fontSize: '0.8125rem', color: 'var(--admin-text-muted)' }}>No resume uploaded</span>
        )}

        <button
          type="button"
          className="btn btn-sm btn-admin-ghost"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
        >
          {uploading ? (
            <><span className="spinner-border spinner-border-sm me-1" role="status"></span>Uploading…</>
          ) : currentUrl ? 'Replace' : 'Upload Resume'}
        </button>

        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>
      {error && <div style={{ color: 'var(--admin-danger)', fontSize: '0.8125rem', marginTop: '0.375rem' }}>{error}</div>}
    </div>
  );
}
