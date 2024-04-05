import Card from "./ui/Card";
import CustomImage from "./ui/CustomImage";
import FormLabel from "./ui/FormLabel";
import { useState } from "react";
import SortableItems from "./SortableItems";
import SortableItem from "./SortableItem";

const Photos = () => {
  const [photos, setPhotos] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);

  const [gallery, setGallery] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);

  return (
    <Card title="Photos" onSave={() => {}}>
      <div className="px-3 py-8 flex flex-col gap-4">
        <div className="flex gap-10 flex-wrap">
          <CustomImage
            url="https://s3.ap-south-1.amazonaws.com/buzz.hotel-images/nishant-test-hotel-cover.png?_cache=1623252818"
            title="Cover photo"
            allowEdit
          />
          <CustomImage
            url="https://s3.ap-south-1.amazonaws.com/buzz.hotel-images/nishant-test-hotel-logo.png?_cache=1623137844"
            title="Logo"
            allowEdit
          />
          <CustomImage title="Main Image" />
        </div>
        <div>
          <FormLabel text="Scroll Images" />
          <SortableItems
            items={photos}
            setItems={setPhotos}
            renderItems={
              <div className="flex gap-4 flex-wrap">
                {photos.map((el) => (
                  <SortableItem id={el} key={el}>
                    <CustomImage
                      title={el}
                      canDelete
                      url="https://s3.ap-south-1.amazonaws.com/buzz.hotel-images/nishant-test-hotel-cover.png?_cache=1623252818"
                    />
                  </SortableItem>
                ))}
              </div>
            }
          />
        </div>
        <div>
          <FormLabel text="Gallery" />
          <SortableItems
            items={gallery}
            setItems={setGallery}
            renderItems={
              <div className="flex gap-4 flex-wrap">
                {gallery.map((el) => (
                  <SortableItem id={el} key={el}>
                    <CustomImage
                      title={el}
                      canDelete
                      checkboxEnabled
                      radioEnabled
                      url="https://s3.ap-south-1.amazonaws.com/buzz.beconf.test/athithi-resorts/athithi-resorts-rooms-0-3.jpg?_cache=1705425211"
                    />
                  </SortableItem>
                ))}
              </div>
            }
          />
          {/* <div className="flex gap-4 flex-wrap">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((el) => (
              <CustomImage
                key={el}
                canDelete
                checkboxEnabled
                radioEnabled
                url="https://s3.ap-south-1.amazonaws.com/buzz.beconf.test/athithi-resorts/athithi-resorts-rooms-0-3.jpg?_cache=1705425211"
              />
            ))}
          </div> */}
          <button className="mt-4">+ Add Photos</button>
        </div>
      </div>
    </Card>
  );
};

export default Photos;
