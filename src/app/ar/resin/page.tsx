import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata = { title: 'الراتنج الصناعي — بولي فيكس' }

const resinTypes = [
  { num: '01', name: 'راتنج البوليستر', desc: 'الراتنج الأكثر استخداماً في التطبيقات الصناعية والبناء. متانة ممتازة، جفاف سريع، وقيمة استثنائية للاستخدام الكثيف.', uses: ['إصلاح هياكل السيارات', 'المركبات المركّبة للبناء', 'هياكل القوارب', 'القوالب الصناعية'] },
  { num: '02', name: 'راتنج الإيبوكسي', desc: 'راتنج عالي الجودة بتصاق فائق، مقاومة كيميائية، ومتانة ميكانيكية. الخيار الأمثل للتطبيقات الهيكلية الصعبة.', uses: ['الربط الهيكلي', 'طلاء الأرضيات', 'البحرية والفضاء', 'الإلكترونيات والقوالب'] },
  { num: '03', name: 'راتنج الفينيل إستر', desc: 'يجمع بين أفضل خصائص البوليستر والإيبوكسي — مقاومة استثنائية للتآكل والمتانة للبيئات الأكثر تطلباً.', uses: ['خزانات المواد الكيميائية', 'الأنابيب والأوعية', 'الهياكل البحرية', 'البيئات المسببة للتآكل'] },
  { num: '04', name: 'الجيل كوت', desc: 'الطبقة النهائية التي تمنح سطحاً ناعماً ولامعاً مع مقاومة للأشعة فوق البنفسجية والماء. ضروري للمركبات البحرية والسيارات والزخارف.', uses: ['هياكل القوارب والأسطح', 'ألواح السيارات', 'أحواض السباحة', 'الأسطح الزخرفية'] },
]

export default function ArResinPage() {
  return (
    <>
      <Navbar />
      <section className={styles.hero} style={{ backgroundImage: 'none' }}>
        <div className={styles.heroBg} style={{ backgroundImage: 'url(/resin-hero.png)' }} />
        <div className={styles.heroGradient} />
        <div className={styles.heroTag}>03 — خدمة</div>
        <h1 className={styles.heroH1}>الراتنج<br /><span>الصناعي.</span></h1>
        <p className={styles.heroSub}>بوليستر، إيبوكسي، فينيل إستر وجيل كوت — يُورَّد بالكيلوغرام أو البرميل أو الطن. للجملة والمفرد للمصانع وورش العمل والبنّائين في جميع أنحاء المنطقة.</p>
        <div className={styles.heroCtas}>
          <a href="#quote" className={styles.btnPrimary}>اطلب عرض سعر</a>
          <a href="#types" className={styles.btnOutline}>أنواع الراتنج</a>
        </div>
      </section>

      <section className={styles.typesSection} id="types">
        <div className={styles.sectionTag}>ما نورده</div>
        <h2>أربعة أنواع. كل التطبيقات.</h2>
        <div className={styles.featGrid}>
          {resinTypes.map(r => (
            <div key={r.num} className={styles.typeCard}>
              <div className={styles.typeNum}>{r.num}</div>
              <div className={styles.typeName}>{r.name}</div>
              <div className={styles.typeDesc}>{r.desc}</div>
              <div className={styles.typeUses}>
                {r.uses.map(u => (
                  <div key={u} className={styles.typeUse}><span className={styles.typeUseDot} />{u}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.formatSection}>
        <div className={styles.sectionTag}>أشكال التوريد</div>
        <h2>بالكيلو، البرميل، أو الطن.</h2>
        <div className={styles.formatGrid}>
          {[
            { num: '01', label: 'بالكيلوغرام', desc: 'كميات صغيرة لورش العمل والإصلاحات وعملاء التجزئة. يسري عليها الحد الأدنى للطلب.' },
            { num: '02', label: 'بالبرميل', desc: 'براميل صناعية قياسية للاستخدام الإنتاجي المنتظم. الشكل الأكثر شيوعاً للورش والمصانع.' },
            { num: '03', label: 'بالطن', desc: 'أسعار جملة للمصنّعين وعمليات التوزيع ذات الحجم الكبير. أفضل سعر لكل كيلوغرام.' },
          ].map(f => (
            <div key={f.num} className={styles.formatCard}>
              <div className={styles.formatNum}>{f.num}</div>
              <div className={styles.formatLabel}>{f.label}</div>
              <div className={styles.formatDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.industriesSection}>
        <div className={styles.sectionTag}>من نخدم</div>
        <h2>القطاعات التي نخدمها.</h2>
        <div className={styles.industriesGrid}>
          {[
            { num: '01', title: 'السيارات', desc: 'إصلاح الهياكل، تصنيع الألواح، وقطع المركبات المركّبة لورش العمل الإنتاجية.' },
            { num: '02', title: 'البناء', desc: 'المركبات الهيكلية، أنظمة الأرضيات، ألواح الكسوة، وتطبيقات العزل المائي.' },
            { num: '03', title: 'بناء القوارب', desc: 'طبق الهياكل، تشييد الأسطح، وإصلاح البحرية — أصناف مقاومة للمياه المالحة متوفرة.' },
            { num: '04', title: 'الحرف والتصميم', desc: 'الفن والنحت والأثاث والصب الزخرفي للمصممين وورش الحرفيين.' },
            { num: '05', title: 'الصناعة', desc: 'صنع القوالب، التجهيزات، الخزانات، الأنابيب، والتصنيع المركّب المخصص.' },
            { num: '06', title: 'الورش والمصنّعون', desc: 'التصنيع متعدد الأغراض، الإصلاحات، والعمل المركّب المخصص.' },
          ].map(i => (
            <div key={i.num} className={styles.industryCard}>
              <div className={styles.industryNum}>{i.num}</div>
              <div className={styles.industryTitle}>{i.title}</div>
              <div className={styles.industryDesc}>{i.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.quoteSection} id="quote">
        <div className={styles.quoteInner}>
          <div className={styles.quoteLeft}>
            <div className={styles.sectionTagLight}>اطلب عرض سعر</div>
            <h2>اطلب الراتنج<br />الذي تحتاجه.</h2>
            <p>حدد نوع الراتنج والكمية. سنرد خلال 24 ساعة بالأسعار وتوافر المخزون.</p>
            <div className={styles.quoteContact}>
              <div className={styles.quoteContactItem}><span className={styles.quoteContactLabel}>واتساب</span><a href="https://wa.me/966534944752" target="_blank" rel="noopener noreferrer">+966 53 494 4752</a></div>
              <div className={styles.quoteContactItem}><span className={styles.quoteContactLabel}>البريد الإلكتروني</span><a href="mailto:sales@polyfixglobal.com">sales@polyfixglobal.com</a></div>
            </div>
          </div>
          <div className={styles.quoteForm}>
            <p className={styles.formNote}>للاستفسار عن أنواع الراتنج والأسعار والتوافر، تواصل معنا عبر واتساب أو من خلال <Link href="/ar/contact">نموذج التواصل</Link>.</p>
            <Link href="/ar/contact" className={styles.submit}>انتقل إلى نموذج التواصل ←</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
