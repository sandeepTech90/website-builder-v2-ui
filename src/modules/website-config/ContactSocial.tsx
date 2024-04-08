import { Facebook, Instagram, Twitter } from "lucide-react";
import Card from "../../components/ui/Card";
import FormInput from "../../components/ui/FormInput";
import FormLabel from "../../components/ui/FormLabel";

const ContactSocial = () => {
  return (
    <Card title="Contact Details & Social Links" onSave={() => {}}>
      <div className="px-3 py-8">
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-x-[5rem] gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <FormInput label="Contact No" />
            <FormInput label="Email" />
          </div>
          <div>
            <FormLabel text="Social Links" />
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <div className="bg-slate-200 rounded flex justify-center items-center w-9 h-9">
                  <Facebook className="text-slate-400" />
                </div>
                <input type="text" className="flex-1" />
              </div>
              <div className="flex gap-2">
                <div className="bg-slate-200 rounded flex justify-center items-center w-9 h-9">
                  <Twitter className="text-slate-400" />
                </div>
                <input type="text" className="flex-1" />
              </div>
              <div className="flex gap-2">
                <div className="bg-slate-200 rounded flex justify-center items-center w-9 h-9">
                  <Instagram className="text-slate-400" />
                </div>
                <input type="text" className="flex-1" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default ContactSocial;
