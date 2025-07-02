"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Home } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Logo } from '../icons/Logo';
import { Button } from '../ui/button';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/favorites', label: 'Favorites', icon: Heart },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold text-foreground">
            BharatFest
          </span>
        </Link>
        <nav className="flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Button
                key={link.href}
                variant="ghost"
                asChild
                className={cn(
                  'text-sm font-medium',
                  isActive ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                <Link href={link.href}>
                  <link.icon className="h-4 w-4 mr-2" />
                  {link.label}
                </Link>
              </Button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
