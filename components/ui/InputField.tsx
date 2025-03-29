import { cn } from "@/lib/utils";
import { typography, radius, glass, colors, spacing } from "@/lib/theme";

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
    <div className={spacing.elementSpacing}>
      <label 
        htmlFor={id} 
        className={cn(
          typography.label,
          "block"
        )}
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        className={cn(
          "w-full p-3",
          radius.small,
          glass.layer1,
          typography.paragraph,
          "border border-white/10",
          "focus:outline-none focus:border-white/20",
          "placeholder:text-white/30",
          error && "border-red-400/40"
        )}
        placeholder={label}
      />
      {error && (
        <p className={cn(
          typography.label,
          "text-red-400"
        )}>
          {error}
        </p>
      )}
    </div>
  );
} 