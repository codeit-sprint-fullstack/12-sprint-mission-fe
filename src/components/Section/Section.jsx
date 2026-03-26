import "./section.css";

function Section({ type, title, heading, desc, image }) {
  return (
    <section className={`section ${type}`}>
      <div className="section-inner">
        <div className="section-visual">
          <img src={image} alt={title} />
        </div>

        <div className="section-text">
          <p className="section-title">{title}</p>

          <h1>
            {heading.split("\n").map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </h1>

          <p className="section-desc">
            {desc.split("\n").map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section;
