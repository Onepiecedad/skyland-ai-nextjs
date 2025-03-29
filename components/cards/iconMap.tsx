import { Phone, MessageSquare, Clock, Zap, Brain } from "lucide-react";

export type IconKey = "phone" | "message-square" | "clock" | "zap" | "brain";

export const iconMap: Record<IconKey, typeof Phone> = {
  phone: Phone,
  "message-square": MessageSquare,
  clock: Clock,
  zap: Zap,
  brain: Brain
}; 