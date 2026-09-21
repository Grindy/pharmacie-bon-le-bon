export default function Footer() {
  // L'année se met à jour toute seule
  const annee = new Date().getFullYear();

  return (
    <footer className="pied">
      <p>Copyright © LMSQ {annee}</p>
    </footer>
  );
}