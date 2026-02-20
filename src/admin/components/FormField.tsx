import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface BaseFieldProps {
  label: string;
  fieldId: string;
  error?: string;
  required?: boolean;
}

type InputFieldProps = BaseFieldProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> & { as?: 'input' };
type TextareaFieldProps = BaseFieldProps & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> & { as: 'textarea'; rows?: number };
type SelectFieldProps = BaseFieldProps & {
  as: 'select';
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

type FormFieldProps = InputFieldProps | TextareaFieldProps | SelectFieldProps;

export function FormField(props: FormFieldProps) {
  const { label, fieldId, error, required, as = 'input', ...rest } = props;

  return (
    <div className="mb-3">
      <label htmlFor={fieldId} className="admin-label">
        {label}{required && <span style={{ color: 'var(--admin-danger)', marginLeft: '0.2rem' }}>*</span>}
      </label>

      {as === 'textarea' ? (
        <textarea
          id={fieldId}
          className={`form-control admin-form-control${error ? ' is-invalid' : ''}`}
          rows={(rest as TextareaFieldProps).rows ?? 3}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : as === 'select' ? (
        <select
          id={fieldId}
          className={`form-select admin-form-control${error ? ' is-invalid' : ''}`}
          value={(rest as SelectFieldProps).value}
          onChange={(rest as SelectFieldProps).onChange}
        >
          <option value="">-- Select --</option>
          {(rest as SelectFieldProps).options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      ) : (
        <input
          id={fieldId}
          className={`form-control admin-form-control${error ? ' is-invalid' : ''}`}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}
