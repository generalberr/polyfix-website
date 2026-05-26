import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata = { title: 'من نحن — بولي فيكس' }

export default function ArAboutPage() {
  return (
    <>
      <Navbar />
      <div className={styles.pageHero}>
        <div className={styles.sectionTag}>تعرّف علينا</div>
        <h1>من نحن<span>.</span></h1>
        <p>شركة رائدة في تصنيع الآلات الصناعية والمنتجات الكيميائية الاحترافية، بفرعين في الرياض، المملكة العربية السعودية وجبل لبنان، لبنان.</p>
      </div>

      <section className={styles.storySection}>
        <div className={styles.storyContent}>
          <div className={styles.sectionTag}>قصتنا</div>
          <h2>مبنيون على نطاق صناعي.</h2>
          <p>تأسست بولي فيكس بهدف واحد: تصنيع آلات صناعية ومواد إصلاح يعتمد عليها المحترفون في كل مرة. بفرعين في الرياض، المملكة العربية السعودية وجبل لبنان، نورّد ورش السيارات والمصنّعين وشركات البناء والموزّعين في جميع أنحاء الشرق الأوسط.</p>
          <p>بدأنا بمنتج واحد: معجون البوليستر الاحترافي. اليوم نقدم أربع خدمات متكاملة — من الآلات المصنّعة خصيصاً إلى مجموعة كاملة من المنتجات الكيميائية الصناعية — كلها تحت مظلة بولي فيكس الموثوقة.</p>
        </div>
        <div className={styles.storyStats}>
          {[
            { num: '15+', label: 'سنة خبرة في التصنيع' },
            { num: '4', label: 'خدمات متكاملة' },
            { num: '2', label: 'فرعان في المنطقة' },
            { num: '100%', label: 'جودة احترافية' },
          ].map(s => (
            <div key={s.label} className={styles.statItem}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.sectionTag}>قيمنا</div>
        <h2>ما يميّزنا.</h2>
        <div className={styles.valuesGrid}>
          {[
            { num: '01', title: 'الجودة أولاً', desc: 'كل منتج وكل آلة تمر بمعايير صارمة قبل المغادرة. نحن لا نقبل بأقل من الأفضل.' },
            { num: '02', title: 'الموثوقية', desc: 'المحترفون يعتمدون علينا لأننا نفي بوعدنا في كل مرة — في الموعد المحدد وبالجودة المتوقعة.' },
            { num: '03', title: 'الابتكار', desc: 'نواصل تطوير منتجاتنا وآلاتنا لتلبية متطلبات السوق المتغيرة وتجاوز توقعات عملائنا.' },
            { num: '04', title: 'الشراكة', desc: 'نعامل كل عميل كشريك استراتيجي — ننمو معه ونوفر له الدعم الكامل على المدى الطويل.' },
          ].map(v => (
            <div key={v.num} className={styles.valueCard}>
              <div className={styles.valueNum}>{v.num}</div>
              <div className={styles.valueTitle}>{v.title}</div>
              <div className={styles.valueDesc}>{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.branchesSection}>
        <div className={styles.sectionTag}>فروعنا</div>
        <h2>فرعان. فريق واحد.</h2>
        <div className={styles.branchGrid}>
          <div className={styles.branchCard}>
            <div className={styles.branchNum}>01</div>
            <div className={styles.branchTitle}>المملكة العربية السعودية</div>
            <div className={styles.branchDesc}>مبنى 4559، شارع الرفيعة، حي المسفلة، الرياض 14528</div>
            <a href="tel:+966534944752" className={styles.branchContact}>+966 53 494 4752</a>
            <a href="https://maps.app.goo.gl/f9gh1YD8fTQtaEFw6" target="_blank" rel="noopener noreferrer" className={styles.branchLink}>الاتجاهات ←</a>
          </div>
          <div className={styles.branchCard}>
            <div className={styles.branchNum}>02</div>
            <div className={styles.branchTitle}>لبنان</div>
            <div className={styles.branchDesc}>جبل لبنان، لبنان</div>
            <a href="tel:+96181637675" className={styles.branchContact}>+961 81 637 675</a>
          </div>
        </div>
      </section>

      <div className={styles.ctaBanner}>
        <div><h2>هل تريد العمل معنا؟</h2><p>تواصل مع فريقنا للحصول على عروض الأسعار والدعم الفني.</p></div>
        <Link href="/ar/contact" className={styles.btnDark}>تواصل معنا ←</Link>
      </div>
      <Footer />
    </>
  )
}
