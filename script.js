const translations = {
  ar: {
    nav_about:"نبذة", nav_projects:"المشاريع", nav_services:"الخدمات", nav_experience:"الخبرة", nav_contact:"تواصل",
    available:"متاح لأعمال الفريلانس والعقود",
    hero_1:"أبني وأطوّر", hero_2:"لتطبيقات الأعمال.",
    hero_text:"مهندس برمجيات أركز على أنظمة الإنتاج، APIs، SQL Server، تحسين الأداء، التقارير والنشر الموثوق.",
    view_work:"شاهد أعمالي", hire_me:"اعمل معي",
    stat_perf:"تحسين حقيقي في أداء مسار عمل", stat_stack:"واجهة، باك إند، قاعدة بيانات ونشر", stat_prod:"خبرة عملية على أنظمة أعمال حقيقية", stat_lang:"خبرة في تطبيقات ثنائية اللغة",
    about_kicker:"نبذة", about_title:"أفضل ما أقدمه يظهر عندما تلتقي البرمجة بعمليات العمل الحقيقية.",
    about_p1:"أنا حمزة سليم، خريج هندسة برمجيات ومتخصص في .NET وAngular وSQL Server. أعمل على صيانة وتطوير أنظمة أعمال إنتاجية حقيقية وليس مجرد تطبيقات تجريبية.",
    about_p2:"أستطيع الدخول إلى قاعدة كود موجودة، وتتبع المشكلة عبر الواجهة والـAPI وقاعدة البيانات، ثم تقديم إصلاح مركز بدون إعادة كتابة غير ضرورية.",
    about_p3:"أتعامل كذلك مع النشر ومشاكل الإنتاج، بما يشمل Angular builds و.NET releases وإعداد IIS ومشاكل قواعد البيانات.",
    projects_kicker:"أعمال مختارة", projects_title:"دراسات حالة من تطوير موجّه للإنتاج", projects_note:"تم تعميم بعض تفاصيل المشاريع عمدًا لحماية خصوصية العملاء والشركات.",
    p1_title:"نظام مؤسسي لإدارة المخزون والأصول", p1_desc:"المساهمة في نظام إنتاجي كبير يشمل الأرصدة والمواقع وعهد الموظفين والحركات والجرد ولوحات المعلومات والتقارير والصلاحيات.",
    p1_b1:"تطوير وصيانة صفحات Angular ومسارات أعمال قابلة لإعادة الاستخدام.", p1_b2:"تطوير وربط ASP.NET Web APIs وإجراءات SQL Server.", p1_b3:"تنفيذ تقارير Excel/PDF وتجربة عربية/إنجليزية.", p1_b4:"العمل على المصادقة والصلاحيات والكاش والنشر.",
    p2_title:"تحسين أداء الباك إند", p2_desc:"تحليل عملية أعمال بطيئة كانت تستغرق قرابة 3 دقائق وخفض زمن تنفيذها إلى حوالي 25 ثانية.", p2_b1:"تتبع تكرار عمليات قاعدة البيانات داخل المسار.", p2_b2:"تقليل عمليات الحفظ والاستدعاءات غير الضرورية.", p2_b3:"التحقق من أن التحسين يحافظ على سلوك العمل المطلوب.",
    p3_title:"مسار عمل موبايل هجين مع RFID", p3_desc:"العمل على عميل موبايل هجين يدمج إمكانات الجهاز الأصلية مع Angular WebView لعمليات المخزون والأصول.", p3_b1:"دمج قراءة RFID/Bluetooth في مسارات العمل.", p3_b2:"ربط تفاعلات الموبايل مع الباك إند وتطبيق الويب.", p3_b3:"دعم الإشعارات الفورية وتكامل العمليات.",
    p4_title:"خدمة إشعارات بريد إلكتروني", p4_desc:"بناء وظائف إشعارات للأحداث التشغيلية باستخدام خدمة .NET مستقلة وإرسال SMTP قابل للإعداد.", p4_b1:"إنشاء قوالب قابلة لإعادة الاستخدام للأحداث.", p4_b2:"التعامل مع إعداد SMTP ومشاكل TLS/الاتصال والتكامل.", p4_b3:"دعم محتوى عربي ورسائل تشغيلية منظمة.",
    services_kicker:"خدمات فريلانس", services_title:"ما الذي أستطيع مساعدتك في تسليمه",
    s1_title:"إصلاح الأخطاء والصيانة", s1_desc:"Debug لتطبيقات Angular/.NET الموجودة وتتبع الأخطاء عبر الواجهة والـAPI وقاعدة البيانات.",
    s2_title:"REST APIs والتكاملات", s2_desc:"بناء وتوسعة ASP.NET APIs وربط الخدمات الخارجية ومسارات الواجهة.",
    s3_title:"تحسين SQL Server", s3_desc:"تحسين الاستعلامات والإجراءات المخزنة وأنماط الوصول للبيانات والعمليات البطيئة.",
    s4_title:"ميزات Angular", s4_desc:"بناء صفحات كثيفة البيانات، نماذج، فلاتر، لوحات معلومات وتقارير وواجهات Angular Material.",
    s5_title:"التقارير والتصدير", s5_desc:"إنشاء تقارير Excel/PDF وتصدير بيانات مناسب للأعمال.",
    s6_title:"دعم النشر على IIS", s6_desc:"Build ونشر وإعداد وتشخيص تطبيقات Angular + .NET على IIS.",
    exp_kicker:"الخبرة", exp_title:"الخبرة المهنية ومجالات التركيز",
    e1_title:"تطوير Full Stack باستخدام .NET وAngular", e1_desc:"تطوير موجّه للإنتاج عبر المخزون والعهد والتقارير ولوحات المعلومات والمصادقة والـAPIs وSQL Server وتكامل الموبايل والنشر على IIS.",
    e2_title:"متدرب Full Stack — DWT Jordan", e2_desc:"تدريب وتطوير عملي باستخدام .NET وAngular ضمن بيئة برمجية مهنية.",
    education_label:"التعليم", edu_title:"بكالوريوس هندسة برمجيات", edu_desc:"جامعة الحسين بن طلال",
    stack_kicker:"التقنيات", stack_title:"الأدوات التي أستخدمها لإنجاز العمل", backend:"الباك إند", frontend:"الواجهة", data:"البيانات والتقارير", delivery:"النشر والتكامل",
    contact_kicker:"لنعمل معًا", contact_title:"عندك مشكلة في .NET أو Angular أو SQL Server أو نظام قائم؟", contact_text:"متاح لمهام الفريلانس، إصلاح الأخطاء، تطوير الميزات، بناء APIs، تحسين قواعد البيانات، ودعم النشر.",
    linkedin:"LinkedIn", email_me:"راسلني", contact_note:"استبدل روابط LinkedIn والبريد المؤقتة في index.html قبل النشر.", footer_text:"مصمم للوضوح والسرعة والعمل الحقيقي."
  }
};
const root = document.documentElement;
const body = document.body;
const langToggle = document.getElementById("langToggle");
const themeToggle = document.getElementById("themeToggle");
let lang = localStorage.getItem("portfolio-lang") || "en";
let theme = localStorage.getItem("portfolio-theme") || "dark";
function setLang(next) {
  lang = next;
  localStorage.setItem("portfolio-lang", lang);
  root.lang = lang;
  root.dir = lang === "ar" ? "rtl" : "ltr";
  langToggle.textContent = lang === "ar" ? "EN" : "AR";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (lang === "ar" && translations.ar[key]) {
      if (!el.dataset.en) el.dataset.en = el.textContent.trim();
      el.textContent = translations.ar[key];
    } else if (lang === "en" && el.dataset.en) {
      el.textContent = el.dataset.en;
    }
  });
}
function setTheme(next) {
  theme = next;
  localStorage.setItem("portfolio-theme", theme);
  body.classList.toggle("light", theme === "light");
  themeToggle.textContent = theme === "light" ? "◐" : "☼";
}
langToggle.addEventListener("click", () => setLang(lang === "en" ? "ar" : "en"));
themeToggle.addEventListener("click", () => setTheme(theme === "dark" ? "light" : "dark"));
document.getElementById("year").textContent = new Date().getFullYear();
document.querySelectorAll("[data-placeholder]").forEach(el => {
  el.addEventListener("click", e => {
    if (el.getAttribute("href") === "#") e.preventDefault();
  });
});
setTheme(theme);
setLang(lang);