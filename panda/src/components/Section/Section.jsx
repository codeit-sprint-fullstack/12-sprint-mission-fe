function Section({ type, title, heading, desc, image }) {
  return (
    <section className={`section ${type}`}>
      <div className="section-inner">
        <div className="section-visual">
          <img src={image} alt={title} />
        </div>

        <div className="section-text">
          <span className="section-title">{title}</span>

          <h1>
            {heading.split("\n").map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </h1>

          <p className="section-desc">
            {desc.split("\n").map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section;
