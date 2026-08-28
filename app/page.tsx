export default function Home() {
  return (
    <main className="av-main">
      <section className="av-hero">
        <h1>ARCADE VAULT</h1>
        <p className="sub">
          INSERT COIN <span className="blink">_</span>
        </p>
      </section>

      <div className="av-filters">
        <div className="av-search">
          <span className="ico">&gt;</span>
          <input placeholder="Buscar juego..." />
        </div>
        <div className="av-chips">
          <button className="chip active">TODOS</button>
          <button className="chip">ARCADE</button>
          <button className="chip">PUZZLE</button>
          <button className="chip">RETRO</button>
        </div>
      </div>

      <div className="av-grid">
        {[
          { t: "NEON BRICKS", c: "cover-bricks", d: "Rompe la muralla de píxeles." },
          { t: "TETRO", c: "cover-tetro", d: "Encaja las piezas que caen." },
          { t: "SNAKE++", c: "cover-snake", d: "Crece sin morder tu cola." },
          { t: "INVADERS", c: "cover-invaders", d: "Defiende la última línea." },
        ].map((g) => (
          <article className="card" key={g.t}>
            <div className="cover">
              <div className={`cover-bg ${g.c}`} />
              <span className="label">DEMO</span>
            </div>
            <div className="meta">
              <div className="title">{g.t}</div>
              <div className="desc">{g.d}</div>
            </div>
            <div className="row">
              <div className="score-badge">
                HI-SCORE
                <b>000000</b>
              </div>
              <button className="btn">JUGAR</button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
