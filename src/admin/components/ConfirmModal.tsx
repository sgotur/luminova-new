interface ConfirmModalProps {
  title: string;
  message: string;
  confirmLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
}

export function ConfirmModal({
  title,
  message,
  confirmLabel = 'Delete',
  onConfirm,
  onCancel,
  loading,
}: ConfirmModalProps) {
  return (
    <div className="admin-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="confirm-modal-title">
      <div className="admin-modal admin-modal-sm">
        <div className="admin-modal-header">
          <h2 className="admin-modal-title" id="confirm-modal-title">{title}</h2>
          <button
            className="btn-close btn-close-white"
            onClick={onCancel}
            aria-label="Close"
            disabled={loading}
          />
        </div>
        <div className="admin-modal-body">
          <p style={{ color: 'var(--admin-text-muted)', marginBottom: 0 }}>{message}</p>
        </div>
        <div className="admin-modal-footer">
          <button className="btn btn-admin-ghost" onClick={onCancel} disabled={loading}>
            Cancel
          </button>
          <button
            className="btn btn-danger"
            onClick={onConfirm}
            disabled={loading}
            style={{ fontSize: '0.875rem', fontWeight: 600 }}
          >
            {loading ? (
              <><span className="spinner-border spinner-border-sm me-1" role="status"></span>Deleting…</>
            ) : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
