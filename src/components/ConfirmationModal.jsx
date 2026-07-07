const ConfirmationModal = ({ member, onConfirm, onCancel }) => {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Delete confirmation">
      <div className="modal-card modal-card--confirm">
        <p className="eyebrow">Confirm Delete</p>
        <h3>Delete {member.name}?</h3>
        <p className="confirm-text">
          This action will remove this member from the active roster.
        </p>
        <div className="form-actions">
          <button type="button" className="ghost-btn" onClick={onCancel}>
            Cancel
          </button>
          <button type="button" className="danger-btn" onClick={onConfirm}>
            Delete Member
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal
