import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'بولي فيكس — آلات صناعية ومنتجات كيميائية احترافية',
  description: 'شركة رائدة في تصنيع الآلات الصناعية ومعجون البوليستر الاحترافي والراتنج وصواميل الإحكام — موثوق بها من قِبل المحترفين في جميع أنحاء الشرق الأوسط.',
}

export default function ArLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="rtl" style={{ fontFamily: "'Tajawal', sans-serif" }}>
      {children}
    </div>
  )
}
