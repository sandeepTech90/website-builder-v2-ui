import Card from "../../components/ui/Card";
import FormLabel from "../../components/ui/FormLabel";
import CustomImage from "../../components/ui/CustomImage";
import FormInput from "../../components/ui/FormInput";

const ATTRACTIONS = [
  {
    id: "fac1",
    attname: "Amn-1",
    description:
      "Discover indulgent sophistication in our Executive Super Rooms. Immerse yourself in lavish comfort, from plush bedding to opulent amenities",
    photos: [1, 2, 3, 4, 5, 6],
  },
  {
    id: "fac2",
    attname: "Amn-2",
    description:
      "Discover indulgent sophistication in our Executive Super Rooms. Immerse yourself in lavish comfort, from plush bedding to opulent amenities",
    photos: [1, 2, 3, 4, 5, 6],
  },
  {
    id: "fac3",
    attname: "Amn-3",
    description:
      "Discover indulgent sophistication in our Executive Super Rooms. Immerse yourself in lavish comfort, from plush bedding to opulent amenities",
    photos: [1, 2, 3, 4, 5, 6],
  },
];

const Attractions = () => {
  return (
    <Card title="Attractions" onSave={() => {}}>
      <div className="px-3 py-8 flex flex-col gap-4">
        {ATTRACTIONS.map((fac) => (
          <div
            key={fac.id}
            className="border border-dashed px-3 py-4 rounded-lg border-primary relative flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <FormInput label="Name" />
            </div>
            <div className="flex flex-col">
              <FormLabel text="Description" />
              <textarea rows={2}></textarea>
            </div>

            <div className="flex flex-col">
              <FormLabel text="Photos" />
              <div className="flex flex-wrap gap-4">
                {fac.photos.map((p) => (
                  <CustomImage
                    key={p}
                    url="https://s3.ap-south-1.amazonaws.com/buzz.hotel-images/nishant-test-hotel-cover.png?_cache=1623252818"
                    canDelete
                  />
                ))}
              </div>
              <button className="min-w-[5rem] w-fit mt-2 text-sm">{`+ Add ${fac.attname} photos`}</button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Attractions;
