import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata = { title: 'صواميل الإحكام — بولي فيكس' }

const sealantTypes = [
  { num: '01', name: 'مانع تسرب سيليكون RTV', desc: 'سيليكون متخثر في درجة الحرارة العادية — مرن، مقاوم للحرارة، ومانع للماء. مانع التسرب متعدد الاستخدامات للسيارات والصناعة.', uses: ['أغطية المحركات وأحواض الزيت', 'متشعبات العادم', 'أنظمة التبريد', 'الإحكام العام'] },
  { num: '02', name: 'صانع الحشوة اللاهوائية', desc: 'يتصلب في غياب الهواء بين الأسطح المعدنية المتقاربة. يخلق إحكاماً صلباً مقاوماً للمواد الكيميائية مثالياً للوصلات المشغولة بدقة.', uses: ['الوصلات المعدنية المتصلة', 'علب التروس', 'أجسام المضخات', 'الآلات الصناعية'] },
  { num: '03', name: 'الحشوة المكوَّنة في الموقع', desc: 'يُطبَّق مباشرة على الأسطح المتلاصقة لتكوين حشوة دقيقة في الموقع. يُلغي الحاجة إلى حشوات مقطوعة مسبقاً في بيئات الإنتاج.', uses: ['خطوط الإنتاج الضخمة', 'مجمّعات المحركات', 'علب ناقل الحركة', 'تطبيقات المصنّع الأصلي'] },
  { num: '04', name: 'مانع تسرب الخيوط', desc: 'يُحكم ويقفل توصيلات الأنابيب الملولبة ضد تسرب السوائل والغازات. جفاف سريع، مقاوم للضغط، وسهل الفك.', uses: ['تركيبات الأنابيب', 'الأنظمة الهيدروليكية', 'توصيلات السباكة', 'خطوط الغاز'] },
]

export default function ArGasketPage() {
  return (
    <>
      <Navbar />
      <section className={styles.hero} style={{ backgroundImage: 'none' }}>
        <div className={styles.heroBg} style={{ backgroundImage: 'url(/gasket-hero.png)' }} />
        <div className={styles.heroGradient} />
        <div className={styles.heroTag}>04 — منتج</div>
        <h1 className={styles.heroH1}>صواميل<br /><span>الإحكام.</span></h1>
        <p className={styles.heroSub}>أربعة أنواع احترافية من موانع التسرب. علامة تجارية موثوقة واحدة. من محركات السيارات إلى الآلات الصناعية — موانع التسرب من بولي فيكس مبنية لتصمد.</p>
        <div className={styles.heroCtas}>
          <a href="#quote" className={styles.btnPrimary}>اطلب عرض سعر</a>
          <a href="#types" className={styles.btnOutline}>أنواع موانع التسرب</a>
        </div>
      </section>

      <section className={styles.typesSection} id="types">
        <div className={styles.sectionTag}>ما نورده</div>
        <h2>أربعة أنواع. كل التطبيقات.</h2>
        <div className={styles.featGrid}>
          {sealantTypes.map(r => (
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

      <section className={styles.featuresSection}>
        <div className={styles.sectionTag}>لماذا بولي فيكس</div>
        <h2>مبني ليصمد. مبني ليدوم.</h2>
        <div className={styles.featGrid}>
          {[
            { num: '01', title: 'مقاومة الحرارة العالية', desc: 'صُمِّمت موانع التسرب لتتحمل الحرارة الشديدة — مثالية للمحركات وأنظمة العادم والمعدات الصناعية.' },
            { num: '02', title: 'مانع تسرب كامل', desc: 'يخلق إحكاماً دائماً ضد الماء والزيت وسائل التبريد ومعظم المواد الكيميائية.' },
            { num: '03', title: 'جفاف سريع', desc: 'جفاف سطحي سريع يتيح إعادة التجميع بسرعة. جفاف كامل خلال 24 ساعة في الظروف الاعتيادية.' },
            { num: '04', title: 'مقاوم للاهتزاز', desc: 'التركيبات المرنة تمتص الاهتزاز والحركة — يبقى الإحكام محكماً حتى تحت الضغط الميكانيكي الثقيل.' },
            { num: '05', title: 'سهولة التطبيق', desc: 'شكل أنبوب لتطبيق نظيف ودقيق. لا خلط مطلوب — يُطبَّق مباشرة من الأنبوب.' },
            { num: '06', title: 'جودة بولي فيكس', desc: 'مُصنَّع وفق نفس معايير الجودة الصارمة لمعجون البوليستر الرائد. مجرّب وموثوق به من المحترفين.' },
          ].map(f => (
            <div key={f.num} className={styles.featCard}>
              <div className={styles.featNum}>{f.num}</div>
              <div className={styles.featTitle}>{f.title}</div>
              <div className={styles.featDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.formatSection}>
        <div className={styles.sectionTag}>شكل التوريد</div>
        <h2>متوفر في أنابيب.</h2>
        <div className={styles.formatGrid}>
          {[
            { num: '01', label: 'أنابيب مفردة', desc: 'أنابيب فردية للورش والميكانيكيين وعملاء التجزئة. مثالية للاستخدام اليومي.' },
            { num: '02', label: 'كراتين بالجملة', desc: 'طلبات بالكرتون للموزعين والورش ذات الحجم الكبير والمتاجر. تواصل معنا لأسعار الجملة.' },
            { num: '03', label: 'توريد للمصانع', desc: 'توريد كبير الحجم لخطوط الإنتاج وعمليات الصيانة الصناعية. تغليف وعلامات تجارية مخصصة متاحة.' },
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
            { num: '01', title: 'السيارات', desc: 'إعادة بناء المحركات، إحكام علب التروس، أنظمة العادم، والاستخدام الكامل في الورش.' },
            { num: '02', title: 'الآلات الصناعية', desc: 'المضخات والضواغط والأنظمة الهيدروليكية وصيانة المعدات الثقيلة.' },
            { num: '03', title: 'الورش والكراجات', desc: 'استبدال الحشوات اليومي والإحكام للميكانيكيين المحترفين.' },
            { num: '04', title: 'البناء', desc: 'توصيلات الأنابيب والوصلات الهيكلية وتطبيقات العزل المائي.' },
            { num: '05', title: 'المركبات الثقيلة والأساطيل', desc: 'الشاحنات والحافلات والمعدات الزراعية وصيانة المركبات التجارية.' },
            { num: '06', title: 'السباكة والتكييف', desc: 'إحكام الخيوط ووصلات الأنابيب وتوصيلات أنظمة التكييف.' },
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
            <h2>أخبرنا بما<br />تحتاجه.</h2>
            <p>حدد نوع مانع التسرب والكمية. سنرد خلال 24 ساعة بالأسعار والتوافر.</p>
            <div className={styles.quoteContact}>
              <div className={styles.quoteContactItem}><span className={styles.quoteContactLabel}>واتساب</span><a href="https://wa.me/966534944752" target="_blank" rel="noopener noreferrer">+966 53 494 4752</a></div>
              <div className={styles.quoteContactItem}><span className={styles.quoteContactLabel}>البريد الإلكتروني</span><a href="mailto:Info@polyfixglobal.com">Info@polyfixglobal.com</a></div>
            </div>
          </div>
          <div className={styles.quoteForm}>
            <p className={styles.formNote}>للاستفسار عن أنواع موانع التسرب والأسعار والتوافر، تواصل معنا عبر واتساب أو من خلال <Link href="/ar/contact">نموذج التواصل</Link>.</p>
            <Link href="/ar/contact" className={styles.submit}>انتقل إلى نموذج التواصل ←</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
