interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  color?: string;
  error?: string | null;
}

const TextInput: React.FC<InputProps> = ({
  id,
  icon,
  error,
  color = "text-title",
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="px-4 py-3 bg-card rounded-md flex items-center gap-4 text-text cursor-text">
        <span className={color}>{icon}</span>
        <input id={id} className="w-full text-title" {...rest} />
      </label>
      {error && <span className="ms-2 text-status-red">{error}</span>}
    </div>
  );
};

export default TextInput;
