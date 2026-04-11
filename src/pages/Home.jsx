export default function Home({ setPage }) {
  return (
    <div className="home">
      <div className="hero">
        <h1>Smart Predictions.<br />Real Results.</h1>
        <p>Daily sports tips from expert analysts. Free picks every day, premium VIP picks for serious bettors.</p>
        <div className="hero-btns">
          <button className="btn-primary" onClick={() => setPage("free")}>View Free Picks</button>
          <button className="btn-outline" onClick={() => setPage("vip")}>Go VIP</button>
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <span>🎯</span>
          <h3>Expert Analysis</h3>
          <p>Every tip is backed by in-depth stats and form analysis.</p>
        </div>
        <div className="feature-card">
          <span>📊</span>
          <h3>Daily Updates</h3>
          <p>Fresh predictions posted every morning before kickoff.</p>
        </div>
        <div className="feature-card">
          <span>🔒</span>
          <h3>VIP Exclusives</h3>
          <p>High-value accumulators and banker tips for subscribers.</p>
        </div>
      </div>
    </div>
  );
}
