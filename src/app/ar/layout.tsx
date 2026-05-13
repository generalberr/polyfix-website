export default function ArLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="rtl" lang="ar" style={{ fontFamily: "'Tajawal', sans-serif" }}>
      {children}
    </div>
  )
}
