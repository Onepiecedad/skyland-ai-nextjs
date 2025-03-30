import { spacing, typography } from "@/lib/theme";
import { cn } from "@/lib/utils";

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  className?: string;
}

export function InputField({
  label,
  type = "text",
  placeholder,
  error,
  className
}: InputFieldProps) {
  return (
    <div className={cn(
      spacing.stack.sm,
      className
    )}>
      <label 
        className={typography.label}
      >
        {label}
      </label>
      
      <input
        type={type}
        placeholder={placeholder}
        className={cn(
          "w-full bg-white/5 rounded-md px-4 py-2",
          "border border-white/10",
          "focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        )}
      />

      {error && (
        <p className={cn(
          typography.text.sm,
          "text-red-500"
        )}>
          {error}
        </p>
      )}
    </div>
  );
} 