import { Container, Nav, Navbar, Button } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <>
      <Navbar className="shadow" expand="lg">
        <Container>
          <div className="d-flex justify-content-center">
            <Button className="btn btn-light">
              <img src="./SVG ICONS/3BAR.svg" width={20} />
            </Button>
            <Navbar.Brand href="/">
              <img className="img-fluid" src="./LOGOS/F1M5_Logo.webp" />
            </Navbar.Brand>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img className="mr-2" src="./SVG ICONS/wallet.svg" width={18} />
            <span className="fw-bolder mx-2">$ 1,990.6</span>
            <img
              src="https://fun88-six.vercel.app/assets/header/divider.svg"
              width={2}
              className="img-fluid mx-2"
            />
            <img src="./SVG ICONS/userhead.svg" width={25} />
          </div>
        </Container>
      </Navbar>
    </>
  );
}
