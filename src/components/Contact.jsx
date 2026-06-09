export function Contact() {
  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{textAlign: "center",color: "skyblue", fontStyle: "italic",}}>
        Contact Us
      </h1>
      <p style={{ textAlign: "center" }}>
        We'd love to hear from you!<br/>Feel free to contact us for inquiries,
        feedback, collaborations,<br/> or support regarding our latest fashion
        collections.
      </p>
<br/>
      {/* Contact Information */}
      <div>
        <h2 style={{ color:"#d9265c"}}>Get in Touch</h2>
        Email: support@fashionstore.com <br />
        Phone: +91 98765 43210 <br />
        WhatsApp: +91 98765 43210 <br />
      </div>
<br/>
      {/* Address Section */}
      <div>
        <h2 style={{ color:"#d9265c"}}>Our Address</h2>
        Fashion Store Pvt Ltd <br />
        Thane, Maharashtra, India <br />
        Pin Code: 400601 <br />
      </div>
<br/>
      {/* Working Hours */}
      <div>
        <h2 style={{ color:"#d9265c"}}>Working Hours</h2>
        Monday - Friday: 10 AM - 7 PM <br />
        Saturday: 10 AM - 5 PM <br />
        Sunday: Closed <br />
      </div>
<br/>
      {/* Social Media */}
      <div>
        <h2 style={{ color:"#d9265c"}}>Follow Us</h2>
        Instagram: @fashionhub <br />
        Facebook: Fashion Hub <br />
        Pinterest: Fashion Hub Styles <br />
      </div>
<br/>
      {/* Customer Support */}
      <div>
        <h2 style={{ color:"#d9265c"}}>Customer Support</h2>
        Our support team is available to assist you with orders,<br/> product
        information, and general queries.
      </div>
    </div>
  );
}