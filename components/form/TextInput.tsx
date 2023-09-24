import { Input } from "@utils/types";

const TextInput = ({
  type = "text",
  id,
  name,
  placeholder,
  required = false,
  color = "text-title",
  value,
  icon,
  inputMode,
  ...rest
}: Input) => {
  return (
    <label htmlFor={id} className="px-4 py-3 bg-card rounded-md flex items-center gap-4 text-text cursor-text">
      <span className={color}>{icon}</span>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        value={value}
        inputMode={inputMode}
        className="text-title"
        {...rest}
      />
    </label>
  );
};

export default TextInput;
