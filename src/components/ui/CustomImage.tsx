import { Edit, X } from "lucide-react";
import FormLabel from "./FormLabel";

type CustomImgProps = {
  url?: string;
  title?: string | number;
  allowEdit?: boolean;
  canDelete?: boolean;
  checkboxEnabled?: boolean;
  radioEnabled?: boolean;
};

const CustomImage = (props: CustomImgProps) => {
  const { url, title, allowEdit, canDelete, checkboxEnabled, radioEnabled } =
    props;

  return (
    <div>
      {title && <FormLabel text={title} />}
      <div className="relative w-fit border">
        <img
          src={
            url ??
            "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
          }
          alt=""
          className="h-[7rem] w-[10rem]"
        />
        {allowEdit && (
          <div className="absolute bottom-0 right-0 bg-white p-1">
            <Edit className="h-4 w-4" />
          </div>
        )}
        {canDelete && (
          <div className="absolute top-0 right-0 bg-red-400 p-1 text-white">
            <X className="h-4 w-4" />
          </div>
        )}
        {checkboxEnabled && (
          <input
            type="checkbox"
            name=""
            id=""
            className="absolute top-0 left-0 h-5 w-5"
          />
        )}
        {radioEnabled && (
          <input
            type="radio"
            name=""
            id=""
            className="absolute top-[50%] left-0 h-5 w-5"
          />
        )}
      </div>
    </div>
  );
};

export default CustomImage;
