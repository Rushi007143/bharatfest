export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 py-6">
      <div className="container flex items-center justify-center">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} BharatFest. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
