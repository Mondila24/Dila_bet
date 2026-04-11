function ProductCard({ title, tips,}) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h2>{title}</h2>
      <p>Tip: {tips}</p>
    </div>
  );
}

export default ProductCard;