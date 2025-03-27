import React from 'react';
import {
  ChevronDown,
  PhoneCall,
  Zap,
  Users,
  CalendarClock,
  Building,
  Brain,
  DollarSign,
  Bot,
  Mic,
  MessageSquare,
  Search,
  Settings,
  Rocket,
  TrendingUp,
  Hotel,
  Briefcase,
  Scale,
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
  clock: CalendarClock,
  building: Building,
  brain: Brain,
  dollar: DollarSign,
  bot: Bot,
  mic: Mic,
  "message-square": MessageSquare,
  search: Search,
  settings: Settings,
  rocket: Rocket,
  "trending-up": TrendingUp,
  hotel: Hotel,
  briefcase: Briefcase,
  scale: Scale,
}; 