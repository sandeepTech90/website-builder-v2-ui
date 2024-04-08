import Card from "../../components/ui/Card";
import FormLabel from "../../components/ui/FormLabel";
import FormInput from "../../components/ui/FormInput";

const NameAddress = () => {
  return (
    <Card title="Website URL & Theme" onSave={() => {}}>
      <div className="px-3 py-8">
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-x-[5rem] gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <FormInput label="Name" />
            <FormInput label="Address Line 1" />
            <FormInput label="City" />
            <FormInput label="State" />
            <FormInput label="Pin" />
            <FormInput label="Country" />
          </div>
          <div className="flex flex-col">
            <FormLabel text="About hotel" />
            <textarea name="" id="" rows={4}></textarea>
          </div>
          <div className="flex flex-col">
            <FormLabel text="Rooms description" />
            <textarea name="" id="" rows={4}></textarea>
          </div>
          <FormInput label="Google Map Location" />
          <FormInput label="Booking Engine Link" />
          <div className="grid grid-cols-1 gap-x-[5rem] gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            <FormInput label="Google Analytics ID" />
            <FormInput label="Google Tag Manager ID" />
            <FormInput label="Facebook Analytics ID" />
          </div>
        </form>
      </div>
    </Card>
  );
};

export default NameAddress;
