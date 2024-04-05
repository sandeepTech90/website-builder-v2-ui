import FormLabel from "./FormLabel";

type FormInputProps = {
  label: string;
};
const FormInput = (props: FormInputProps) => {
  const { label } = props;

  return (
    <div className="flex flex-col">
      <FormLabel text={label} />
      <input type="text" />
    </div>
  );
};

export default FormInput;
