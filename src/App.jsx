import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import DashboardCards from './components/DashboardCards'
import MemberTable from './components/MemberTable'
import MemberForm from './components/MemberForm'

const initialForm = {
  name: '',
  age: '',
  phone: '',
  membershipPlan: 'Basic',
  joiningDate: '',
  status: 'Active',
}

const API_BASE = import.meta.env.VITE_API_URL || '/api'

function App() {
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState(initialForm)
  const [editing, setEditing] = useState(null)

  const api = (path, opts) => fetch(`${API_BASE}${path}`, opts).then((r) => r.json())

  const loadMembers = async () => {
    setLoading(true)
    try {
      const data = await api('/api/members')
      setMembers(Array.isArray(data) ? data : [])
    } catch (e) {
      setMembers([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadMembers()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((s) => ({ ...s, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (editing) {
      await fetch(`${API_BASE}/members/${editing._id || editing.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
    } else {
      await fetch(`${API_BASE}/members`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
    }

    setShowForm(false)
    setFormData(initialForm)
    setEditing(null)
    loadMembers()
  }

  const handleEdit = (member) => {
    setEditing(member)
    setFormData({
      name: member.name || '',
      age: member.age || '',
      phone: member.phone || '',
      membershipPlan: member.membershipPlan || member.plan || 'Basic',
      joiningDate: member.joiningDate || member.joinDate || '',
      status: member.status || 'Active',
    })
    setShowForm(true)
  }

  const handleDelete = async (member) => {
    if (!confirm('Delete this member?')) return
    await fetch(`${API_BASE}/members/${member._id || member.id}`, { method: 'DELETE' })
    loadMembers()
  }

  const stats = [
    { title: 'Members', value: members.length, note: 'Total members', icon: '👥' },
    { title: 'Active', value: members.filter((m) => m.status === 'Active').length, note: 'Active members', icon: '✅' },
  ]

  return (
    <div className="app-root">
      <Navbar />
      <main className="container">
        <header className="app-header">
          <h1>GoldFit Gym — Management</h1>
          <div>
            <button className="primary-btn" onClick={() => { setShowForm(true); setEditing(null); setFormData(initialForm) }}>
              Add Member
            </button>
          </div>
        </header>

        <DashboardCards cards={stats} />

        {loading ? (
          <p>Loading members…</p>
        ) : (
          <MemberTable members={members} onEdit={handleEdit} onDelete={handleDelete} />
        )}

        {showForm && (
          <MemberForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onCancel={() => { setShowForm(false); setEditing(null); setFormData(initialForm) }}
            isEditing={!!editing}
          />
        )}
      </main>
    </div>
  )
}

export default App
