export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[686px] flex flex-col justify-center">
      <h1 className="font-semibold">Sign In</h1>
      <p className="mt-1.5 mb-5">
        Take your notes with you wherever you go.
      </p>
      {children}
    </div>
  );
}
