import { useState } from "react";
import Attractions from "./Attractions";
import ContactSocial from "./ContactSocial";
import Facilities from "./Facilities";
import NameAddress from "./NameAddress";
import Photos from "./Photos";
import Rooms from "./Rooms";
import URLInfo from "./URLInfo";
import { DUMMY_CONF } from "../../utils/dummyConfig";
import { WebsiteConfigProps } from "../../types/websiteConfig";

const WebsiteConfig = () => {
  const [config, setConfig] = useState<WebsiteConfigProps>(DUMMY_CONF);

  return (
    <div className="p-4 flex flex-col gap-4 border h-full overflow-y-auto">
      <div className="text-2xl flex items-center gap-2">
        <p>Booking Engine</p>
        <span className="text-base text-slate-400">Website configuration</span>
      </div>
      <URLInfo websiteUrl={config.websiteUrl} theme={config.theme} />
      <NameAddress />
      <ContactSocial />
      <Photos />
      <Rooms />
      <Facilities />
      <Attractions />
    </div>
  );
};

export default WebsiteConfig;
