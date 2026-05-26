import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata = { title: 'معجون البوليستر — بولي فيكس' }

const specs = [
  ['نوع المنتج', 'معجون بوليستر للاستخدام العام'],
  ['القاعدة', 'راتنج البوليستر'],
  ['المُصلِّب', 'معجون بيروكسيد ثنائي البنزويل (مشمول في كل علبة)'],
  ['اللون', 'بيج / رمادي'],
  ['الإنهاء', 'قابل للسنفرة / القابلية للطلاء'],
  ['الأحجام المتاحة', '1 كغ / 2 كغ / 3 كغ / 4 كغ'],
  ['استخدام الفرن', 'داخل وخارج الفرن'],
  ['الرصاص والأسبستوس', 'معفى منهما'],
  ['بلد المنشأ', 'المملكة العربية السعودية ولبنان'],
  ['مدة الصلاحية', 'تقريباً 30-36 شهراً (حسب ظروف التخزين)'],
  ['درجة حرارة العمل', '+5°C إلى +35°C'],
]

export default function ArPuttyPage() {
  return (
    <>
      <Navbar />
      <section className={styles.hero} style={{ backgroundImage: 'none' }}>
        <div className={styles.heroBg} style={{ backgroundImage: 'url(/putty-hero.png)' }} />
        <div className={styles.heroGradient} />
        <div className={styles.heroTag}>02 — منتج</div>
        <h1 className={styles.heroH1}>معجون البوليستر<br /><span>للاستخدام العام.</span></h1>
        <p className={styles.heroSub}>معجون البوليستر الاحترافي الموثوق به من قِبل ورش السيارات والمصنّعين والبنّائين في جميع أنحاء الشرق الأوسط. مُصنَّع في المملكة العربية السعودية ولبنان.</p>
        <div className={styles.heroCtas}>
          <a href="#quote" className={styles.btnPrimary}>اطلب عرض سعر بالجملة</a>
          <a href="#specs" className={styles.btnOutline}>عرض المواصفات</a>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '24px', position: 'relative', zIndex: 2, flexDirection: 'row-reverse' }}>
          <span className={styles.badge}>المملكة العربية السعودية ولبنان</span>
          <span className={styles.badge}>معفى من الرصاص والأسبستوس</span>
          <span className={styles.badge}>متوافق مع الفرن</span>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className={styles.sectionTag}>لماذا تختار بولي فيكس</div>
        <h2>مبني للمحترفين.</h2>
        <div className={styles.featGrid}>
          {[
            { num: '01', title: 'التصاق فائق', desc: 'يلتصق بقوة بالفولاذ دون الحاجة إلى طلاء أساسي في التطبيقات القياسية.' },
            { num: '02', title: 'سهولة التطبيق', desc: 'قوام سلس قابل للمد. نسبة تغطية عالية — كل كيلوغرام يمتد لمسافة أبعد.' },
            { num: '03', title: 'سنفرة مثالية', desc: 'يُسنفر بنعومة دون انسداد الورق. سطح مثالي للطلاء الأساسي والخارجي.' },
            { num: '04', title: 'قاعدة محايدة', desc: 'بدون تصبيغ — يقبل أي لون طلاء خارجي دون نزيف لوني.' },
            { num: '05', title: 'متوافق مع الفرن', desc: 'يمكن استخدامه داخل وخارج الفرن لمرونة كاملة في بيئات ورش الطلاء.' },
            { num: '06', title: 'جفاف سريع ومحكوم', desc: 'سرعة التصلب يتحكم بها كمية المُصلِّب المستخدمة — تمنحك وقت العمل الذي تحتاجه.' },
            { num: '07', title: 'معفى من الرصاص والأسبستوس', desc: 'آمن تماماً للاستخدام المهني. معفى من الرصاص والأسبستوس لراحة بالك.' },
            { num: '08', title: 'فرعان', desc: 'مُصنَّع وموزَّع من منشآتنا في المملكة العربية السعودية ولبنان.' },
          ].map(f => (
            <div key={f.num} className={styles.featCard}>
              <div className={styles.featNum}>{f.num}</div>
              <div className={styles.featTitle}>{f.title}</div>
              <div className={styles.featDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.specsSection} id="specs">
        <div className={styles.sectionTag}>المواصفات التقنية</div>
        <h2>جدول المواصفات الكامل.</h2>
        <table className={styles.specsTable}>
          <tbody>
            {specs.map(([k, v]) => (
              <tr key={k}><td>{k}</td><td>{v}</td></tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className={styles.sizesSection}>
        <div className={styles.sectionTag}>الأحجام المتاحة</div>
        <h2>أحجام تناسب كل احتياج.</h2>
        <div className={styles.sizeGrid}>
          {[
            { weight: '1', desc: 'للإصلاحات الصغيرة والورش ذات الاستخدام المنخفض.' },
            { weight: '2', desc: 'الأكثر مبيعاً — يناسب معظم أعمال الطلاء اليومية.' },
            { weight: '3', desc: 'للاستخدام المتوسط إلى الثقيل في ورش الإنتاج.' },
            { weight: '4', desc: 'للورش ذات الإنتاجية العالية وخطوط الإنتاج.' },
          ].map(s => (
            <div key={s.weight} className={styles.sizeCard}>
              <div className={styles.sizeWeight}>{s.weight}</div>
              <span className={styles.sizeUnit}>كيلوغرام</span>
              <div className={styles.sizeDesc}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.sectionTag}>طريقة الاستخدام</div>
        <h2>خطوات التطبيق.</h2>
        <div className={styles.stepsGrid}>
          {[
            { num: '01', title: 'تحضير السطح', desc: 'سنفر منطقة الإصلاح بورق 80 حبة حتى تظهر المعدن الخام. أزل الصدأ والشحوم والزيوت والملوثات. امسح بقماش جاف.' },
            { num: '02', title: 'خلط مع المُصلِّب', desc: 'أضف كمية صغيرة من المُصلِّب المرفق إلى كمية المعجون المطلوبة. اخلط جيداً حتى يتوحد اللون تماماً. المزيد من المُصلِّب = جفاف أسرع.' },
            { num: '03', title: 'تطبيق المعجون', desc: 'افرد المعجون الممزوج على السطح النظيف الجاف باستخدام مطيط مرن. اعمل بسرعة وابنِ طبقات متتالية للإصلاحات الأعمق.' },
            { num: '04', title: 'السنفرة والإنهاء', desc: 'بعد الجفاف، سنفر تدريجياً بورق 80 حبة، ثم 180، ثم 320. القاعدة المحايدة جاهزة تماماً للطلاء الأساسي وأي لون خارجي.' },
          ].map(s => (
            <div key={s.num} className={styles.stepCard}>
              <div className={styles.stepNum}>{s.num}</div>
              <div className={styles.stepTitle}>{s.title}</div>
              <div className={styles.stepDesc}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.quoteSection} id="quote">
        <div className={styles.quoteInner}>
          <div className={styles.quoteLeft}>
            <div className={styles.sectionTagLight}>اطلب عرض سعر</div>
            <h2>سعر الجملة<br />متاح.</h2>
            <p>هل أنت موزع أو ورشة أو تحتاج كميات كبيرة؟ تواصل معنا للحصول على أسعار الجملة والتوفر.</p>
            <div className={styles.quoteContact}>
              <div className={styles.quoteContactItem}><span className={styles.quoteContactLabel}>واتساب</span><a href="https://wa.me/966534944752" target="_blank" rel="noopener noreferrer">+966 53 494 4752</a></div>
              <div className={styles.quoteContactItem}><span className={styles.quoteContactLabel}>البريد الإلكتروني</span><a href="mailto:sales@polyfixglobal.com">sales@polyfixglobal.com</a></div>
            </div>
          </div>
          <div className={styles.quoteForm}>
            <p className={styles.formNote}>للحصول على أسعار الجملة والتوفر، تواصل معنا عبر واتساب أو من خلال <Link href="/ar/contact">نموذج التواصل</Link>.</p>
            <Link href="/ar/contact" className={styles.submit}>انتقل إلى نموذج التواصل ←</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
