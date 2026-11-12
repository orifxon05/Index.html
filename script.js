/**
 * ORIFXON MA'RUFXONOV — PERSONAL DEVELOPER & SECURITY PORTFOLIO
 * Core Script v2.0: Internationalization (UZ/EN), Fast Intent Chips,
 * Dynamic Project Mockup Sync, Modals, Clipboard Toast, & Accessible Navigation.
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. LOCALIZATION DICTIONARY (COMPLETE UZ / EN)
  // ==========================================================================
  let currentLang = localStorage.getItem('om_lang') || 'uz';

  const i18n = {
    uz: {
      // Navigation
      nav_home: 'Bosh sahifa',
      nav_about: 'Haqimda',
      nav_expertise: 'Yo‘nalishlar',
      nav_projects: 'Loyihalar',
      nav_journey: 'Rivojlanish yo‘li',
      nav_security: 'Xavfsizlik',
      nav_contact: 'Aloqa',
      nav_cv: 'CV yuklab olish',

      // Hero
      hero_badge: 'Amaliyot takliflari uchun ochiq',
      hero_kicker: 'AXBOROT XAVFSIZLIGI TALABASI & PYTHON DASTURCHI',
      hero_meta_edu: '🎓 3-kurs talabasi @ O‘zXIA',
      hero_meta_loc: '📍 Toshkent, O‘zbekiston',
      hero_name: "Salom, men Orifxon.",
      hero_headline: 'Python, sun’iy intellekt va zamonaviy texnologiyalar bilan amaliy yechimlar yarataman.',
      hero_bio: 'O‘zbekiston xalqaro islomshunoslik akademiyasi Axborot xavfsizligi yo‘nalishi talabasiman. Dasturiy ta’minot yaratish, aqlli avtomatlashtirish, backend texnologiyalari va kiberxavfsizlikka qiziqaman.',
      btn_explore: 'Loyihalarni ko‘rish',
      btn_cv: 'CV (PDF) yuklash',
      social_direct: 'To‘g‘ridan-to‘g‘ri aloqa:',

      // About
      about_eyebrow: 'KASBIY TANISHUV',
      about_title: 'O‘zim haqimda qisqacha.',
      about_lead: 'Nazariy bilimlar va amaliy loyihalar sintezi orqali professional muhandislik sari qadam tashlamoqdaman.',
      about_p1: 'Hozirda O‘zbekiston xalqaro islomshunoslik akademiyasida Axborot xavfsizligi yo‘nalishi bo‘yicha 3-kurs talabasiman. Mening qiziqishlarim faqat kiberxavfsizlik bilan cheklanmaydi — men Python dasturlash, jarayonlarni avtomatlashtirish, backend texnologiyalari va sun’iy intellekt (AI API) integratsiyasi ustida faol ishlayman.',
      about_p2: 'Telegram platformasi uchun aqlli botlar, tovarlar hisobi uchun kichik web tizimlar yaratish va dasturiy ta’minot sahna ortida qanday ishlashini mustaqil tahlil qilish menga katta zavq bag‘ishlaydi.',
      about_quote: '«Yaxshi muhandis bo‘lish uchun qiziquvchanlik, amaliy tajriba va uzluksiz o‘rganish eng muhim omillardir.»',
      about_facts_title: 'ASOSIY MA’LUMOTLAR',
      fact_education_label: 'Ta’lim darajasi',
      fact_education_val: 'Bakalavr 3-kurs talabasi',
      fact_major_label: 'Mutaxassislik',
      fact_major_val: 'Axborot xavfsizligi',
      fact_university_label: 'Ta’lim muassasasi',
      fact_university_val: 'O‘zbekiston xalqaro islomshunoslik akademiyasi',
      fact_location_label: 'Manzil',
      fact_location_val: 'Toshkent, O‘zbekiston',
      fact_languages_label: 'Tillar',
      fact_languages_val: 'O‘zbek (Ona tili), Ingliz (A2-B1), Turk (A2)',
      fact_focus_label: 'Hozirgi asosiy e’tibor',
      fact_focus_val: 'Python, Avtomatlashtirish, AI integratsiyasi, Kiberxavfsizlik',
      fact_goal_label: 'Kasbiy maqsad',
      fact_goal_val: 'Junior dasturchi / Amaliyotchi lavozimi',

      // Expertise
      expertise_eyebrow: 'TEXNIK BILIMLAR',
      expertise_title: 'Asosiy yo‘nalishlar va texnik stack.',
      expertise_lead: 'O‘zlashtirgan va amaliy loyihalarda qo‘llagan texnologiyalarim. Sun’iy baholar yo‘q — faqat real tajriba va o‘rganish jarayoni.',
      exp1_title: 'Dasturlash & Backend',
      exp1_desc: 'Python vositalari yordamida mantiqiy algoritmlar tuzish, Telegram botlari arxitekturasi, C++ poydevori va zamonaviy web texnologiyalari.',
      exp2_title: 'AI & Avtomatlashtirish',
      exp2_desc: 'Katta til modellari (LLM API) bilan ishlash, shaxsiy virtual assistentlar, muntazam vazifalarni rejalashtirish (scheduling) va API integratsiyasi.',
      exp3_title: 'Kiberxavfsizlik & Tizimlar',
      exp3_desc: 'Tarmoq protokollari (TCP/IP, DNS), Linux operatsion tizimi, Windows xavfsizlik jurnallari, SIEM asoslari va insidentlarni dastlabki tahlil qilish.',
      tools_strip_title: 'Ma’lumotlar bazasi va muhit vositalari:',
      tools_strip_sub: 'Loyihalarni ishlab chiqish va qo‘llab-quvvatlash uchun ishlatiladigan vositalar',

      // Projects
      projects_eyebrow: 'AMALIY TAJRIBA',
      projects_title: 'Tanlangan loyihalar.',
      projects_lead: 'Mening amaliy bilimlarim va muammolarni hal qilish uslubimni ifodalovchi dasturlar va tizimlar.',
      filter_all: 'Barchasi',
      filter_bots: 'Python & Botlar',
      filter_web: 'Web & Ma’lumotlar bazasi',
      filter_security: 'Xavfsizlik & Tizimlar',
      btn_details: 'Batafsil tahlil',
      btn_github: 'GitHub kodini ko‘rish',
      label_coming_soon: 'Kod so‘rov bo‘yicha taqdim etiladi',

      // Timeline / Journey
      journey_eyebrow: 'RIVOJLANISH BOSQICHLARI',
      journey_title: 'Mening texnik yo‘lim.',
      journey_lead: 'Akademik ta’lim, mustaqil o‘rganish va amaliy loyihalar bilan to‘ldirilgan rivojlanish bosqichlari.',

      // Security Section
      security_eyebrow: 'XAVFSIZLIK FALSAFASI',
      security_title: 'Xavfsizlik — bu texnologiya haqidagi fikrlash tarzim.',
      security_lead: 'Kiberxavfsizlikni o‘rganish menga shunchaki kod yozishni emas, balki tizimlarning barqarorligi, kirish huquqlari va ma’lumotlar daxlsizligi haqida o‘ylashni o‘rgatadi.',
      sec_p1: 'Axborot xavfsizligi bo‘yicha olayotgan bilimlarim dasturlashga bo‘lgan yondashuvimni tubdan shakllantiradi. Men yaratayotgan har bir bot, API yoki web forma — dastlab himoyasiz nuqtalar nazoratidan o‘tadi.',
      sec_p2: 'Foydalanuvchi ma’lumotlarini tekshirish (sanitization), parollarni xavfsiz xesh qilish, eng kam huquqlar printsipi (least privilege) va tarmoq trafigini to‘g‘ri tushunish dasturchi uchun zarur sifatlardir.',
      pillar1_title: 'Tarmoq protokollari tahlili',
      pillar1_desc: 'TCP/IP, DNS, HTTP/HTTPS va portlar orqali uzatilayotgan ma’lumotlar tuzilishini tushunish.',
      pillar2_title: 'Kirish huquqlarini cheklash (RBAC)',
      pillar2_desc: 'Botlar va web tizimlarda faqat vakolatlangan foydalanuvchilar kirishini ta’minlash.',
      pillar3_title: 'Loglar va hodisalar monitoringi',
      pillar3_desc: 'Linux tizim jurnallari va Windows Event loglarini tahlil qilish, nosozlik va shubhali faollikni aniqlash.',

      // Contact & Recruiter Fast Intent Chips
      contact_eyebrow: 'BOG‘LANISH',
      contact_title: 'Muloqot uchun ochiqman.',
      contact_lead: 'Amaliyot takliflari, texnik savollar yoki qiziqarli loyihalar yuzasidan menga bemalol xabar yo‘llashingiz mumkin.',
      contact_phone_label: 'Telefon',
      contact_email_label: 'Elektron pochta',
      contact_telegram_label: 'Telegram',
      contact_instagram_label: 'Instagram',
      contact_github_label: 'GitHub Profil',
      btn_copy: 'Nusxalash',
      btn_open: 'Ochish',
      btn_chat: 'Yozish',
      form_title: 'To‘g‘ridan-to‘g‘ri xabar tayyorlash',
      form_sub: 'Quyidagi shaklni to‘ldirib jo‘natsangiz, standart pochta mijozingiz avtomatik ochiladi.',
      chips_label: 'Tezkor mavzuni tanlash (Rekruterlar va hamkorlar uchun):',
      chip_internship: '💼 Amaliyot / Ish taklifi',
      chip_collab: '🤝 Loyiha hamkorligi',
      chip_chat: '☕ Texnik savol / Suhbat',
      label_name: 'Ismingiz',
      label_email: 'Sizning elektron pochtangiz',
      label_subject: 'Xabar mavzusi',
      label_message: 'Xabar matni',
      btn_submit_msg: 'Pochta orqali jo‘natish',
      form_note: 'Eslatma: Sayt tashqi soxta backendga ulanmagan; xabar to‘g‘ridan-to‘g‘ri sizning xavfsiz pochtangiz orqali jo‘natiladi.',

      // Footer
      footer_role: 'Python Dasturchi & Axborot Xavfsizligi Talabasi',
      footer_copy: 'Barcha huquqlar himoyalangan.',
      footer_back_top: 'Yuqoriga qaytish',

      // Toast Messages
      toast_copied: 'Xotiraga nusxalandi: ',
      toast_modal_close: 'Yopish'
    },

    en: {
      // Navigation
      nav_home: 'Home',
      nav_about: 'About',
      nav_expertise: 'Expertise',
      nav_projects: 'Projects',
      nav_journey: 'Journey',
      nav_security: 'Security',
      nav_contact: 'Contact',
      nav_cv: 'Download CV',

      // Hero
      hero_badge: 'Open to Internship Opportunities',
      hero_kicker: 'INFORMATION SECURITY STUDENT & PYTHON DEVELOPER',
      hero_meta_edu: '🎓 3rd-year student @ IIAU',
      hero_meta_loc: '📍 Tashkent, Uzbekistan',
      hero_name: "Hello, I'm Orifxon.",
      hero_headline: 'Building practical solutions with Python, AI and modern technologies.',
      hero_bio: "I'm Orifxon, an Information Security student and aspiring Python developer interested in automation, AI-powered applications, backend development, and cybersecurity. I enjoy turning ideas into practical digital solutions and continuously improving my technical skills through hands-on projects.",
      btn_explore: 'Explore My Projects',
      btn_cv: 'Download CV (PDF)',
      social_direct: 'Direct connect:',

      // About
      about_eyebrow: 'CAREER PROFILE',
      about_title: 'A little about me.',
      about_lead: 'Combining academic foundations with practical software development to grow into a well-rounded engineer.',
      about_p1: "I'm currently a third-year Information Security student at the Uzbekistan International Islamic Studies Academy. My interests extend beyond cybersecurity into Python development, automation, backend technologies and AI integration.",
      about_p2: 'I enjoy experimenting with ideas, building Telegram bots, creating useful tools and learning how software systems work behind the scenes.',
      about_quote: '“I believe practical experience, curiosity and consistent learning are essential to becoming a good engineer.”',
      about_facts_title: 'KEY INFORMATION',
      fact_education_label: 'Education Level',
      fact_education_val: 'Bachelor, 3rd year student',
      fact_major_label: 'Major',
      fact_major_val: 'Information Security',
      fact_university_label: 'Institution',
      fact_university_val: 'International Islamic Academy of Uzbekistan',
      fact_location_label: 'Location',
      fact_location_val: 'Tashkent, Uzbekistan',
      fact_languages_label: 'Languages',
      fact_languages_val: 'Uzbek (Native), English (Pre-Intermediate), Turkish (A2)',
      fact_focus_label: 'Current Focus',
      fact_focus_val: 'Python, Automation, AI Integration, Cybersecurity',
      fact_goal_label: 'Career Goal',
      fact_goal_val: 'Internship / Junior Developer Opportunities',

      // Expertise
      expertise_eyebrow: 'TECHNICAL ARSENAL',
      expertise_title: 'Areas of expertise & tech stack.',
      expertise_lead: 'Technologies I have studied and applied in practical projects. Honest competencies without arbitrary percentages.',
      exp1_title: 'Development & Programming',
      exp1_desc: 'Writing structured Python code, Telegram bot architectures, C++ foundations, and modern web application building blocks.',
      exp2_title: 'AI & Automation',
      exp2_desc: 'Large language model (LLM API) integration, personal AI assistants, routine task scheduling, and resilient API workflows.',
      exp3_title: 'Cybersecurity & Systems',
      exp3_desc: 'Network protocol fundamentals (TCP/IP, DNS), Linux operating systems, Windows event logging, and foundational defensive monitoring.',
      tools_strip_title: 'Databases & Developer Tooling:',
      tools_strip_sub: 'Core tools utilized across my development and learning workflow',

      // Projects
      projects_eyebrow: 'PORTFOLIO WORK',
      projects_title: 'Featured projects.',
      projects_lead: 'Software applications, automation bots, and technical experiments that represent my practical capabilities.',
      filter_all: 'All',
      filter_bots: 'Python & Bots',
      filter_web: 'Web & Databases',
      filter_security: 'Security & Systems',
      btn_details: 'View Analysis',
      btn_github: 'View Source Code',
      label_coming_soon: 'Code available on request',

      // Timeline / Journey
      journey_eyebrow: 'TIMELINE',
      journey_title: 'My technical journey.',
      journey_lead: 'Milestones spanning university education, independent software engineering practice, and technical exploration.',

      // Security Section
      security_eyebrow: 'SECURITY PERSPECTIVE',
      security_title: 'Security is part of how I think about technology.',
      security_lead: 'Studying information security influences every aspect of my development workflow: access controls, input sanitization, and defensive architecture.',
      sec_p1: 'My academic background in Information Security provides a security-conscious perspective whenever I write code. I consider defensive principles from the initial design phase rather than as an afterthought.',
      sec_p2: 'Rigorous input validation, password hashing, least-privilege role separation, and a firm grasp of network protocols are vital qualities for modern software engineers.',
      pillar1_title: 'Network Protocol Awareness',
      pillar1_desc: 'Understanding the mechanics of TCP/IP, DNS, HTTP/HTTPS, and data transmission over standard network interfaces.',
      pillar2_title: 'Role-Based Access Control (RBAC)',
      pillar2_desc: 'Implementing whitelist rules and permission scopes across Telegram bots and web APIs.',
      pillar3_title: 'Logging & System Auditing',
      pillar3_desc: 'Analyzing Linux system journals and Windows event logs to detect errors and irregular patterns.',

      // Contact & Recruiter Fast Intent Chips
      contact_eyebrow: 'GET IN TOUCH',
      contact_title: 'Let’s start a conversation.',
      contact_lead: 'Always open to discussing internship opportunities, collaborative projects, or software engineering questions.',
      contact_phone_label: 'Phone',
      contact_email_label: 'Email',
      contact_telegram_label: 'Telegram',
      contact_instagram_label: 'Instagram',
      contact_github_label: 'GitHub Profile',
      btn_copy: 'Copy',
      btn_open: 'Open',
      btn_chat: 'Message',
      form_title: 'Compose an Email Message',
      form_sub: 'Complete this form to generate a structured message in your default email application.',
      chips_label: 'Fast Subject Selector (For recruiters & collaborators):',
      chip_internship: '💼 Internship / Job Opportunity',
      chip_collab: '🤝 Project Collaboration',
      chip_chat: '☕ Technical Question / Coffee Chat',
      label_name: 'Your Name',
      label_email: 'Your Email Address',
      label_subject: 'Subject',
      label_message: 'Message Content',
      btn_submit_msg: 'Open Email Client',
      form_note: 'Note: This form communicates directly via your email client without intermediate third-party tracking.',

      // Footer
      footer_role: 'Python Developer & Information Security Student',
      footer_copy: 'All rights reserved.',
      footer_back_top: 'Back to top',

      // Toast Messages
      toast_copied: 'Copied to clipboard: ',
      toast_modal_close: 'Close'
    }
  };

  // ==========================================================================
  // 2. VERIFIED PROJECTS DATA REPOSITORY
  // ==========================================================================
  const projectsData = {
    ai_assistant: {
      category: 'bots',
      categoryTagUz: 'Python & AI Avtomatlashtirish',
      categoryTagEn: 'Python & AI Automation',
      statusUz: 'Faol loyiha',
      statusEn: 'Active Project',
      titleUz: 'Shaxsiy Telegram AI Yordamchisi',
      titleEn: 'Personal Telegram AI Assistant',
      summaryUz: 'Cheklangan kirish huquqlariga ega (whitelist RBAC), suhbatlar tarixini boshqaruvchi va shaxsiy vazifalarni avtomatlashtiruvchi Telegram assistenti.',
      summaryEn: 'A custom personal assistant featuring access control whitelisting, contextual conversation handling, and automated task execution.',
      problemUz: 'Kundalik takrorlanuvchi yozishmalarga javob berish, tezkor AI xulosalarini olish va faqat ruxsat berilgan shaxslar uchun xavfsiz avtomatlashtirish talab etilgan.',
      problemEn: 'Streamlining repetitive personal communication, retrieving instant AI insights, and enforcing strict identity-based access control.',
      contributionUz: 'Telethon MTProto mijozi yordamida sessiyani sozladim, AI API bilan asinxron ulanishni yaratdim va har bir foydalanuvchi huquqini tekshiruvchi himoya mexanizmini kiritdim.',
      contributionEn: 'Configured MTProto session persistence via Telethon, integrated asynchronous AI API calls, and built role-based access validation.',
      tech: ['Python', 'Telethon', 'AI API', 'JSON Storage', 'Asyncio'],
      repo: 'https://github.com/orifxon05/Index.html'
    },
    dormitory_bot: {
      category: 'bots',
      categoryTagUz: 'Telegram Bot & Rejalashtirish',
      categoryTagEn: 'Telegram Bot & Scheduling',
      statusUz: 'Amalda qo‘llangan',
      statusEn: 'Deployed Solution',
      titleUz: 'Yotoqxona Navbatchilik Boti',
      titleEn: 'Dormitory Duty Management Bot',
      summaryUz: 'Talabalar turar joyidagi navbatchilik jadvallarini avtomatik rotatsiya qiluvchi va mas’ullarga o‘z vaqtida bildirishnoma jo‘natuvchi bot.',
      summaryEn: 'An automated scheduling bot that rotates dormitory responsibilities and dispatches timely notifications to assigned students.',
      problemUz: 'Inson omili tufayli navbatchilik jadvallarining buzilishi va navbatchilarga oldindan xabar berishdagi qiyinchiliklarni bartaraf etish.',
      problemEn: 'Overcoming scheduling friction, missed notifications, and manual tracking of resident duty shifts.',
      contributionUz: 'Navbatchilik ro‘yxatini avtomatik yangilovchi navbat algoritmini yozdim, rejalashtirilgan xabarnomalar mexanizmini joriy qildim.',
      contributionEn: 'Engineered a cyclical rotation algorithm and scheduled notification dispatches using background workers.',
      tech: ['Python', 'Telegram Bot API', 'Scheduling', 'Data Persistence'],
      repo: 'https://github.com/orifxon05/Index.html'
    },
    warehouse_system: {
      category: 'web',
      categoryTagUz: 'Web & Ma’lumotlar Bazasi',
      categoryTagEn: 'Web & Databases',
      statusUz: 'Funksional Prototip',
      statusEn: 'Functional Prototype',
      titleUz: 'Ombor va Do‘kon Web Boshqaruv Tizimi',
      titleEn: 'Warehouse & Retail Management System',
      summaryUz: 'Tovarlar katalogi, ombor qoldig‘i, kirim-chiqim nazorati va QR-kod orqali tovarlarni tezkor identifikatsiyalash web platformasi.',
      summaryEn: 'A web platform for inventory cataloging, stock balance tracking, inflow/outflow logging, and QR-based item identification.',
      problemUz: 'Kichik savdo va omborlarda tovar qoldig‘ini qog‘ozda emas, markazlashgan ma’lumotlar bazasida xavfsiz boshqarish zarurati.',
      problemEn: 'Eliminating error-prone manual inventory logs with a structured, reliable database management solution.',
      contributionUz: 'PostgreSQL va MongoDB bilan ishlash mantiqini tuzdim, mahsulotlar uchun dinamik QR generatsiyasini joriy qildim, parollarni xavfsiz xesh qilishni ta’minladim.',
      contributionEn: 'Structured database schemas across PostgreSQL/MongoDB, implemented dynamic QR generation, and applied secure password hashing.',
      tech: ['PostgreSQL', 'MongoDB', 'QR Processing', 'HTML5/CSS3', 'Python/JS'],
      repo: 'https://github.com/orifxon05/Index.html'
    },
    birthday_bot: {
      category: 'bots',
      categoryTagUz: 'Avtomatlashtirish & Taqvim',
      categoryTagEn: 'Automation & Calendar',
      statusUz: 'To‘liq Yakunlangan',
      statusEn: 'Complete',
      titleUz: 'Tug‘ilgan Kun Tabriklash Boti',
      titleEn: 'Birthday Greeting Automation Bot',
      summaryUz: 'Taqvim sanalarini kuzatib boruvchi, shaxsiylashtirilgan tabrik matnlari va media fayllarni belgilangan soatda jo‘natuvchi vosita.',
      summaryEn: 'An automation utility that monitors upcoming calendar dates and delivers personalized greeting messages on schedule.',
      problemUz: 'Yaqinlar va jamoa a’zolarining muhim sanalarini unutmaslik hamda har bir shaxs uchun alohida e’tiborli tabrik yetkazish.',
      problemEn: 'Preventing overlooked dates among friends and teams while delivering customized media greetings automatically.',
      contributionUz: 'Har kunlik vaqt bo‘yicha tekshiruvchi timer tizimini qurdim, tarmoq xatolarida xabarni qayta jo‘natish (retry logic) mantiqini yozdim.',
      contributionEn: 'Constructed automated daily checks and implemented retry routines for reliable dispatching.',
      tech: ['Python', 'Telegram Bot API', 'Automation', 'Datetime Logic'],
      repo: 'https://github.com/orifxon05/Index.html'
    },
    media_storage_bot: {
      category: 'bots',
      categoryTagUz: 'Media & Bulut Xotira',
      categoryTagEn: 'Media & Cloud Storage',
      statusUz: 'Portfolio Loyihasi',
      statusEn: 'Portfolio Project',
      titleUz: 'Musiqa va Media Saqlash Boti',
      titleEn: 'Media & Audio Storage Telegram Bot',
      summaryUz: 'Audio kontentlarni qidirish, yuklab olish va Telegram bulut infratuzilmasida tartibli saqlashga mo‘ljallangan bot.',
      summaryEn: 'A utility bot facilitating audio search, streamlined downloading, and organized cloud storage within Telegram.',
      problemUz: 'Katta hajmdagi media fayllarni qurilmada emas, doimiy ochiq bulutli kanal va guruhlarda xavfsiz kataloglash.',
      problemEn: 'Providing organized cloud archiving for media files without cluttering local device storage.',
      contributionUz: 'Asinxron oqim uzatish (async stream) mexanizmini ishlab chiqdim, kiritilgan fayl nomlarini tozalash (sanitization) qoidalarini kiritdim.',
      contributionEn: 'Applied asynchronous stream handling and implemented strict filename and format sanitization.',
      tech: ['Python', 'Asyncio', 'Media Streaming', 'Telegram API'],
      repo: 'https://github.com/orifxon05/Index.html'
    },
    soc_homelab: {
      category: 'security',
      categoryTagUz: 'Xavfsizlik & Monitoring',
      categoryTagEn: 'Security & Monitoring',
      statusUz: 'Amaliy Laboratoriya',
      statusEn: 'Practical Lab',
      titleUz: 'Xavfsizlik & SIEM Home-Lab Muhiti',
      titleEn: 'Security & SIEM Home-Lab Environment',
      summaryUz: 'Tizim va tarmoq loglarini tahlil qilish, Linux/Windows xavfsizlik jurnallarini o‘rganish va monitoring amaliyoti muhiti.',
      summaryEn: 'A practical laboratory environment dedicated to network traffic capture, system log inspection, and defensive triage workflows.',
      problemUz: 'Nazariy kiberxavfsizlik tushunchalarini real hodisalar (Event ID 4624/4625, tarmoq portlarini skanerlash) orqali amalda sinab ko‘rish.',
      problemEn: 'Validating theoretical security concepts against realistic system logon anomalies and network traffic sweeps.',
      contributionUz: 'Wireshark orqali paketlar tahlilini bajardim, Linux xavfsizlik devori (UFW) qoidalarini shakllantirdim va asosiy log tahlili bosqichlarini hujjatlashtirdim.',
      contributionEn: 'Conducted packet capture investigations with Wireshark, implemented Linux UFW rule sets, and documented event triage patterns.',
      tech: ['Linux (Ubuntu)', 'Windows Event Logs', 'Wireshark', 'TCP/IP Analysis'],
      repo: null
    }
  };

  // ==========================================================================
  // 3. LANGUAGE SWITCHING LOGIC
  // ==========================================================================
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('om_lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang] && i18n[lang][key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = i18n[lang][key];
        } else {
          el.textContent = i18n[lang][key];
        }
      }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    document.documentElement.lang = lang;
  }

  // ==========================================================================
  // 4. PROJECT FILTERING
  // ==========================================================================
  function setupProjectFiltering() {
    const filterBtns = document.querySelectorAll('.project-filter-btn');
    const projectCards = document.querySelectorAll('.project-entry');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'grid';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ==========================================================================
  // 5. PROJECT DETAILS MODAL
  // ==========================================================================
  function setupProjectModal() {
    const overlay = document.getElementById('project-modal-overlay');
    const modalBody = document.getElementById('modal-content-area');
    const closeBtn = document.getElementById('modal-close-trigger');

    document.querySelectorAll('[data-project-key]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const key = btn.getAttribute('data-project-key');
        const proj = projectsData[key];
        if (!proj || !modalBody || !overlay) return;

        const isUz = currentLang === 'uz';
        const title = isUz ? proj.titleUz : proj.titleEn;
        const summary = isUz ? proj.summaryUz : proj.summaryEn;
        const problem = isUz ? proj.problemUz : proj.problemEn;
        const contribution = isUz ? proj.contributionUz : proj.contributionEn;
        const status = isUz ? proj.statusUz : proj.statusEn;

        modalBody.innerHTML = `
          <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-primary); font-weight: 700; text-transform: uppercase; margin-bottom: 8px;">
            ${isUz ? proj.categoryTagUz : proj.categoryTagEn} &bull; ${status}
          </div>
          <h2 style="font-family: var(--font-serif); font-size: 1.85rem; line-height: 1.2; margin-bottom: 14px; color: var(--text-primary);">
            ${title}
          </h2>
          <p style="font-size: 1rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 24px;">
            ${summary}
          </p>

          <div style="background: var(--bg-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 18px; margin-bottom: 20px;">
            <div style="font-size: 0.82rem; font-weight: 700; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
              ${isUz ? 'Yechilgan muammo:' : 'The Problem It Solves:'}
            </div>
            <p style="font-size: 0.92rem; color: var(--text-secondary); margin: 0; line-height: 1.6;">
              ${problem}
            </p>
          </div>

          <div style="background: var(--bg-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 18px; margin-bottom: 24px;">
            <div style="font-size: 0.82rem; font-weight: 700; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
              ${isUz ? 'Mening hissasi:' : 'My Technical Contribution:'}
            </div>
            <p style="font-size: 0.92rem; color: var(--text-secondary); margin: 0; line-height: 1.6;">
              ${contribution}
            </p>
          </div>

          <div style="margin-bottom: 24px;">
            <div style="font-size: 0.82rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">
              ${isUz ? 'Ishlatilgan texnologiyalar:' : 'Technologies Applied:'}
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 6px;">
              ${proj.tech.map(t => `<span class="tech-tag" style="background:var(--bg-secondary); border-color:var(--border-subtle);">${t}</span>`).join('')}
            </div>
          </div>

          <div style="display: flex; gap: 12px; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 18px;">
            ${proj.repo 
              ? `<a href="${proj.repo}" target="_blank" rel="noopener" class="btn-primary" style="font-size: 0.85rem; padding: 9px 18px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  <span>${isUz ? 'GitHub da ko‘rish' : 'View on GitHub'}</span>
                </a>`
              : `<span class="project-coming-soon">${isUz ? 'Kod so‘rov bo‘yicha taqdim etiladi' : 'Source available upon request'}</span>`
            }
            <button id="modal-inner-close-btn" class="btn-secondary" style="font-size: 0.85rem; padding: 9px 16px;">
              ${isUz ? 'Yopish' : 'Close'}
            </button>
          </div>
        `;

        overlay.classList.add('active');
        document.body.classList.add('scroll-locked');

        document.getElementById('modal-inner-close-btn')?.addEventListener('click', () => {
          overlay.classList.remove('active');
          document.body.classList.remove('scroll-locked');
        });
      });
    });

    closeBtn?.addEventListener('click', () => {
      overlay.classList.remove('active');
      document.body.classList.remove('scroll-locked');
    });

    overlay?.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.classList.remove('scroll-locked');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        overlay.classList.remove('active');
        document.body.classList.remove('scroll-locked');
      }
    });
  }

  // ==========================================================================
  // 6. TOAST NOTIFICATIONS & COPY UTILITY
  // ==========================================================================
  function showToast(message) {
    const shelf = document.getElementById('toast-shelf');
    if (!shelf) return;

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `
      <svg width="15" height="15" fill="none" stroke="#34d399" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>${escapeHtml(message)}</span>
    `;

    shelf.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      toast.style.transition = 'all 0.25s ease';
      setTimeout(() => toast.remove(), 250);
    }, 2800);
  }

  function setupClipboardCopy() {
    document.querySelectorAll('[data-clipboard]').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const text = trigger.getAttribute('data-clipboard');
        if (!text) return;

        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(() => {
            const prefix = currentLang === 'uz' ? i18n.uz.toast_copied : i18n.en.toast_copied;
            showToast(`${prefix}${text}`);
          }).catch(() => {
            fallbackCopy(text);
          });
        } else {
          fallbackCopy(text);
        }
      });
    });
  }

  function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      const prefix = currentLang === 'uz' ? i18n.uz.toast_copied : i18n.en.toast_copied;
      showToast(`${prefix}${text}`);
    } catch (err) {}
    document.body.removeChild(textArea);
  }

  function escapeHtml(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // ==========================================================================
  // 7. FAST INTENT CHIPS & CONTACT FORM
  // ==========================================================================
  function setupFastIntentChips() {
    const chips = document.querySelectorAll('.intent-chip');
    const subjectInput = document.getElementById('sender-subject');

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('selected'));
        chip.classList.add('selected');

        const intentKey = chip.getAttribute('data-intent');
        const isUz = currentLang === 'uz';

        if (intentKey === 'internship') {
          subjectInput.value = isUz 
            ? 'Amaliyot / Ish taklifi bo‘yicha' 
            : 'Internship / Job Opportunity Inquiry';
        } else if (intentKey === 'collab') {
          subjectInput.value = isUz 
            ? 'Loyiha hamkorligi taklifi' 
            : 'Project Collaboration Proposal';
        } else if (intentKey === 'chat') {
          subjectInput.value = isUz 
            ? 'Texnik savol / Tanishuv suhbati' 
            : 'Technical Question / Professional Discussion';
        }

        subjectInput.focus();
      });
    });
  }

  function setupContactForm() {
    const form = document.getElementById('contact-email-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('sender-name')?.value.trim() || '';
      const email = document.getElementById('sender-email')?.value.trim() || '';
      const subject = document.getElementById('sender-subject')?.value.trim() || 'Portfolio Inquiry';
      const msg = document.getElementById('sender-message')?.value.trim() || '';

      if (!name || !email || !msg) return;

      const bodyContent = `From: ${name} (${email})\n\n${msg}`;
      const mailtoUrl = `mailto:orifxonmarufxonov24@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;

      const notice = currentLang === 'uz' 
        ? 'Pochta mijozi ochilmoqda...' 
        : 'Opening your email client...';
      showToast(notice);

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 500);
    });
  }

  // ==========================================================================
  // 8. NAVIGATION, ACTIVE SPY, & MOBILE SCROLL-LOCK
  // ==========================================================================
  function setupNavigation() {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    mobileBtn?.addEventListener('click', () => {
      const isOpen = navLinks?.classList.toggle('open');
      document.body.classList.toggle('scroll-locked', isOpen);
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks?.classList.remove('open');
        document.body.classList.remove('scroll-locked');
      });
    });

    const siteNav = document.getElementById('site-nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        siteNav?.style.setProperty('box-shadow', '0 4px 18px -2px rgba(20, 20, 22, 0.05)');
      } else {
        siteNav?.style.removeProperty('box-shadow');
      }
    }, { passive: true });

    const sections = document.querySelectorAll('section[id]');
    const navLinksArray = document.querySelectorAll('.nav-link');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinksArray.forEach(link => {
              link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      }, {
        rootMargin: '-30% 0px -60% 0px'
      });

      sections.forEach(section => observer.observe(section));
    }
  }

  // ==========================================================================
  // 9. DOM INITIALIZATION
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    setupNavigation();
    setupProjectFiltering();
    setupProjectModal();
    setupClipboardCopy();
    setupFastIntentChips();
    setupContactForm();

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        if (lang) applyLanguage(lang);
      });
    });
  });

})();
