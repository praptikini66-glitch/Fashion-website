export function Home() {
  return (
    <>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",justifyContent: "space-between",alignItems: "center",backgroundColor: "#222",
          color: "white",padding: "15px 30px",}}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
  src="https://cdn.dribbble.com/userupload/42183990/file/original-460bf061550b64aa83cde7abb56b193b.jpg"
  alt="Fashion Hub Logo"
  style={{
    width: "60px",
    height: "60px",
    borderRadius: "50%"
  }}
/>
          <h2 style={{color: "skyblue"}}>Fashion Hub</h2>
        </div>

        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "20px",
            margin: 0,
          }}
        >
          <li>Home</li>
          <li>Collections</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Welcome Section */}
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1>Welcome to Fashion Hub</h1>
        <p>Discover the latest fashion trends and styles.</p>
      </div>

      {/* Featured Collection */}
      <div style={{ padding: "20px" }}>
        <h2 style={{ textAlign: "center" }}>Featured Collection</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
            <div>
          <img
          src="https://th.bing.com/th/id/OIP.geRQvJ_zuVxqPnVMUQMUeQHaNK?w=187&h=333&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
          alt="Traditional Wear"
          style={{width: "250px",height: "300px",objectFit: "cover"}}/>
  <h3>Traditional Wear</h3>
</div>
          <div>
  <img
  src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg"
  alt="Men's Collection"
  style={{ width: "250px", height: "300px", objectFit: "cover" }}
/>
  <h3>Men's Collection</h3>
</div>

    <div>
  <img
  src="https://www.soosi.co.in/cdn/shop/products/WhatsAppImage2022-02-25at7.44.55PM_580x.jpg?v=1645799753"
  alt="Women's Accessories"
  style={{ width: "250px", height: "300px", objectFit: "cover" }}
/>
  <h3>Women's Accessories</h3>
     </div>
          </div>
        </div>
    </>
  );
}