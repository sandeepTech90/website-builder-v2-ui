import "./App.css";
import ContactSocial from "./components/ContactSocial";
import NameAddress from "./components/NameAddress";
import Photos from "./components/Photos";
import URLInfo from "./components/URLInfo";

function App() {
  return (
    <div className="w-full h-full p-2 flex flex-col gap-4">
      <URLInfo />
      <NameAddress />
      <ContactSocial />
      <Photos />
    </div>
  );
}

export default App;
