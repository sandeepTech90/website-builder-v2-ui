import { ReactNode } from "react";

type CardProps = {
  title: string;
  onSave: () => void;
  children: ReactNode;
};

const Card = (props: CardProps) => {
  const { title, onSave, children } = props;

  return (
    <div className="border rounded-md">
      <div className="w-full bg-slate-50 rounded-t-md py-2 px-3 flex justify-between items-center border-b">
        <p>{title}</p>
        <button className="text-xs">Save</button>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
};

export default Card;
