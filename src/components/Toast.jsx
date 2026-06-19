import { useApp } from '../context/AppContext.jsx';
import '../styles/toast.css';

export default function Toast() {
  const { toastMsg } = useApp();

  if (!toastMsg) return null;

  return (
    <div
      className={`toast toast--${toastMsg.type || 'success'}`}
      role="status"
      aria-live="polite"
    >
      <span className="toast__icon">
        {toastMsg.type === 'info' ? 'ℹ️' : '✅'}
      </span>
      {toastMsg.text}
    </div>
  );
}
