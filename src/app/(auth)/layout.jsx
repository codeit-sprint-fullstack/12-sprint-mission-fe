export default function AuthLayout({ children }) {
  return (
    <main className="w-full min-h-screen flex items-center justify-center px-4 md:px-0">
      {children}
    </main>
  );
}
