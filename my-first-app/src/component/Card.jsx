function Card({ title, children }) {
  return (
    <article className="card">
      {title && <h2>{title}</h2>}
      {children}
    </article>
  );
}

export default Card;
