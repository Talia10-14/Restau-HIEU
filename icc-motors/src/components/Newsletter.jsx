import './Newsletter.css';


function Newsletter() {
  return (
    <section className="newsletter">
        <h2>NEWSLETTER</h2>
      <p>Subscribe  our Newsletter for upcoming updates</p>
      <form>
        <input type="email" placeholder="Email" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}

export default Newsletter;