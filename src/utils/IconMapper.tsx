import { ReactElement } from 'react';
import {
  Mic, Layers, Video, Box, Camera, Zap, ShoppingBag, Smartphone,
  ShieldCheck, MessageCircle, CheckCircle2, Clock, Mail, Instagram,
  Menu, X, Sparkles, ArrowRight, ArrowUp, Play, LucideProps
} from 'lucide-react';

type IconComponent = React.ComponentType<LucideProps>;

const iconMap: Record<string, IconComponent> = {
  Mic, Layers, Video, Box, Camera, Zap, ShoppingBag, Smartphone,
  ShieldCheck, MessageCircle, CheckCircle2, Clock, Mail, Instagram,
  Menu, X, Sparkles, ArrowRight, ArrowUp, Play
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export function Icon({ name, className, size = 24 }: IconProps): ReactElement | null {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} size={size} />;
}