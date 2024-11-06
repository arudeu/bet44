import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import BottomNav from "./components/BottomNav";
import Games from "./components/Games";

function App() {
  return (
    <>
      <div className="home">
        <NavigationBar />
        <Banner />
        <BottomNav />
        <Games />
      </div>
    </>
  );
}

export default App;
