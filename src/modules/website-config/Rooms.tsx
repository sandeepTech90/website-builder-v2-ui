import Card from "../../components/ui/Card";
import CustomImage from "../../components/ui/CustomImage";
import FormLabel from "../../components/ui/FormLabel";

const ROOMS = [
  {
    roomid: "exsup",
    roomname: "Executive Super Duper Room",
    description:
      "Discover indulgent sophistication in our Executive Super Rooms. Immerse yourself in lavish comfort, from plush bedding to opulent amenities",
    amenities: ["Amt-1", "Amt-2", "Amt-3"],
    photos: [1, 2, 3, 4, 5, 6],
  },
  {
    roomid: "sup",
    roomname: "Super Room",
    description:
      "Discover indulgent sophistication in our Executive Super Rooms. Immerse yourself in lavish comfort, from plush bedding to opulent amenities",
    amenities: ["Amt-1", "Amt-2", "Amt-3"],
    photos: [1, 2, 3, 4, 5, 6],
  },
  {
    roomid: "del",
    roomname: "Deluxe Room",
    description:
      "Discover indulgent sophistication in our Executive Super Rooms. Immerse yourself in lavish comfort, from plush bedding to opulent amenities",
    amenities: ["Amt-1", "Amt-2", "Amt-3"],
    photos: [1, 2, 3, 4, 5, 6],
  },
];

const Rooms = () => {
  return (
    <Card title="Rooms" onSave={() => {}}>
      <div className="px-3 py-8 flex flex-col gap-10">
        {ROOMS.map((room) => (
          <div
            key={room.roomid}
            className="border border-dashed px-3 py-4 rounded-lg border-primary relative flex flex-col gap-4"
          >
            <p className="absolute -top-6 left-0 text-primary">
              {room.roomname}
            </p>
            <div className="flex flex-col">
              <FormLabel text="Description" />
              <textarea rows={2}></textarea>
            </div>
            <div className="flex flex-col">
              <FormLabel text="Amenities" />
              <div className="flex flex-wrap gap-4">
                {room.amenities.map((am) => (
                  <div
                    className="border rounded-md px-2 py-1 bg-slate-50 w-[5rem] text-center"
                    key={am}
                  >
                    {am}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <input type="text" />
                <button className="w-[5rem] text-sm">+ Add</button>
              </div>
            </div>
            <div className="flex flex-col">
              <FormLabel text="Photos" />
              <div className="flex flex-wrap gap-4">
                {room.photos.map((p) => (
                  <CustomImage
                    key={p}
                    url="https://s3.ap-south-1.amazonaws.com/buzz.hotel-images/nishant-test-hotel-cover.png?_cache=1623252818"
                    canDelete
                  />
                ))}
              </div>
              <button className="min-w-[5rem] w-fit mt-2 text-sm">{`+ Add ${room.roomname} photos`}</button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Rooms;
