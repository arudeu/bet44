import { Button } from "react-bootstrap";

export default function BottomNav() {
  return (
    <footer className="z-1 position-fixed bottom-0 w-100 pt-2 bg-white d-flex flex-row justify-content-evenly">
      <Button className="bottomnav-btn d-flex flex-column align-items-center">
        <img src="./SVG ICONS/SPORTS.svg" />
        <span className="pt-1">SPORTS</span>
      </Button>
      <Button className="bottomnav-btn d-flex flex-column align-items-center">
        <img src="./SVG ICONS/FAVE.svg" />
        <span className="pt-1">FAVORITES</span>
      </Button>
      <Button className="bottomnav-btn d-flex flex-column align-items-center">
        <img src="./SVG ICONS/INVITE.svg" />
        <span className="pt-1">INVITE</span>
      </Button>
      <Button className="bottomnav-btn d-flex flex-column align-items-center">
        <img src="./SVG ICONS/LIVE.svg" />
        <span className="pt-1">CASINO LIVE</span>
      </Button>
      <Button className="bottomnav-btn d-flex flex-column align-items-center">
        <img src="./SVG ICONS/CASHIER.svg" />
        <span className="pt-1">CASHIER</span>
      </Button>
    </footer>
  );
}
