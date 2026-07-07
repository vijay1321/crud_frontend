const MemberForm = ({ formData, onChange, onSubmit, onCancel, isEditing }) => {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Member form">
      <div className="modal-card">
        <div className="modal-card__header">
          <div>
            <p className="eyebrow">Member Management</p>
            <h3>{isEditing ? 'Edit Member' : 'Add New Member'}</h3>
          </div>
          <button type="button" className="ghost-btn" onClick={onCancel}>
            Close
          </button>
        </div>

        <form className="member-form" onSubmit={onSubmit}>
          <div className="form-grid">
            <label>
              <span>Name</span>
              <input name="name" value={formData.name} onChange={onChange} required />
            </label>
            <label>
              <span>Age</span>
              <input name="age" type="number" min="16" max="80" value={formData.age} onChange={onChange} required />
            </label>
            <label>
              <span>Phone Number</span>
              <input name="phone" value={formData.phone} onChange={onChange} required />
            </label>
            <label>
              <span>Membership Plan</span>
              <select name="membershipPlan" value={formData.membershipPlan} onChange={onChange}>
                <option value="Basic">Basic</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
              </select>
            </label>
            <label>
              <span>Joining Date</span>
              <input name="joiningDate" type="date" value={formData.joiningDate} onChange={onChange} required />
            </label>
            <label>
              <span>Status</span>
              <select name="status" value={formData.status} onChange={onChange}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </label>
          </div>

          <div className="form-actions">
            <button type="button" className="ghost-btn" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="primary-btn">
              {isEditing ? 'Save Changes' : 'Add Member'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MemberForm
