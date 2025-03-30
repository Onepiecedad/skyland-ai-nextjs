import React from 'react';
import {
  PhoneCall,
  Zap,
  Users,
  Brain,
  Bot,
  Settings,
  Rocket,
  Building2,
  Clock,
  DollarSign,
  MessageSquare,
  Search,
  TrendingUp,
  Hotel,
  Briefcase,
  Scale
} from 'lucide-react';

export type IconKey =
  | "phone"
  | "zap"
  | "users"
  | "clock"
  | "building"
  | "brain"
  | "dollar"
  | "bot"
  | "mic"
  | "message-square"
  | "search"
  | "settings"
  | "rocket"
  | "trending-up"
  | "hotel"
  | "briefcase"
  | "scale";

export const iconMap: Record<IconKey, React.FC<{ className?: string }>> = {
  phone: PhoneCall,
  zap: Zap,
  users: Users,
  clock: Clock,
  building: Building2,
  brain: Brain,
  dollar: DollarSign,
  bot: Bot,
  mic: MessageSquare,
  "message-square": MessageSquare,
  search: Search,
  settings: Settings,
  rocket: Rocket,
  "trending-up": TrendingUp,
  hotel: Hotel,
  briefcase: Briefcase,
  scale: Scale,
}; 