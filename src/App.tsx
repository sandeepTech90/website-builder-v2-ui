import "./App.css";
import WebsiteConfig from "./modules/website-config";

function App() {
  return (
    <div className="w-full h-full flex gap-4 bg-slate-50">
      <div className="p-4 text-center w-[30rem] h-full border bg-black text-white">
        TEMP
      </div>
      <WebsiteConfig />
    </div>
  );
}

export default App;
