const UserHome = ({ user }) => (
  <div className="home-container">
    <header className="user-welcome">
      <h2>Welcome back, {user.name}!</h2>
      <p>Based on your recent searches...</p>
    </header>
    <section className="product-scroll">
      <h3>Recommended for You</h3>
      {/* Horizontal Product Scroll Here */}
    </section>
  </div>
);
export default UserHome;