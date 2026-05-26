'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

function useCountUp(target: number, trigger: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let current = 0
    const step = Math.ceil(target / 40)
    const timer = setInterval(() => {
      current = Math.min(current + step, target)
      setCount(current)
      if (current >= target) clearInterval(timer)
    }, 30)
    return () => clearInterval(timer)
  }, [trigger, target])
  return count
}

export default function ArHome() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStatsVisible(true); obs.disconnect() }
    }, { threshold: 0.5 })
    if (statsRef.current) obs.observe(statsRef.current)
    return () => obs.disconnect()
  }, [])

  const s1 = useCountUp(15, statsVisible)
  const s4 = useCountUp(100, statsVisible)

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGradient} />
        <div className={styles.heroTag}>الآلات الصناعية والمنتجات الكيميائية</div>
        <h1 className={styles.heroH1}>
          هندسة صناعية<br />مدعومة بـ <span>بولي فيكس.</span>
        </h1>
        <p className={styles.heroSub}>
          شركة رائدة وذات خبرة واسعة في تصنيع الآلات الصناعية والتكنولوجية — ومصنّع موثوق لمعجون البوليستر الاحترافي والراتنج وصواميل الإحكام للسيارات والبناء والتطبيقات الصناعية في جميع أنحاء الشرق الأوسط.
        </p>
        <div className={styles.heroCtas}>
          <Link href="/ar/services" className={styles.btnPrimary}>استكشف خدماتنا</Link>
          <Link href="/ar/contact" className={styles.btnOutline}>احصل على عرض سعر</Link>
        </div>
      </section>

      {/* STATS */}
      <div className={styles.stats} ref={statsRef}>
        <div className={styles.statItem}>
          <div className={styles.statNum}>{s1}<span>+</span></div>
          <div className={styles.statLabel}>سنة خبرة في التصنيع</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNum}>{s4}<span>%</span></div>
          <div className={styles.statLabel}>جودة احترافية</div>
        </div>
      </div>

      {/* ABOUT */}
      <section className={styles.about}>
        <div className={styles.aboutText}>
          <div className={styles.sectionTag}>من نحن</div>
          <h2>مبنيون على نطاق صناعي.</h2>
          <p>بولي فيكس شركة رائدة في تصنيع الآلات الصناعية والتكنولوجية، ومنتج موثوق لمعجون البوليستر الاحترافي والراتنج وصواميل الإحكام.</p>
          <p>من خطوط الخلط المصممة خصيصاً وأنظمة التعبئة إلى منتجات الإصلاح عالية الأداء، نقدم المعدات والمواد التي تحافظ على استمرارية الإنتاج. لدينا فرعان: الرياض، المملكة العربية السعودية وجبل لبنان، لبنان.</p>
        </div>
        <div className={styles.pillars}>
          {[
            { num: '01', title: 'الآلات الصناعية', desc: 'أنظمة صناعية وتكنولوجية مصممة وفق المواصفات المطلوبة' },
            { num: '02', title: 'معجون البوليستر', desc: 'معجون بوليستر احترافي للاستخدام العام على المعادن والخشب والبناء' },
            { num: '03', title: 'الراتنج الصناعي', desc: 'بوليستر، إيبوكسي، فينيل إستر وجيل كوت — بالكيلو أو البرميل أو الطن' },
            { num: '04', title: 'صواميل الإحكام', desc: 'أربعة أنواع احترافية تحت علامة بولي فيكس — بالجملة والمفرد' },
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

      {/* CAPABILITIES */}
      <section className={styles.capabilities} id="services">
        <div className={styles.sectionTag}>ما نقدمه</div>
        <h2>هندسة على امتداد الخط.</h2>
        <p className={styles.capSub}>أربع خدمات متكاملة، شريك إنتاج واحد موثوق.</p>
        <div className={styles.capGrid}>
          {[
            { num: '01', title: 'الآلات الصناعية', desc: 'نصمم وننتج آلات تجارية ثقيلة مصممة خصيصاً لبيئات الإنتاج الجادة — مُهندسة وفق مواصفاتك الدقيقة ومبنية لتؤدي على المستوى المطلوب.', img: '/hero.jpg', href: '/ar/machinery' },
            { num: '02', title: 'معجون البوليستر للاستخدام العام', desc: 'منتجنا الرائد — معجون بوليستر احترافي للمعادن والخشب والبناء. موثوق به من قِبل ورش السيارات والمصنّعين والبنّائين في جميع أنحاء الشرق الأوسط.', img: '/putty-hero.png', href: '/ar/putty' },
            { num: '03', title: 'الراتنج الصناعي', desc: 'بوليستر، إيبوكسي، فينيل إستر وجيل كوت — يُورَّد بالكيلوغرام أو البرميل أو الطن. للجملة والمفرد للمصانع وورش العمل والبنّائين.', img: '/resin-hero.png', href: '/ar/resin' },
            { num: '04', title: 'صواميل الإحكام', desc: 'أربعة أنواع احترافية تحت علامة بولي فيكس — سيليكون RTV، لاصق لاهوائي، حشوة مكوَّنة في الموقع، ومانع تسرب للخيوط. متوفر للجملة والمفرد.', img: '/gasket-hero.png', href: '/ar/gasket' },
          ].map(c => (
            <Link key={c.num} href={c.href} className={styles.capCard}>
              <img src={c.img} alt={c.title} className={styles.capImg} />
              <div className={styles.capBody}>
                <div className={styles.capNum}>{c.num} — خدمة</div>
                <div className={styles.capTitle}>{c.title}</div>
                <div className={styles.capDesc}>{c.desc}</div>
                <div className={styles.capCta}>اعرف أكثر ←</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <section className={styles.marqueeSection}>
        <div className={styles.sectionTag} style={{ justifyContent: 'center' }}>متوفر وموثوق في</div>
        <h2>نطاق توزيعنا</h2>
        <div className={styles.marqueeWrap}>
          <div className={styles.marqueeTrack}>
            {['المملكة العربية السعودية', 'الإمارات', 'الكويت', 'قطر', 'البحرين', 'عُمان', 'لبنان', 'الأردن',
              'المملكة العربية السعودية', 'الإمارات', 'الكويت', 'قطر', 'البحرين', 'عُمان', 'لبنان', 'الأردن'].map((c, i) => (
              <div key={i} className={styles.marqueeItem}>{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.features}>
        <div className={styles.sectionTag}>مزايانا الأساسية</div>
        <h2>مصنوع للمحترفين</h2>
        <div className={styles.featGrid}>
          {[
            { icon: '⚡', title: 'التصاق فائق', desc: 'يلتصق بقوة بالفولاذ دون الحاجة إلى طلاء أساسي في التطبيقات القياسية.' },
            { icon: '🎯', title: 'سهولة التطبيق', desc: 'قوام سلس قابل للمد. نسبة تغطية عالية — كل كيلوغرام يمتد لمسافة أبعد.' },
            { icon: '✦', title: 'سنفرة مثالية', desc: 'يُسنفر بنعومة دون انسداد ورق الصنفرة. سطح مثالي للطلاء الأساسي والخارجي.' },
            { icon: '◎', title: 'قاعدة محايدة', desc: 'بدون تصبيغ — يقبل أي لون طلاء خارجي دون نزيف لوني.' },
            { icon: '🏭', title: 'تركيبة احترافية', desc: 'مصممة لورش الطلاء الإنتاجية وصانعي المعادن ومحترفي البناء.' },
            { icon: '⏱', title: 'جفاف سريع', desc: 'وقت عمل محكوم مع تصلب سريع — يبقي سير عملك متواصلاً.' },
          ].map(f => (
            <div key={f.title} className={styles.featCard}>
              <div className={styles.featIcon}>{f.icon}</div>
              <div className={styles.featTitle}>{f.title}</div>
              <div className={styles.featDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonials}>
        <div className={styles.sectionTag}>ماذا يقول المحترفون</div>
        <h2>موثوق به من قِبل الخبراء</h2>
        <div className={styles.testGrid}>
          {[
            { quote: 'تحولنا إلى بولي فيكس في جميع خلايا العمل لدينا. قوة الالتصاق في مستوى مختلف تماماً — ويُسنفر بشكل رائع في كل مرة.', name: 'خالد ر.', role: 'مالك، ورشة طلاء سيارات فاخرة' },
            { quote: 'في مواقع البناء تحتاج منتجاً يعمل من المرة الأولى. بولي فيكس لم يخذلنا قط — تغطية ممتازة وتصلب موثوق.', name: 'يوسف م.', role: 'مدير موقع، شركة هياكل فولاذية' },
            { quote: 'كصانع معادن، جودة السطح هي كل شيء. بولي فيكس يمنحنا القاعدة المحايدة التي نحتاجها — لا نزيف لوني، لا مفاجآت تحت الطلاء.', name: 'أميرة س.', role: 'كبيرة الصانعين، ميتال ووركس برو' },
          ].map(t => (
            <div key={t.name} className={styles.testCard}>
              <div className={styles.testQuote}>"</div>
              <p className={styles.testText}>{t.quote}</p>
              <div className={styles.testName}>{t.name}</div>
              <div className={styles.testRole}>{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
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
