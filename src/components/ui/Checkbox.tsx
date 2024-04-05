type CheckboxProps = {
  label: string | number | boolean;
  value: string;
  color?: string;
  textColor?: string;
};

const Checkbox = (props: CheckboxProps) => {
  const { label, value, color, textColor } = props;

  return (
    <div className="flex text-sm gap-2">
      <input type="radio" name="theme" value={value} />
      <div
        className="py-1 px-2 rounded-md flex items-center justify-center w-[5rem]"
        style={{ backgroundColor: color, color: textColor }}
      >
        {label}
      </div>
    </div>
  );
};

export default Checkbox;
