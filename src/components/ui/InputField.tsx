import { cn } from "@/lib/utils";

interface InputFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: "text" | "email" | "tel" | "url";
}

export function InputField({ id, label, value, onChange, error, type = "text" }: InputFieldProps) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-light text-white/80">{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        className={cn("w-full rounded-md p-3", error && "border border-red-400/40")}
        placeholder={label}
      />
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
  );
} 