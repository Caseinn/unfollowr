export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Unfollowr. All rights reserved.</p>
        <p>
          Not affiliated with Instagram. Use for analytics only.
        </p>
      </div>
    </footer>
  );
}
