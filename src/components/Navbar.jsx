const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand-block">
        <div className="brand-mark">GF</div>
        <div>
          <p className="brand-name">GoldFit Gym</p>
          <p className="brand-subtitle">Management Dashboard</p>
        </div>
      </div>
      <div className="nav-links">
        <a href="#dashboard">Dashboard</a>
        <a href="#members">Members</a>
      </div>
    </nav>
  )
}

export default Navbar
