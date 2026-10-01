/**
 * ORIFXON MA'RUFXONOV — CYBERSECURITY & SOC ANALYST PORTFOLIO
 * Core Script: Terminal Engine, SOC Alert Simulator, Audio FX, i18n, Canvas FX
 */

(function () {
  'use strict';

  // ==========================================
  // 1. STATE & LOCALIZATION DICTIONARY
  // ==========================================
  let currentLang = localStorage.getItem('om_lang') || 'uz';
  let soundEnabled = localStorage.getItem('om_sound') === 'true';

  const i18n = {
    uz: {
      nav_about: 'Haqida',
      nav_matrix: 'SOC & Xavfsizlik',
      nav_projects: 'Loyihalar',
      nav_terminal: 'Terminal CLI',
      nav_skills: 'Ko‘nikmalar',
      nav_timeline: 'Ta’lim & Tajriba',
      nav_contact: 'Aloqa',
      btn_download_cv: 'CV Yuklab Olish',
      hero_badge: 'HIMOYA TIZIMI FAOL • SOC TAYYOR',
      hero_title_prefix: 'Assalomu alaykum, men',
      hero_desc: 'O‘zbekiston xalqaro islomshunoslik akademiyasi Axborot xavfsizligi yo‘nalishi 3-kurs talabasi. Kiberxavfsizlik, SOC monitoringi, tarmoq xavfsizligi, SIEM log tahlili va Python avtomatlashtirishga ixtisoslashgan.',
      btn_view_projects: 'Loyihalarni Ko‘rish',
      btn_open_terminal: 'Terminalni Ochish',
      stat_projects: 'IT & Xavfsizlik Loyihalari',
      stat_year: 'Axborot Xavfsizligi Kursi',
      stat_monitoring: 'Tirishqoqlik & Intizom',
      stat_readiness: 'Amaliyotga Tayyorlik',
      soc_live_title: 'SOC Monitoring & Xavfsizlik Voqealari Oqimi (Live Telemetry)',
      btn_simulate: 'Insident Simulyatsiya Qilish',
      sec_about_tag: 'KASBIY PROFIL',
      sec_about_title: 'Kiberxavfsizlik va SOC sari yo‘l',
      sec_about_sub: 'Kiberxavfsizlik bo‘yicha fundamental bilimlar va amaliy dasturlash mahorati sintezi',
      about_bio_title: 'Men haqimda va kasbiy maqsadim',
      about_bio_p1: 'Axborot xavfsizligi yo‘nalishida 3-kurs talabaman. Kiberxavfsizlik, xususan SOC (Security Operations Center) monitoringi, tarmoq protokollari tahlili, log tahlili va insidentlarga tezkor javob berish (Incident Response) yo‘nalishlariga qattiq qiziqaman.',
      about_bio_p2: 'Hozirgi vaqtda tarmoq arxitekturasi, Linux va Windows xavfsizligi, SIEM tushunchalari hamda Python yordamida himoya va avtomatlashtirish vositalarini yaratish bo‘yicha mustaqil amaliyot olib boryapman.',
      about_quote: '«Maqsadim: SOC, axborot xavfsizligi monitoringi yoki incident response yo‘nalishida amaliyot / junior lavozimda tajribali jamoada ishlab, professional mutaxassisga aylanish.»',
      spec_degree: 'Ta’lim / Kurs',
      spec_degree_val: 'Bakalavr 3-kurs (Axborot xavfsizligi)',
      spec_city: 'Hudud',
      spec_city_val: 'Toshkent, O‘zbekiston',
      spec_english: 'Ingliz tili darajasi',
      spec_english_val: 'Pre-Intermediate (A2-B1)',
      spec_status: 'Ish maqomi',
      spec_status_val: 'Amaliyot / Junior izlanmoqda',
      sec_matrix_tag: 'BLUE TEAM & HIMOYA ARXITEKTURASI',
      sec_matrix_title: 'Kiberxavfsizlik Yo‘nalishlari & Vositalar',
      sec_matrix_sub: 'SOC mutaxassisi bilishi shart bo‘lgan asosiy yo‘nalishlar va amaliy tajriba',
      sec_proj_tag: 'AMALIY LOYIHALAR',
      sec_proj_title: 'Yaratilgan Tizimlar & Botlar',
      sec_proj_sub: 'Python, avtomatlashtirish, xavfsizlik va web texnologiyalari asosidagi ishlar',
      filter_all: 'Barchasi',
      filter_soc: 'Kiberxavfsizlik & SOC',
      filter_bot: 'Python & AI Botlar',
      filter_web: 'Web & Ma’lumotlar Bazasi',
      sec_term_tag: 'INTERAKTIV BUYRUQLAR SATRI',
      sec_term_title: 'Cyber CLI Terminal Konsoli',
      sec_term_sub: 'Tizimni buyruqlar orqali sinab ko‘ring yoki tezkor tugmalarni bosing',
      sec_skills_tag: 'TEXNIK QUROL-ASLAHA',
      sec_skills_title: 'Texnik Ko‘nikmalar & Stack',
      sec_skills_sub: 'Dasturlash, ma’lumotlar bazasi, operatsion tizimlar va tillar',
      sec_time_tag: 'KARYERA & TA’LIM',
      sec_time_title: 'Ta’lim va Amaliyot Bosqichlari',
      sec_time_sub: 'O‘sish yo‘nalishi va bosib o‘tilgan yo‘l',
      sec_contact_tag: 'ALOQA MARKAZI',
      sec_contact_title: 'Men bilan bog‘laning',
      sec_contact_sub: 'Amaliyot takliflari, loyihalar va savollar uchun doim ochiqman',
      form_name: 'Ismingiz',
      form_email: 'Email manzilingiz',
      form_subject: 'Mavzu',
      form_msg: 'Xabar matni',
      btn_send: 'Xabarni Yuborish',
      footer_copy: 'Barcha huquqlar himoyalangan.',
      footer_sec_note: 'Tizim: TLS 1.3 / X-Content-Type-Options: nosniff himoyalangan.'
    },
    en: {
      nav_about: 'About',
      nav_matrix: 'SOC & Security',
      nav_projects: 'Projects',
      nav_terminal: 'Terminal CLI',
      nav_skills: 'Skills',
      nav_timeline: 'Education & Journey',
      nav_contact: 'Contact',
      btn_download_cv: 'Download CV',
      hero_badge: 'SYSTEM OPERATIONAL • SOC READY',
      hero_title_prefix: 'Hello, I am',
      hero_desc: '3rd-year Information Security student at the International Islamic Academy of Uzbekistan. Specializing in Cybersecurity, SOC monitoring, network security, SIEM log analysis, and Python automation.',
      btn_view_projects: 'View Projects',
      btn_open_terminal: 'Open Terminal',
      stat_projects: 'IT & Security Projects',
      stat_year: 'InfoSec Academic Year',
      stat_monitoring: 'Discipline & Dedication',
      stat_readiness: 'Internship Readiness',
      soc_live_title: 'SOC Monitoring & Security Event Stream (Live Telemetry)',
      btn_simulate: 'Simulate Incident',
      sec_about_tag: 'CAREER PROFILE',
      sec_about_title: 'Path Towards SOC & Cybersecurity',
      sec_about_sub: 'Synthesis of cybersecurity fundamentals and hands-on software development',
      about_bio_title: 'About Me & Professional Goal',
      about_bio_p1: 'I am a 3rd-year Information Security student. Deeply interested in Cybersecurity, specifically SOC (Security Operations Center) monitoring, network protocol analysis, log investigation, and Incident Response.',
      about_bio_p2: 'Currently advancing practical skills in network architecture, Linux/Windows system hardening, SIEM foundations, and building automated security tools with Python.',
      about_quote: '«Objective: Secure an internship or junior role in SOC, security monitoring, or incident response to learn from experienced specialists and grow into a top-tier cybersecurity professional.»',
      spec_degree: 'Education / Degree',
      spec_degree_val: 'Bachelor 3rd year (Information Security)',
      spec_city: 'Location',
      spec_city_val: 'Tashkent, Uzbekistan',
      spec_english: 'English Level',
      spec_english_val: 'Pre-Intermediate (A2-B1)',
      spec_status: 'Employment Status',
      spec_status_val: 'Seeking Internship / Junior Role',
      sec_matrix_tag: 'BLUE TEAM & DEFENSE ARCHITECTURE',
      sec_matrix_title: 'Cybersecurity Pillars & Tools',
      sec_matrix_sub: 'Essential security operational domains and practical home-lab experience',
      sec_proj_tag: 'PORTFOLIO PROJECTS',
      sec_proj_title: 'Engineered Systems & Bots',
      sec_proj_sub: 'Production-ready solutions built with Python, Automation, DBs, and modern Web',
      filter_all: 'All',
      filter_soc: 'Cybersecurity & SOC',
      filter_bot: 'Python & AI Bots',
      filter_web: 'Web & Databases',
      sec_term_tag: 'INTERACTIVE CLI CONSOLE',
      sec_term_title: 'Cyber Command Line Terminal',
      sec_term_sub: 'Interact with the portfolio using shell commands or click quick chips below',
      sec_skills_tag: 'TECHNICAL ARSENAL',
      sec_skills_title: 'Technical Skills & Stack',
      sec_skills_sub: 'Programming languages, databases, operating systems, and spoken languages',
      sec_time_tag: 'CAREER & ACADEMIA',
      sec_time_title: 'Education & Career Milestones',
      sec_time_sub: 'My continuous learning journey and academic timeline',
      sec_contact_tag: 'COMMUNICATION HUB',
      sec_contact_title: 'Get In Touch',
      sec_contact_sub: 'Always open to junior opportunities, internships, and security collaborations',
      form_name: 'Your Name',
      form_email: 'Your Email',
      form_subject: 'Subject',
      form_msg: 'Message Content',
      btn_send: 'Send Message',
      footer_copy: 'All rights reserved.',
      footer_sec_note: 'System: TLS 1.3 / X-Content-Type-Options: nosniff hardened.'
    }
  };

  // ==========================================
  // 2. SYNTHESIZED SOUND GENERATOR (Web Audio API)
  // ==========================================
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  function playCyberTone(type) {
    if (!soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === 'click') {
        // High-tech subtle mechanical chirp
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.04);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'key') {
        // Terminal key tap
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(450, now);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);
        osc.start(now);
        osc.stop(now + 0.02);
      } else if (type === 'alert') {
        // High priority incident beep
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.setValueAtTime(1100, now + 0.08);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      } else if (type === 'success') {
        // Double chime
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.setValueAtTime(880, now + 0.08); // A5
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      }
    } catch (e) {
      // Audio fallback silent
    }
  }

  // ==========================================
  // 3. LANGUAGE SWITCHER IMPLEMENTATION
  // ==========================================
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

    // Update dynamic terminal welcome line if terminal exists
    const termWelcome = document.getElementById('term-welcome-msg');
    if (termWelcome) {
      termWelcome.textContent = lang === 'uz'
        ? "Orifxon Ma'rufxonov xavfsizlik konsoliga xush kelibsiz. Buyruqlar uchun 'help' deb yozing."
        : "Welcome to Orifxon Marufxonov's Security Terminal. Type 'help' to see available commands.";
    }
  }

  // ==========================================
  // 4. TYPEWRITER EFFECT
  // ==========================================
  const typewriterStringsUz = [
    "Bo'lajak SOC Analyst",
    "Axborot Xavfsizligi Mutaxassisi",
    "Python & Avtomatlashtirish Dasturchisi",
    "Blue Team & Threat Hunter",
    "SIEM & Log Tahlili Izlanuvchisi"
  ];
  const typewriterStringsEn = [
    "Aspiring SOC Analyst",
    "Cybersecurity Specialist",
    "Python & Automation Developer",
    "Blue Team & Threat Hunter",
    "SIEM & Log Analysis Enthusiast"
  ];

  let currentStrIdx = 0;
  let currentCharIdx = 0;
  let isDeleting = false;
  const typeDelay = 100;
  const eraseDelay = 40;
  const pauseDelay = 1800;

  function typeWriter() {
    const typewriterEl = document.getElementById('typewriter-text');
    if (!typewriterEl) return;

    const strings = currentLang === 'uz' ? typewriterStringsUz : typewriterStringsEn;
    const currentStr = strings[currentStrIdx % strings.length];

    if (isDeleting) {
      typewriterEl.textContent = currentStr.substring(0, currentCharIdx - 1);
      currentCharIdx--;
    } else {
      typewriterEl.textContent = currentStr.substring(0, currentCharIdx + 1);
      currentCharIdx++;
    }

    let nextSpeed = isDeleting ? eraseDelay : typeDelay;

    if (!isDeleting && currentCharIdx === currentStr.length) {
      nextSpeed = pauseDelay;
      isDeleting = true;
    } else if (isDeleting && currentCharIdx === 0) {
      isDeleting = false;
      currentStrIdx++;
      nextSpeed = 400;
    }

    setTimeout(typeWriter, nextSpeed);
  }

  // ==========================================
  // 5. LIVE SOC ALERT FEED SIMULATOR
  // ==========================================
  const alertTemplates = [
    {
      level: 'high',
      badge: 'ALERT: HIGH',
      msgUz: 'MITRE ATT&CK T1110.001 - SSH Brute-force hujumi (192.168.1.104)',
      msgEn: 'MITRE ATT&CK T1110.001 - SSH Brute-force detected from 192.168.1.104',
      actionUz: 'IP Blocked (Fail2Ban)',
      actionEn: 'IP Blocked (Fail2Ban)'
    },
    {
      level: 'warn',
      badge: 'WARN: SIEM',
      msgUz: 'Shubhali PowerShell Base64 buyrug‘i aniqlandi (T1059.001)',
      msgEn: 'Suspicious PowerShell Base64 execution identified (T1059.001)',
      actionUz: 'Triage In Progress',
      actionEn: 'Triage In Progress'
    },
    {
      level: 'info',
      badge: 'INFO: BOT',
      msgUz: 'Telegram AI Assistant: Yangi sessiya xavfsiz autentifikatsiya qilindi',
      msgEn: 'Telegram AI Assistant: New session authenticated securely via API',
      actionUz: 'Access Granted',
      actionEn: 'Access Granted'
    },
    {
      level: 'high',
      badge: 'ALERT: CRIT',
      msgUz: 'Tashqi port skanerlash (SYN Sweep) aniqlandi va to‘xtatildi',
      msgEn: 'External port scanning (SYN Sweep) detected and dropped by firewall',
      actionUz: 'Port Filtered',
      actionEn: 'Port Filtered'
    },
    {
      level: 'info',
      badge: 'INFO: SIEM',
      msgUz: 'Windows Event ID 4624 (Muvaffaqiyatli kirish) - Home-lab Node 01',
      msgEn: 'Windows Event ID 4624 (Successful Logon) - Home-lab Node 01',
      actionUz: 'Logged to Wazuh',
      actionEn: 'Logged to Wazuh'
    },
    {
      level: 'warn',
      badge: 'WARN: NET',
      msgUz: 'DNS Query anomal hajmi (Mumkin bo‘lgan DNS Tunneling tahlili)',
      msgEn: 'Anomalous DNS Query volume (Investigating possible DNS tunneling)',
      actionUz: 'Under Analysis',
      actionEn: 'Under Analysis'
    }
  ];

  function getFormattedTime() {
    const d = new Date();
    return d.toTimeString().split(' ')[0];
  }

  function addSocAlert(alertObj, isManual = false) {
    const feed = document.getElementById('soc-feed-container');
    if (!feed) return;

    const row = document.createElement('div');
    row.className = `soc-log-item level-${alertObj.level}`;

    const msg = currentLang === 'uz' ? alertObj.msgUz : alertObj.msgEn;
    const act = currentLang === 'uz' ? alertObj.actionUz : alertObj.actionEn;

    row.innerHTML = `
      <span class="log-time">[${getFormattedTime()}]</span>
      <span class="log-badge ${alertObj.level}">${alertObj.badge}</span>
      <span class="log-msg">${msg}</span>
      <span class="log-action">-> ${act}</span>
    `;

    feed.insertBefore(row, feed.firstChild);

    // Keep feed to max 8 items
    while (feed.children.length > 8) {
      feed.removeChild(feed.lastChild);
    }

    if (isManual) {
      playCyberTone('alert');
      showToast(currentLang === 'uz' ? 'Yangi xavfsizlik insidenti simulyatsiya qilindi!' : 'New security incident simulated!');
    }
  }

  // Periodic simulated events
  setInterval(() => {
    const rnd = alertTemplates[Math.floor(Math.random() * alertTemplates.length)];
    addSocAlert(rnd, false);
  }, 9000);

  // ==========================================
  // 6. INTERACTIVE TERMINAL (CLI) ENGINE
  // ==========================================
  const termCommands = {
    help: {
      desc: 'Mavjud barcha buyruqlar ro‘yxati / List all commands',
      exec: () => `
<div class="text-cyan">Mavjud buyruqlar ro‘yxati (Available commands):</div>
  <span class="text-green">whoami</span>       - Tizim egasi va mutaxassis profili
  <span class="text-green">about</span>        - Orifxon haqida batafsil ma'lumot
  <span class="text-green">skills</span>       - Texnik bilimlar, SOC vositalari va dasturlash
  <span class="text-green">projects</span>     - Barcha amaliy loyihalar va GitHub havolalari
  <span class="text-green">mitre</span>        - MITRE ATT&CK taktikalari bo‘yicha tushuncha
  <span class="text-green">scan</span>         - Port va tarmoq xavfsizligi mini-skaneri
  <span class="text-green">cat cv.txt</span>   - Rezyume matnli ko‘rinishi
  <span class="text-green">contact</span>      - Aloqa ma'lumotlari (Telefon, Telegram, Email)
  <span class="text-green">sudo hire</span>    - Maxsus taklif!
  <span class="text-green">clear</span>        - Terminal oynasini tozalash
`
    },
    whoami: {
      desc: 'Identifikatsiya / Identification',
      exec: () => `
<div><strong class="text-green">ORIFXON MA'RUFXONOV SHUKURXON O‘G‘LI</strong></div>
<div class="text-muted">Bo‘lajak SOC Analyst | Axborot Xavfsizligi Talabasi (3-kurs)</div>
<div class="text-cyan">O‘zbekiston xalqaro islomshunoslik akademiyasi</div>
<div>Holat: <span class="text-green">● AMALIYOT / JUNIOR LAVOZIMGA TAYYOR</span></div>
`
    },
    about: {
      desc: 'Orifxon haqida to‘liq ma’lumot',
      exec: () => `
<div><strong>ORIFXON MA'RUFXONOV:</strong></div>
<p class="text-muted">
Axborot xavfsizligi yo‘nalishida 3-kurs talabaman. Python avtomatlashtirish vositalari, 
Telegram botlar va web tizimlar yaratish bo‘yicha kuchli amaliy tajribam bor. 
Kiberxavfsizlik, xususan SOC monitoringi, log tahlili va insidentlarga javob berish (Incident Response) 
yo‘nalishlariga ixtisoslashib kelmoqdaman. Hozir tarmoq himoyasi, Linux/Windows xavfsizligi va 
SIEM tizimlari bo‘yicha home-lab amaliyotlarimni faol olib boryapman.
</p>
`
    },
    skills: {
      desc: 'Texnik ko‘nikmalar',
      exec: () => `
<div class="text-green">═══════ KIBERXAVFSIZLIK & SOC ═══════</div>
• Tarmoq: TCP/IP, DNS, HTTP/HTTPS, Portlar, Firewall asoslari
• OS Xavfsizligi: Linux (Ubuntu/Debian) & Windows xavfsizligi
• Monitoring: Log tahlili, Alertlarni tahlil qilish, SIEM asoslari
• Incident Response: Dastlabki tahlil (Triage), MITRE ATT&CK tushunchalari
<div class="text-cyan">═══════ DASTURLASH & VOSITALAR ═══════</div>
• Dasturlash: Python (Automation, Async, Scripting), C++, SQL, Bash asoslari
• Ma'lumotlar bazasi: PostgreSQL, MongoDB
• Vositalar: Git, GitHub, Telethon, Telegram Bot API
• Tillar: O‘zbek (Ona tili), Ingliz (A2-B1), Turk (A2)
`
    },
    projects: {
      desc: 'Loyihalar ro‘yxati',
      exec: () => `
<div class="text-cyan">Tanlangan Amaliy Loyihalar:</div>
1. <strong class="text-green">Shaxsiy Telegram AI Yordamchi</strong> [Python, Telethon, AI API]
   -> Kirishni nazorat qilish (RBAC), suhbat tarixi, avtomatik vazifalar.
2. <strong class="text-green">Yotoqxona Navbatchilik Boti</strong> [Python, Telegram Bot]
   -> Navbatchilik jadvallari va bildirishnomalarni avtomatlashtirish.
3. <strong class="text-green">Musiqa & Kontent Saqlash Boti</strong> [Python, Telegram]
   -> Cloud media saqlash va GitHub portfolio loyihasi.
4. <strong class="text-green">Ombor va Do‘kon Web Tizimlari</strong> [Web, PostgreSQL, MongoDB]
   -> Mahsulotlar, sotuvlar, QR-kod jarayonlari va xavfsiz autentifikatsiya.
5. <strong class="text-green">Tug‘ilgan Kun Tabriklash Boti</strong> [Python, Automation]
   -> Rejalashtirilgan shaxsiy xabarnomalar tizimi.
GitHub: <a href="https://github.com/orifxon05" target="_blank" class="text-cyan">github.com/orifxon05</a>
`
    },
    mitre: {
      desc: 'MITRE ATT&CK taktikalari',
      exec: () => `
<div class="text-green">[MITRE ATT&CK MATRIX RELEVANCE FOR SOC ANALYST]</div>
<span class="text-cyan">TA0001: Initial Access</span>      - Phishing, Exploit Public-Facing App
<span class="text-cyan">TA0002: Execution</span>           - Command & Scripting Interpreter (Python, PowerShell)
<span class="text-cyan">TA0003: Persistence</span>         - Scheduled Tasks, Account Creation
<span class="text-cyan">TA0004: Privilege Escalation</span>- Sudo rights misuse, Access token manipulation
<span class="text-cyan">TA0005: Defense Evasion</span>     - Obfuscated files, Log clearing
<span class="text-cyan">TA0006: Credential Access</span>   - Brute force, OS Credential dumping
<span class="text-cyan">TA0011: Command and Control</span> - Non-Standard Ports, Encrypted channels
<p class="text-muted">SOC Analyst vazifasi — har bir taktikadagi xatti-harakatlarni SIEM loglarida aniqlash va zararsizlantirishdir.</p>
`
    },
    scan: {
      desc: 'Mini xavfsizlik skaneri',
      exec: () => `
<div class="text-cyan">[STARTING LOCAL SECURITY SANITY CHECK]</div>
[+] Checking Host TLS Version: <span class="text-green">TLS 1.3 (Secure)</span>
[+] Checking Security Headers: <span class="text-green">X-Frame-Options: DENY, nosniff OK</span>
[+] Port 22 (SSH): <span class="text-amber">Key Authentication Only</span>
[+] Port 80/443 (HTTP/HTTPS): <span class="text-green">Active (SSL Encrypted)</span>
[+] SIEM Ingestion Daemon: <span class="text-green">ONLINE</span>
[+] Firewall Status: <span class="text-green">UFW / IPTables Rules Applied</span>
<div class="text-green">[✓] SCAN COMPLETE: All perimeter defenses operating at 100% integrity.</div>
`
    },
    'cat cv.txt': {
      desc: 'CV matn ko‘rinishi',
      exec: () => `
<pre style="color: #cbd5e1; font-family: monospace;">
======================================================
           ORIFXON MA'RUFXONOV SHUKURXON O‘G‘LI
         Axborot Xavfsizligi | Bo‘lajak SOC Analyst
======================================================
Tel: +998 94 571 17 50
Email: orifxonmarufxonov24@gmail.com
GitHub: github.com/orifxon05
Ta'lim: O‘zbekiston xalqaro islomshunoslik akademiyasi (3-kurs)
Kasbiy Maqsad: SOC, xavfsizlik monitoringi yoki incident response 
               bo‘yicha junior lavozim / amaliyot.
======================================================
</pre>
<p>To‘liq PDF nusxani yuklab olish uchun <a href="Orifxon_Marufxonov_CV.pdf" download class="text-green">Orifxon_Marufxonov_CV.pdf</a> havolasini bosing.</p>
`
    },
    contact: {
      desc: 'Aloqa ma’lumotlari',
      exec: () => `
<div class="text-green">Aloqa Kanallari (Contact Info):</div>
• Telefon: <a href="tel:+998945711750" class="text-cyan">+998 94 571 17 50</a>
• Email: <a href="mailto:orifxonmarufxonov24@gmail.com" class="text-cyan">orifxonmarufxonov24@gmail.com</a>
• Telegram: <a href="https://t.me/Orifxon_05" target="_blank" class="text-green">@Orifxon_05</a>
• Instagram: <a href="https://instagram.com/_sheeyh_9" target="_blank" class="text-purple">@_sheeyh_9</a>
• GitHub: <a href="https://github.com/orifxon05" target="_blank" class="text-cyan">github.com/orifxon05</a>
`
    },
    'sudo hire': {
      desc: 'Ishga taklif qilish maxsus buyrug‘i',
      exec: () => {
        playCyberTone('success');
        return `
<div style="background: rgba(0,255,157,0.15); border: 1px solid #00ff9d; padding: 12px; border-radius: 6px;">
  <h4 class="text-green" style="margin-bottom: 6px;">🎉 [ACCESS GRANTED]: OFERTA QABUL QILINDI!</h4>
  <p>Orifxon Ma'rufxonov sizning jamoangizga mas'uliyat bilan qo'shilishga va 
  SOC / Kiberxavfsizlik monitoringini yuqori darajada ta'minlashga tayyor!</p>
  <p class="text-cyan">Hoziroq bog'laning: 
    <a href="https://t.me/Orifxon_05" target="_blank" class="text-green">Telegram (@Orifxon_05)</a> | 
    <a href="tel:+998945711750" class="text-green">+998 94 571 17 50</a> | 
    <a href="mailto:orifxonmarufxonov24@gmail.com" class="text-green">Email</a>
  </p>
</div>
`;
      }
    }
  };

  function setupTerminal() {
    const termInput = document.getElementById('term-input');
    const termBody = document.getElementById('terminal-body');
    if (!termInput || !termBody) return;

    let cmdHistory = [];
    let historyIdx = -1;

    function runCommand(rawCmd) {
      const trimmed = rawCmd.trim();
      const promptLine = document.createElement('div');
      promptLine.className = 'term-output-line';
      promptLine.innerHTML = `<span class="term-prompt-user">visitor@soc-core</span>:<span class="term-prompt-path">~</span>$ ${escapeHtml(rawCmd)}`;
      termBody.appendChild(promptLine);

      if (!trimmed) {
        termBody.scrollTop = termBody.scrollHeight;
        return;
      }

      cmdHistory.push(trimmed);
      historyIdx = cmdHistory.length;

      const lower = trimmed.toLowerCase();

      if (lower === 'clear') {
        termBody.innerHTML = '';
        return;
      }

      const resLine = document.createElement('div');
      resLine.className = 'term-output-line';

      if (termCommands[lower]) {
        resLine.innerHTML = termCommands[lower].exec();
      } else {
        resLine.innerHTML = `<span class="text-amber">Buyruq topilmadi (Command not found): '${escapeHtml(trimmed)}'. Mavjud buyruqlarni ko'rish uchun <span class="text-green">'help'</span> deb yozing.</span>`;
      }

      termBody.appendChild(resLine);
      termBody.scrollTop = termBody.scrollHeight;
      playCyberTone('key');
    }

    termInput.addEventListener('keydown', (e) => {
      playCyberTone('key');
      if (e.key === 'Enter') {
        const val = termInput.value;
        termInput.value = '';
        runCommand(val);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (cmdHistory.length > 0 && historyIdx > 0) {
          historyIdx--;
          termInput.value = cmdHistory[historyIdx];
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIdx < cmdHistory.length - 1) {
          historyIdx++;
          termInput.value = cmdHistory[historyIdx];
        } else {
          historyIdx = cmdHistory.length;
          termInput.value = '';
        }
      }
    });

    // Make command chips clickable
    document.querySelectorAll('.cmd-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const cmd = chip.getAttribute('data-cmd');
        if (cmd) {
          termInput.value = cmd;
          termInput.focus();
          runCommand(cmd);
        }
      });
    });
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // ==========================================
  // 7. CANVAS PARTICLE RADAR CONSTELLATION
  // ==========================================
  function setupCanvasBackground() {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.floor(Math.min(w, 1400) / 22);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.8,
        color: Math.random() > 0.3 ? 'rgba(0, 255, 157, ' : 'rgba(0, 240, 255, '
      });
    }

    function renderCanvas() {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + '0.7)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 255, 157, ${0.15 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(renderCanvas);
    }

    requestAnimationFrame(renderCanvas);
  }

  // ==========================================
  // 8. PROJECT FILTER & MODAL DATA
  // ==========================================
  const projectDetailsData = {
    ai_bot: {
      titleUz: 'Shaxsiy Telegram AI Yordamchi (Security Automation)',
      titleEn: 'Personal Telegram AI Assistant (Security Automation)',
      badge: 'Python / Telethon / AI API',
      overviewUz: 'Foydalanuvchining shaxsiy vazifalarini avtomatlashtirish, xavfsiz autentifikatsiya, ruxsatlar nazorati (RBAC) va suhbatlar tarixini shifrlangan holatda boshqaruvchi tizim.',
      overviewEn: 'Personal task automation bot with role-based access control (RBAC), API rate-limiting, and structured conversation history handling.',
      highlightsUz: [
        'Kirishni qat’iy nazorat qilish: Faqat tasdiqlangan foydalanuvchi ID lari uchun ruxsat',
        'Telethon MTProto mijozi orqali sessiya ma’lumotlarini xavfsiz saqlash',
        'Sun’iy intellekt (AI API) integratsiyasi va xatoliklarni himoyalangan qayta ishlash',
        'Shaxsiy bildirishnomalar va avtomatik javoblar moduli'
      ],
      highlightsEn: [
        'Strict Access Control: Only whitelisted Telegram user IDs are authorized',
        'Secure session persistence using Telethon MTProto client',
        'Resilient AI API integration with robust rate-limiting and error handling',
        'Automated notifications and intelligent auto-responder module'
      ],
      repo: 'https://github.com/orifxon05'
    },
    soc_lab: {
      titleUz: 'SOC & SIEM Home-Lab Monitoring Tizimi',
      titleEn: 'SOC & SIEM Home-Lab Monitoring Environment',
      badge: 'SOC / SIEM / Linux / Log Analysis',
      overviewUz: 'Kiberxavfsizlik monitoringi uchun yaratilgan shaxsiy home-lab amaliyot muhiti. Tizim va tarmoq loglarini yig‘ish, shubhali faollikni tahlil qilish va MITRE ATT&CK taktikalari bo‘yicha alertlarni aniqlash.',
      overviewEn: 'Personal home-lab created for SOC monitoring practice: ingesting host and network logs, detecting anomalies, and mapping threats to MITRE ATT&CK.',
      highlightsUz: [
        'Syslog va Windows Event Logs tahlili (Event ID 4624, 4625, 4672 va b.)',
        'Tarmoq trafigini Wireshark/Nmap yordamida tahlil qilish va port skanerlashni aniqlash',
        'MITRE ATT&CK matritsasi asosida Brute-force va Privilege Escalation ssenariylarini tekshirish',
        'Blue Team mudofaa qoidalarini shakllantirish va insidentlarni dastlabki qayta ishlash (Triage)'
      ],
      highlightsEn: [
        'Syslog & Windows Event Log analysis (Event IDs 4624, 4625, 4672, etc.)',
        'Network traffic analysis with Wireshark/Nmap to detect unauthorized port sweeps',
        'Simulated Brute-Force and Privilege Escalation scenarios mapped to MITRE ATT&CK',
        'Blue Team defensive posture configuration and initial Incident Triage workflow'
      ],
      repo: 'https://github.com/orifxon05'
    },
    dorm_bot: {
      titleUz: 'Yotoqxona Navbatchilik Telegram Boti',
      titleEn: 'Dormitory Duty Automation Telegram Bot',
      badge: 'Python / Telegram Bot API / Cron',
      overviewUz: 'Talabalar turar joyidagi navbatchilik jadvallarini avtomatlashtirish, eslatmalar yuborish va intizomni monitoring qilish uchun ishlab chiqilgan bot.',
      overviewEn: 'Automation bot that manages rotational duty schedules, dispatches timed alerts, and keeps tracking records for dormitory residents.',
      highlightsUz: [
        'Navbatchilik jadvallarini avtomatik rotatsiya qilish algoritmi',
        'Har kuni belgilangan vaqtda mas’ul talabaga avtomatik bildirishnoma yuborish',
        'Admin paneli orqali ro‘yxatni tezkor tahrirlash va xatoliklarni oldini olish',
        'Sessiyalar va ma’lumotlarni xavfsiz saqlash'
      ],
      highlightsEn: [
        'Automated duty rotation algorithm eliminating human scheduling friction',
        'Scheduled notification delivery via cron-like background jobs',
        'Admin panel for secure list maintenance and status overrides',
        'Reliable data storage and fault-tolerant event loop handling'
      ],
      repo: 'https://github.com/orifxon05'
    },
    music_bot: {
      titleUz: 'Musiqa va Video Kontent Saqlash Boti',
      titleEn: 'Media & Audio Storage Telegram Bot',
      badge: 'Python / Media Streaming / GitHub',
      overviewUz: 'Foydalanuvchilar uchun audio va video kontentlarni qidirish, yuklab olish va Telegram bulutida xavfsiz saqlashga mo‘ljallangan portfolio loyihasi.',
      overviewEn: 'Portfolio project providing seamless search, downloading, and organized cloud streaming storage within Telegram.',
      highlightsUz: [
        'Katta hajmdagi media oqimlarini asinxron uzatish',
        'Kesh tizimi yordamida tezkor javob qaytarish',
        'Xavfsiz fayl tekshiruvi va noto‘g‘ri formatlarni bloklash',
        'GitHub portfolioda ochiq kodli arxitektura'
      ],
      highlightsEn: [
        'Asynchronous stream processing for high-bandwidth audio/video content',
        'In-memory caching layer for instant responses on frequent queries',
        'Input sanitation and validation against malicious file payloads',
        'Open-source architecture published on GitHub'
      ],
      repo: 'https://github.com/orifxon05'
    },
    store_web: {
      titleUz: 'Ombor va Do‘kon Web Tizimi',
      titleEn: 'Warehouse & Retail Web Management System',
      badge: 'Web / PostgreSQL / MongoDB / QR',
      overviewUz: 'Mahsulotlar katalogi, ombor qoldig‘i, kirim-chiqim hisoboti, QR-kod orqali mahsulot skanerlash va AI tavsiyalariga ega zamonaviy web platforma.',
      overviewEn: 'Full-stack inventory and retail management platform featuring inventory balance, QR scanning, and secure role-based access.',
      highlightsUz: [
        'PostgreSQL va MongoDB ma’lumotlar bazalari bilan optimallashtirilgan arxitektura',
        'QR-kod generatsiya qilish va mobil qurilmalarda tezkor skanerlash',
        'Xavfsiz sessiya boshqaruvi, parollarni xesh qilish (bcrypt) va SQL Injection himoyasi',
        'Sotuvlar analitikasi va AI tavsiyalar tizimi uchun poydevor'
      ],
      highlightsEn: [
        'Optimized dual-database architecture using PostgreSQL and MongoDB',
        'Dynamic QR generation and mobile-friendly fast scanning workflows',
        'Robust security: bcrypt password hashing, SQL injection defense, sanitization',
        'Sales reporting dashboard and foundation for AI predictive restocking'
      ],
      repo: 'https://github.com/orifxon05'
    },
    birthday_bot: {
      titleUz: 'Tug‘ilgan Kun Tabriklash Avtomatizatsiya Boti',
      titleEn: 'Personalized Birthday Automation Bot',
      badge: 'Python / Automation / Database',
      overviewUz: 'Taqvim sanalarini kuzatib boruvchi, shaxsiylashtirilgan tabrik matnlari va media fayllarni avtomatik tarzda jo‘natuvchi samaradorlik vositasi.',
      overviewEn: 'Automation utility that monitors upcoming calendar dates and dispatches personalized multimedia birthday messages automatically.',
      highlightsUz: [
        'Avtomatlashtirilgan kundalik tekshiruv va aniq vaqtda jo‘natish',
        'Shaxsiylashtirilgan shablonlar va media fayllarni biriktirish imkoniyati',
        'Xavfsiz ma’lumotlar saqlanishi va log yuritish',
        'Xatolik yuz berganda avtomatik qayta urinish (Retry logic)'
      ],
      highlightsEn: [
        'Automated daily heartbeat checks and pinpoint timed dispatching',
        'Template-based dynamic message rendering with rich attachments',
        'Reliable data logging and audit trail for sent messages',
        'Fault tolerance with automatic retry logic upon Telegram API errors'
      ],
      repo: 'https://github.com/orifxon05'
    }
  };

  function setupProjects() {
    // Filter tabs
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        playCyberTone('click');
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        projectCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Modal open
    const modalBackdrop = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-dynamic-content');
    const modalClose = document.getElementById('modal-close-btn');

    document.querySelectorAll('.btn-card-details').forEach(btn => {
      btn.addEventListener('click', () => {
        playCyberTone('click');
        const projKey = btn.getAttribute('data-project');
        const data = projectDetailsData[projKey];
        if (!data || !modalBody || !modalBackdrop) return;

        const isUz = currentLang === 'uz';
        const title = isUz ? data.titleUz : data.titleEn;
        const overview = isUz ? data.overviewUz : data.overviewEn;
        const highlights = isUz ? data.highlightsUz : data.highlightsEn;

        modalBody.innerHTML = `
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-green); margin-bottom: 8px;">[PROJECT_SPECIFICATION_V2.0]</div>
          <h2 style="font-size: 1.5rem; margin-bottom: 12px; color: var(--text-main);">${title}</h2>
          <div style="display: inline-block; font-family: var(--font-mono); font-size: 0.75rem; background: rgba(0, 240, 255, 0.1); color: var(--accent-cyan); border: 1px solid rgba(0, 240, 255, 0.25); padding: 4px 10px; border-radius: 4px; margin-bottom: 20px;">
            ${data.badge}
          </div>
          <div style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 24px;">
            ${overview}
          </div>
          <h3 style="font-size: 1.1rem; color: var(--accent-green); font-family: var(--font-mono); margin-bottom: 12px;">
            ${isUz ? 'Asosiy Texnik Xususiyatlar & Xavfsizlik:' : 'Key Technical Capabilities & Security:'}
          </h3>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 28px;">
            ${highlights.map(h => `
              <li style="display: flex; align-items: start; gap: 10px; color: var(--text-main); font-size: 0.9rem;">
                <span style="color: var(--accent-green); font-family: var(--font-mono);">[✓]</span>
                <span>${h}</span>
              </li>
            `).join('')}
          </ul>
          <div style="display: flex; gap: 14px; flex-wrap: wrap; border-top: 1px solid var(--border-subtle); padding-top: 20px;">
            <a href="${data.repo}" target="_blank" class="btn-primary" style="padding: 10px 20px; font-size: 0.85rem;">
              <span>GitHub Repozitoriy</span>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <button id="modal-inner-close" class="btn-secondary" style="padding: 10px 18px; font-size: 0.85rem;">
              ${isUz ? 'Yopish' : 'Close'}
            </button>
          </div>
        `;

        modalBackdrop.classList.add('active');

        document.getElementById('modal-inner-close')?.addEventListener('click', () => {
          modalBackdrop.classList.remove('active');
        });
      });
    });

    modalClose?.addEventListener('click', () => {
      modalBackdrop.classList.remove('active');
    });

    modalBackdrop?.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        modalBackdrop.classList.remove('active');
      }
    });
  }

  // ==========================================
  // 9. TOAST NOTIFICATIONS & COPY UTILITY
  // ==========================================
  function showToast(text) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span style="color: var(--accent-green); font-weight: bold;">[✓]</span>
      <span>${escapeHtml(text)}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  function setupCopyButtons() {
    document.querySelectorAll('[data-copy]').forEach(btn => {
      btn.addEventListener('click', () => {
        playCyberTone('click');
        const textToCopy = btn.getAttribute('data-copy');
        if (navigator.clipboard) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            showToast(currentLang === 'uz' ? `Nusxalandi: ${textToCopy}` : `Copied: ${textToCopy}`);
          });
        }
      });
    });
  }

  // ==========================================
  // 10. SOUND TOGGLE BUTTON
  // ==========================================
  function setupSoundToggle() {
    const soundBtn = document.getElementById('sound-toggle-btn');
    if (!soundBtn) return;

    function updateSoundUi() {
      soundBtn.setAttribute('title', soundEnabled ? 'Audio: ON' : 'Audio: OFF');
      soundBtn.innerHTML = soundEnabled
        ? `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`
        : `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
      soundBtn.style.color = soundEnabled ? 'var(--accent-green)' : 'var(--text-dim)';
    }

    updateSoundUi();

    soundBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      localStorage.setItem('om_sound', soundEnabled);
      updateSoundUi();
      if (soundEnabled) {
        initAudio();
        playCyberTone('success');
        showToast(currentLang === 'uz' ? 'Cyber ovoz effektlari yoqildi' : 'Cyber audio effects enabled');
      } else {
        showToast(currentLang === 'uz' ? 'Ovoz effektlari o‘chirildi' : 'Audio effects muted');
      }
    });
  }

  // ==========================================
  // 11. CONTACT FORM HANDLER
  // ==========================================
  function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      playCyberTone('success');

      const name = document.getElementById('form-name')?.value || '';
      const email = document.getElementById('form-email')?.value || '';
      const subject = document.getElementById('form-subject')?.value || '';
      const msg = document.getElementById('form-msg')?.value || '';

      const bodyText = `Ism: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AXabar:%0D%0A${encodeURIComponent(msg)}`;
      const mailtoUrl = `mailto:orifxonmarufxonov24@gmail.com?subject=${encodeURIComponent(subject)}&body=${bodyText}`;

      showToast(currentLang === 'uz' ? 'Xabar tayyorlandi! Email mijozi ochilmoqda...' : 'Message prepared! Opening email client...');

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 700);
    });
  }

  // ==========================================
  // 12. NAVBAR SCROLL & MOBILE MENU
  // ==========================================
  function setupNavigation() {
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    });

    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    mobileToggle?.addEventListener('click', () => {
      playCyberTone('click');
      navLinks?.classList.toggle('open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks?.classList.remove('open');
      });
    });
  }

  // ==========================================
  // 13. DOM READY INITIALIZATION
  // ==========================================
  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    setupNavigation();
    setupSoundToggle();
    typeWriter();
    setupCanvasBackground();
    setupTerminal();
    setupProjects();
    setupCopyButtons();
    setupContactForm();

    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        playCyberTone('click');
        const lang = btn.getAttribute('data-lang');
        applyLanguage(lang);
      });
    });

    // Simulate incident button
    document.getElementById('btn-simulate-alert')?.addEventListener('click', () => {
      const rnd = alertTemplates[Math.floor(Math.random() * alertTemplates.length)];
      addSocAlert(rnd, true);
    });

    // Initial first simulated alert in SOC feed
    addSocAlert(alertTemplates[0], false);
    addSocAlert(alertTemplates[2], false);
    addSocAlert(alertTemplates[4], false);
  });

})();
