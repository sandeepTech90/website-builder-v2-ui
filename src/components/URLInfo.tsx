import { ExternalLink } from "lucide-react";
import Card from "./ui/Card";
import Checkbox from "./ui/Checkbox";
import FormLabel from "./ui/FormLabel";

const URLInfo = () => {
  return (
    <Card title="Website URL & Theme" onSave={() => {}}>
      <div className="px-3 py-8">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <FormLabel text="Website URL" />
            <div className="flex gap-2 justify-center items-center">
              <input type="text" className="h-12 flex-1" />
              <ExternalLink className="h-12 w-12 text-primary" />
            </div>
            <div className="text-xs italic mt-2 ml-2">
              <p>
                * Please map domain to
                <strong className="text-lg font-medium"> 139.59.91.39</strong>
              </p>
              <p className="flex items-center gap-1 flex-wrap">
                * After clicking
                <button className="bg-primary text-white">Generate</button>
                you can <strong className="text-lg">test</strong> your website @
                <strong className="text-lg"> http://139.59.91.39:4000/</strong>
                <ExternalLink className="text-primary h-4" />
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <FormLabel text="Theme" />
            <div className="flex gap-x-12 gap-y-4 flex-wrap">
              <Checkbox label="Aqua" value="aqua" color="#00ffff" />
              <Checkbox
                label="Maroon"
                value="maroon"
                color="#800000"
                textColor="white"
              />
              <Checkbox label="Yellow" value="yellow" color="#ffff00" />
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default URLInfo;
