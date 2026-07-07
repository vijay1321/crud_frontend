const MemberTable = ({ members, onEdit, onDelete }) => {
  return (
    <div className="table-wrapper">
      <table className="member-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Plan</th>
            <th>Joining Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member._id || member.id}>
              <td data-label="Name">
                <div className="member-name">
                  <strong>{member.name}</strong>
                </div>
              </td>
              <td data-label="Age">{member.age}</td>
              <td data-label="Phone">{member.phone}</td>
              <td data-label="Plan">{member.membershipPlan || member.plan}</td>
              <td data-label="Joining Date">{member.joiningDate || member.joinDate}</td>
              <td data-label="Status">
                <span className={`status-badge ${member.status.toLowerCase()}`}>
                  {member.status}
                </span>
              </td>
              <td data-label="Actions">
                <div className="table-actions">
                  <button type="button" className="action-btn action-btn--edit" onClick={() => onEdit(member)}>
                    Edit
                  </button>
                  <button type="button" className="action-btn action-btn--delete" onClick={() => onDelete(member)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MemberTable
