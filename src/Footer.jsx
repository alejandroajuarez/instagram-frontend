import { Container } from "react-bootstrap";

export function Footer() {
  return (
    <footer className="footer">
      <Container className="text-center">
        <p>© {new Date().getFullYear()} My Instagram Clone</p>
      </Container>
    </footer>
  );
}