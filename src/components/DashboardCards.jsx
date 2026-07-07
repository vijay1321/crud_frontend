const DashboardCards = ({ cards }) => {
  return (
    <section className="stats-grid" aria-label="Dashboard summary cards">
      {cards.map((card) => (
        <article key={card.title} className="stat-card">
          <div className="stat-card__icon">{card.icon}</div>
          <div>
            <p className="stat-card__title">{card.title}</p>
            <h3 className="stat-card__value">{card.value}</h3>
            <p className="stat-card__note">{card.note}</p>
          </div>
        </article>
      ))}
    </section>
  )
}

export default DashboardCards
