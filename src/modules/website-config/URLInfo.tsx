import { ExternalLink } from "lucide-react";
import Card from "../../components/ui/Card";
import Radio from "../../components/ui/Radio";
import FormLabel from "../../components/ui/FormLabel";

type URLInfoProps = {
  websiteUrl: string;
  theme: "marron" | "aqua" | "yellow";
};

const COLORS = [
  { id: "aqua", color: "#00ffff", label: "Aqua" },
  { id: "maroon", color: "#800000", label: "Maroon", textColor: "white" },
  { id: "yellow", color: "#ffff00", label: "Yellow" },
];

const URLInfo = (props: URLInfoProps) => {
  const { websiteUrl, theme } = props;
  return (
    <Card title="Website URL & Theme" onSave={() => {}}>
      <div className="px-3 py-8">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <FormLabel text="Website URL" />
            <div className="flex gap-2 justify-center items-center">
              <input
                type="text"
                className="h-12 flex-1"
                value={websiteUrl}
                onChange={() => console.log()}
              />
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
              {COLORS.map((c) => (
                <Radio
                  key={c.id}
                  label={c.label}
                  value={c.id}
                  color={c.color}
                  textColor={c.textColor}
                  onChange={() => console.log("")}
                  selected={c.id === theme}
                />
              ))}
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default URLInfo;
