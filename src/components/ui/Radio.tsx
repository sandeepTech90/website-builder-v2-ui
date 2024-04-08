type RadioProps = {
  label: string | number | boolean;
  value: string;
  color?: string;
  textColor?: string;
  selected: boolean;
  onChange: () => void;
};

const Radio = (props: RadioProps) => {
  const { label, value, color, textColor, onChange, selected } = props;

  return (
    <div className="flex text-sm gap-2">
      <input
        type="radio"
        name="theme"
        value={value}
        onChange={onChange}
        checked={selected}
      />
      <div
        className="py-1 px-2 rounded-md flex items-center justify-center w-[5rem]"
        style={{ backgroundColor: color, color: textColor }}
      >
        {label}
      </div>
    </div>
  );
};

export default Radio;
