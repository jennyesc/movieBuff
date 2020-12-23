// Footer

function Footer() {

    const d = new Date();
    const year = d.getFullYear();

  return (
    <footer>
      <p>&copy; {year} Movie Corp.</p>
    </footer>
  );
}

export default Footer;