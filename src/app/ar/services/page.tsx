import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata = { title: 'خدماتنا — بولي فيكس' }

const services = [
  { num: '01', title: 'الآلات الصناعية', desc: 'نصمم وننتج آلات تجارية ثقيلة مصممة خصيصاً لبيئات الإنتاج الجادة — مُهندسة وفق مواصفاتك الدقيقة ومبنية لتؤدي على المستوى المطلوب.', img: '/hero.jpg', href: '/ar/machinery', features: ['تصميم مخصص بالكامل', 'هيكل ثقيل المتانة', 'أنظمة تحكم ذكية', 'دعم ما بعد البيع'] },
  { num: '02', title: 'معجون البوليستر للاستخدام العام', desc: 'منتجنا الرائد — معجون بوليستر احترافي للمعادن والخشب والبناء. موثوق به من ورش السيارات والمصنّعين والبنّائين في جميع أنحاء الشرق الأوسط.', img: '/putty-hero.png', href: '/ar/putty', features: ['التصاق فائق', 'سهولة التطبيق', 'سنفرة مثالية', 'المملكة العربية السعودية ولبنان'] },
  { num: '03', title: 'الراتنج الصناعي', desc: 'بوليستر، إيبوكسي، فينيل إستر وجيل كوت — يُورَّد بالكيلوغرام أو البرميل أو الطن. للجملة والمفرد للمصانع وورش العمل والبنّائين.', img: '/resin-hero.png', href: '/ar/resin', features: ['4 أنواع من الراتنج', 'كيلو وبرميل وطن', 'جملة ومفرد', 'توفر سريع'] },
  { num: '04', title: 'صواميل الإحكام', desc: 'أربعة أنواع احترافية تحت علامة بولي فيكس — سيليكون RTV، لاصق لاهوائي، حشوة مكوَّنة في الموقع، ومانع تسرب للخيوط. متوفر للجملة والمفرد.', img: '/gasket-hero.png', href: '/ar/gasket', features: ['4 أنواع من الإحكام', 'مقاومة للحرارة العالية', 'مانع تسرب كامل', 'علامة بولي فيكس'] },
]

export default function ArServicesPage() {
  return (
    <>
      <Navbar />
      <div className={styles.pageHero}>
        <div className={styles.sectionTag}>ما نقدمه</div>
        <h1>خدماتنا<span>.</span></h1>
        <p>من الآلات الصناعية المخصصة إلى المنتجات الكيميائية الاحترافية — أربع خدمات متكاملة، شريك موثوق واحد.</p>
      </div>
      <section className={styles.servicesList}>
        {services.map((s, i) => (
          <div key={s.num} className={`${styles.serviceRow} ${i % 2 === 1 ? styles.serviceRowAlt : ''}`}>
            <div className={styles.serviceImg}><img src={s.img} alt={s.title} /></div>
            <div className={styles.serviceContent}>
              <div className={styles.serviceNum}>{s.num}</div>
              <h2>{s.title}</h2>
              <p>{s.desc}</p>
              <div className={styles.serviceFeatures}>
                {s.features.map(f => (
                  <div key={f} className={styles.serviceFeature}><span className={styles.dot} />{f}</div>
                ))}
              </div>
              <Link href={s.href} className={styles.btnPrimary}>اعرف أكثر ←</Link>
            </div>
          </div>
        ))}
      </section>
      <div className={styles.ctaBanner}>
        <div><h2>هل تحتاج إلى مساعدة في الاختيار؟</h2><p>تواصل مع فريقنا وسنرشدك إلى الحل المناسب.</p></div>
        <Link href="/ar/contact" className={styles.btnDark}>اتصل بنا ←</Link>
      </div>
      <Footer />
    </>
  )
}
