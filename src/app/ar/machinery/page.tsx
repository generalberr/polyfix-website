import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata = { title: 'الآلات الصناعية — بولي فيكس' }

const examples = [
  { title: 'آلات الخلط الكبيرة', desc: 'خلاطات صناعية عالية السعة مع محركات قوية، أذرع هيدروليكية، وألواح تحكم رقمية.', img: '/machine-mixing.png' },
  { title: 'آلات التعبئة الآلية', desc: 'أنظمة تعبئة دقيقة للأنابيب والحاويات — حجم تعبئة قابل للبرمجة وتشغيل عالي السرعة.', img: '/machine-filling.png' },
  { title: 'أنظمة الناقل', desc: 'خطوط ناقل مخصصة مصممة لتدفق إنتاجك — مرحلة واحدة أو متعددة مع أنظمة تحكم متكاملة.', img: '/machine-conveyor.png' },
  { title: 'المكابس الهيدروليكية', desc: 'مكابس هيدروليكية ثقيلة للتشكيل والضغط — مبنية وفق الحمولة ومواصفات الدورة المطلوبة.', img: '/machine-hydraulic.png' },
  { title: 'أنظمة خطوط الإنتاج', desc: 'تصميم وتصنيع خط إنتاج متكامل — من إدخال المواد الخام إلى إخراج المنتج النهائي.', img: '/machine-production.png' },
  { title: 'أي آلة مخصصة', desc: 'إذا استطعت وصفها، نستطيع بناءها. مهندسونا يزدهرون في التحديات الفريدة والمعقدة.', img: '/machine-custom.png' },
]

export default function ArMachineryPage() {
  return (
    <>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGradient} />
        <div className={styles.heroTag}>01 — خدمة</div>
        <h1 className={styles.heroH1}>الآلات<br /><span>الصناعية.</span></h1>
        <p className={styles.heroSub}>من آلات الخلط وخطوط التعبئة إلى المعدات الصناعية المخصصة بالكامل — بولي فيكس تصمم وتبني الآلات التي يحتاجها المحترفون.</p>
        <div className={styles.heroCtas}>
          <a href="#quote" className={styles.btnPrimary}>اطلب عرض سعر</a>
          <a href="#examples" className={styles.btnOutline}>أمثلة على أعمالنا</a>
        </div>
      </section>

      <section className={styles.featSection}>
        <div className={styles.sectionTag}>لماذا تختار بولي فيكس</div>
        <h2>هندسة تؤدي أداءً استثنائياً.</h2>
        <div className={styles.featGrid}>
          {[
            { num: '01', title: 'تصميم مخصص بالكامل', desc: 'لا توجد آلتان متطابقتان. مهندسونا يعملون معك مباشرة لتصميم آلة تناسب عمليتك تماماً.' },
            { num: '02', title: 'هيكل ثقيل المتانة', desc: 'نبني للديمومة. هياكل فولاذية صناعية، محركات عالية العزم، أنظمة هيدروليكية، ومكونات دقيقة للاستخدام المتواصل.' },
            { num: '03', title: 'أنظمة تحكم ذكية', desc: 'كل آلة تأتي بلوحة تحكم كاملة — سرعة ودرجة حرارة وضغط ودورات قابلة للبرمجة.' },
            { num: '04', title: 'اختبار قبل التسليم', desc: 'كل وحدة تُجمَّع وتُختبر وتُعاير في منشأتنا قبل الشحن. تستلم آلة جاهزة للتشغيل فوراً.' },
            { num: '05', title: 'دعم ما بعد البيع', desc: 'فريقنا متاح بعد التسليم للإرشاد، التدريب، الصيانة، وأي دعم فني تحتاجه.' },
            { num: '06', title: 'أي حجم، أي مقياس', desc: 'من الآلات المدمجة إلى خطوط الإنتاج الكبيرة بمحطات متعددة — نوسّع هندستنا لتناسب منشأتك.' },
          ].map(f => (
            <div key={f.num} className={styles.featCard}>
              <div className={styles.featNum}>{f.num}</div>
              <div className={styles.featTitle}>{f.title}</div>
              <div className={styles.featDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.examplesSection} id="examples">
        <div className={styles.sectionTag}>أمثلة على أعمالنا</div>
        <h2>ما نبنيه.</h2>
        <div className={styles.examplesGrid}>
          {examples.map(e => (
            <div key={e.title} className={styles.exampleCard}>
              <div className={styles.exampleImg}><img src={e.img} alt={e.title} /></div>
              <div className={styles.exampleBody}>
                <div className={styles.exampleTitle}>{e.title}</div>
                <div className={styles.exampleDesc}>{e.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.sectionTag}>كيف نعمل</div>
        <h2>عمليتنا.</h2>
        <div className={styles.processGrid}>
          {[
            { num: '01', title: 'الاستشارة', desc: 'نبدأ بفهم عميلياتك ومتطلباتك وقيود المساحة لديك.' },
            { num: '02', title: 'التصميم والهندسة', desc: 'يُعدّ فريقنا المواصفات الفنية الكاملة لموافقتك قبل أي تصنيع.' },
            { num: '03', title: 'التصنيع', desc: 'نبني في منشأتنا باستخدام مواد صناعية عالية الجودة ومتحكم بها جودياً.' },
            { num: '04', title: 'الاختبار والتسليم', desc: 'اختبار شامل، تعيير، ثم تسليم مع دعم التركيب والتدريب.' },
          ].map(p => (
            <div key={p.num} className={styles.processItem}>
              <div className={styles.processNum}>{p.num}</div>
              <div className={styles.processTitle}>{p.title}</div>
              <div className={styles.processDesc}>{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.quoteSection} id="quote">
        <div className={styles.quoteInner}>
          <div className={styles.quoteLeft}>
            <div className={styles.sectionTagLight}>طلب عرض سعر</div>
            <h2>أخبرنا عن<br />مشروعك.</h2>
            <p>صف الآلة أو خط الإنتاج الذي تحتاجه وسنتواصل معك خلال 24 ساعة.</p>
            <div className={styles.quoteContact}>
              <div className={styles.quoteContactItem}><span className={styles.quoteContactLabel}>واتساب</span><a href="https://wa.me/966534944752" target="_blank" rel="noopener noreferrer">+966 53 494 4752</a></div>
              <div className={styles.quoteContactItem}><span className={styles.quoteContactLabel}>البريد الإلكتروني</span><a href="mailto:Info@polyfixglobal.com">Info@polyfixglobal.com</a></div>
            </div>
          </div>
          <div className={styles.quoteForm}>
            <p className={styles.formNote}>للاستفسار عن الآلات والأسعار، تواصل معنا مباشرة عبر واتساب أو البريد الإلكتروني أو من خلال <Link href="/ar/contact">نموذج التواصل</Link>.</p>
            <Link href="/ar/contact" className={styles.submit}>انتقل إلى نموذج التواصل ←</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
