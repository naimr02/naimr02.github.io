export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Naim Rahman. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#CFBDFF] dark:via-[#E0CCFF] dark:to-[#CFBDFF] dark:decoration-[#CFBDFF]"
          >
            Next.js
          </a>{" "}
          &{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#CFBDFF] dark:via-[#E0CCFF] dark:to-[#CFBDFF] dark:decoration-[#CFBDFF]"
          >
            Tailwind CSS
          </a>
        </p>
      </div>
    </footer>
  );
}
