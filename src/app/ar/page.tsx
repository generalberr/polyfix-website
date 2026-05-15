import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata = { title: 'بولي فيكس — معجون بوليستر احترافي للمعادن' }

export default function ArPage() {
  return (
    <>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGradient} />
        <div className={styles.heroTag}>الآلات الصناعية ومعجون البوليستر</div>
        <h1 className={styles.heroH1}>هندسة صناعية<br />مدعومة بـ <span>بولي فيكس.</span></h1>
        <p className={styles.heroSub}>شركة رائدة وذات خبرة واسعة في تصنيع الآلات الصناعية والتكنولوجية، وجهة موثوقة لتصنيع معجون البوليستر الاحترافي للسيارات والبناء والخشب وتطبيقات درجات الحرارة العالية.</p>
        <div className={styles.heroCtas}>
          <Link href="/ar/contact" className={styles.btnPrimary}>عرض المنتج</Link>
          <Link href="/ar/contact" className={styles.btnOutline}>طلب الجملة</Link>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.aboutText}>
          <div className={styles.sectionTag}>من نحن</div>
          <h2>مبنيون على نطاق صناعي.</h2>
          <p>بولي فيكس شركة رائدة في تصنيع الآلات الصناعية والتكنولوجية، ومنتج موثوق لمعجون البوليستر الاحترافي.</p>
          <p>من خطوط الخلط المصممة خصيصًا وأنظمة التعبئة إلى منتجات الإصلاح عالية الأداء، نقدم المعدات والمواد التي تحافظ على استمرارية الإنتاج.</p>
        </div>
        <div className={styles.pillars}>
          {[
            { num: '01', title: 'الآلات', desc: 'أنظمة صناعية وتكنولوجية مصممة وفق المواصفات' },
            { num: '02', title: 'المواد', desc: 'معجون بوليستر احترافي لإصلاح متعدد الأسطح' },
            { num: '03', title: 'تخصيص', desc: 'تركيبات مخصصة وتكوينات خطوط إنتاج مُعدَّلة' },
          ].map(p => (
            <div key={p.num} className={styles.pillar}>
              <span className={styles.pillarNum}>{p.num}</span>
              <div>
                <div className={styles.pillarTitle}>{p.title}</div>
                <div className={styles.pillarDesc}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.sectionTag}>المزايا الأساسية</div>
        <h2>مصنوع للمحترفين</h2>
        <div className={styles.featGrid}>
          {[
            { icon: '⚡', title: 'التصاق فائق', desc: 'يلتصق بقوة بالفولاذ. لا يحتاج إلى أساس في التطبيقات القياسية.' },
            { icon: '🎯', title: 'سهولة التطبيق', desc: 'قوام سلس قابل للمد. نسبة تغطية عالية — كل كيلوغرام يمتد لمسافة أبعد.' },
            { icon: '✦', title: 'سنفرة مثالية', desc: 'يُسنفر بنعومة دون انسداد الورقة. سطح مثالي للأساس والطلاء الخارجي.' },
            { icon: '◎', title: 'قاعدة محايدة', desc: 'بدون تصبيغ — يقبل أي لون طلاء خارجي دون نزيف لوني.' },
            { icon: '🏭', title: 'تركيبة احترافية', desc: 'مصممة لورش الطلاء الإنتاجية وصناع المعادن ومحترفي البناء.' },
            { icon: '⏱', title: 'جفاف سريع', desc: 'وقت عمل محكوم مع تصلب سريع — يبقي سير عملك متواصلًا.' },
          ].map(f => (
            <div key={f.title} className={styles.featCard}>
              <div className={styles.featIcon}>{f.icon}</div>
              <div className={styles.featTitle}>{f.title}</div>
              <div className={styles.featDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.ctaBanner}>
        <div>
          <h2>هل أنت مستعد للطلب أو الشراكة معنا؟</h2>
          <p>تواصل معنا للحصول على أسعار الجملة أو الدعم الفني أو استفسارات الآلات.</p>
        </div>
        <Link href="/ar/contact" className={styles.btnDark}>احصل على عرض سعر ←</Link>
      </div>

      <Footer />
    </>
  )
}
