/**
 * translations.js
 * All site copy in English (en) and Bengali (bn).
 * Bengali uses standard Unicode Bangla script.
 */

export const translations = {
  en: {
    // ── Navbar ──────────────────────────────────────
    nav: {
      services:  'Services',
      about:     'About',
      projects:  'Projects',
      whyUs:     'Why Us',
      contact:   'Contact',
      getQuote:  'Get a Quote',
    },

    // ── Hero ────────────────────────────────────────
    hero: {
      eyebrow:    'Kolkata, WB · Est. 2006',
      line1:      'WE BUILD',
      line2:      'STEEL',
      line3:      'THAT LASTS.',
      sub:        'Metal fabrication, collapsible gates, roof shades, metal gates & windows — engineered to precision, installed with care.',
      ctaPrimary: 'Get Free Quote',
      ctaSecond:  'Our Work',
      pills: [
        'Metal Fabrication',
        'Collapsible Gates',
        'Roof Shades',
        'Metal Gates',
        'Metal Windows',
      ],
    },

    // ── Services ────────────────────────────────────
    services: {
      tag:     '— What We Do —',
      title:   'Our',
      titleAccent: 'Services',
      sub:     'From raw steel to finished installation — five specialisations, one workshop, zero compromise.',
      getQuote: 'Get Quote',
      items: [
        {
          id: 'fabrication',
          title:   'Metal Fabrication',
          tagline: 'Crafted from raw steel',
          desc:    'Custom structural and decorative metalwork built to exacting tolerances. We handle everything from heavy industrial frames to bespoke architectural elements.',
          tags:    ['Structural', 'Architectural', 'Custom'],
        },
        {
          id: 'gate',
          title:   'Collapsible Gates',
          tagline: 'Security meets elegance',
          desc:    'Heavy-duty collapsible and sliding security gates for commercial, industrial, and residential properties. Manual or motorised options available.',
          tags:    ['Sliding', 'Motorised', 'Security'],
        },
        {
          id: 'roofshade',
          title:   'Roof Shades & Canopies',
          tagline: 'Cover more ground',
          desc:    'Engineered metal roof shades and canopy structures for car parks, walkways, commercial plazas, and industrial facilities. All weather rated.',
          tags:    ['Canopy', 'Car Park', 'Walkway'],
        },
        {
          id: 'metalgate',
          title:   'Metal Gates',
          tagline: 'First impression, lasting defence',
          desc:    'Ornamental and heavy-duty driveway and entrance gates. Powder-coated finishes in any RAL colour. Automated access systems fully integrated.',
          tags:    ['Driveway', 'Ornamental', 'Automated'],
        },
        {
          id: 'windows',
          title:   'Metal Windows & Grilles',
          tagline: 'Light, ventilation, security',
          desc:    'Casement, louvre, and fixed metal window frames plus decorative grilles. Galvanised or stainless steel. Designed for tropical and coastal environments.',
          tags:    ['Casement', 'Louvre', 'Grilles'],
        },
        {
          id: 'welding',
          title:   'Custom Welding & Repair',
          tagline: 'Every weld counts',
          desc:    'MIG, TIG, and arc welding for structural repairs, custom fabrication, and on-site welding. Certified welders with 15+ years experience.',
          tags:    ['MIG/TIG', 'On-site', 'Repair'],
        },
      ],
    },

    // ── About ───────────────────────────────────────
    about: {
      tag:    '— Who We Are —',
      title:  'Steel in Our',
      titleAccent: 'DNA.',
      body1:  'SteelCraft was built in a small welding shed in Tejgaon, Dhaka in 2006 by a team of three fabricators who refused to cut corners. Today we operate a 12,000 sq ft workshop with 40 skilled craftsmen and a full design office.',
      body2:  'We serve residential homeowners, commercial developers, and industrial contractors across Bangladesh — delivering every project on schedule, to spec, and with a 5-year workmanship guarantee.',
      cta:    'Work With Us',
      creds: [
        { val: '18+', lbl: 'Years'     },
        { val: '40',  lbl: 'Craftsmen' },
        { val: '5yr', lbl: 'Warranty'  },
      ],
      badgeLbl: 'sq ft Workshop',
      whyUs: [
        { icon: '⚡', title: 'Fast Turnaround',   desc: 'Most projects quoted within 24 hours and delivered on schedule, every time.' },
        { icon: '🔩', title: 'Premium Materials', desc: 'Only certified structural steel, stainless, and aluminium — no compromise on grade.' },
        { icon: '📐', title: 'Precision First',   desc: 'Every measurement double-checked. Every weld inspected before it leaves the workshop.' },
        { icon: '🌐', title: 'Full-Service',      desc: 'Design, fabricate, deliver, and install. One team, zero handoff gaps.' },
      ],
    },

    // ── Projects ────────────────────────────────────
    projects: {
      tag:   '— Portfolio —',
      title: 'Recent',
      titleAccent: 'Projects',
      sub:   'A selection of work we\'re proud of — from residential gates to industrial canopies.',
      filters: ['All', 'Metal Fabrication', 'Collapsible Gate', 'Roof Shade', 'Metal Gate', 'Metal Windows'],
      empty:  'No projects in this category yet. Check back soon.',
      items: [
        { title: 'Commercial Complex Gate',  category: 'Collapsible Gate',    location: 'Dhaka, BD' },
        { title: 'Industrial Roof Canopy',   category: 'Roof Shade',          location: 'Chittagong, BD' },
        { title: 'Residential Driveway Gate',category: 'Metal Gate',          location: 'Sylhet, BD' },
        { title: 'Factory Window Grilles',   category: 'Metal Windows',       location: 'Gazipur, BD' },
        { title: 'Car Park Shade Structure', category: 'Roof Shade',          location: 'Dhaka, BD' },
        { title: 'Steel Security Grilles',   category: 'Metal Fabrication',   location: 'Narayanganj, BD' },
      ],
    },

    // ── Stats ───────────────────────────────────────
    stats: {
      items: [
        { value: '18+',    label: 'Years Experience',  icon: '🏆' },
        { value: '3,200+', label: 'Projects Delivered', icon: '📐' },
        { value: '500+',   label: 'Happy Clients',      icon: '🤝' },
        { value: '100%',   label: 'Site Safety Record', icon: '🛡️' },
      ],
    },

    // ── Testimonials ────────────────────────────────
    testimonials: {
      tag:   '— Client Voices —',
      title: 'What Clients',
      titleAccent: 'Say',
      items: [
        { name: 'Rahman Enterprises', role: 'Commercial Client',  quote: 'SteelCraft delivered our entire gate and grille system two weeks ahead of schedule. Outstanding quality.' },
        { name: 'Habib Construction', role: 'Industrial Partner', quote: 'We\'ve used them on 12 projects. Consistent quality, fair pricing, and zero call-backs.' },
        { name: 'Rezwan Architects',  role: 'Design Firm',        quote: 'They bring our steel concepts to life exactly as drawn. The craftsmanship is impeccable.' },
      ],
    },

    // ── Contact ─────────────────────────────────────
    contact: {
      tag:         '— Get in Touch —',
      title:       'Let\'s Build',
      titleAccent: 'Together.',
      headerSub:   'Tell us about your project. We\'ll quote it, plan it, and build it — on time and to spec.',
      mapLabel:    'Find Our Workshop',
      mapLink:     'Open in Google Maps ↗',
      details: [
        { icon: '📍', label: 'Workshop', val: 'Dakshin Kalikapur(Near Jol Tank), Dakshin Barasat, 743372' },
        { icon: '📞', label: 'Phone',    val: '+91 9163633215' },
        { icon: '✉️', label: 'Email',    val: 'contact2saradaengineeringworks@gmail.com' },
        { icon: '🕐', label: 'Hours',    val: 'Mon–Sat: 8a.m. – 8p.m.' },
      ],
      form: {
        title:       'Request a Free Quote',
        sub:         'Fields marked',
        subReq:      'are required.',
        nameLbl:     'Full Name',
        phoneLbl:    'Phone / WhatsApp',
        namePh:      'Your full name',
        phonePh:     '+880 1XXX-XXXXXX',
        serviceLbl:  'Service Required',
        servicePh:   '— Select a service —',
        msgLbl:      'Project Details',
        msgPh:       'Describe your project — size, material preference, timeline, location...',
        submit:      'Send Quote Request',
        note:        'Average response time:',
        noteStrong:  'under 4 hours',
        noteSuffix:  'during business days.',
        services: [
          'Metal Fabrication',
          'Collapsible Gate',
          'Roof Shade / Canopy',
          'Metal Gate',
          'Metal Windows & Grilles',
          'Custom Welding & Repair',
          'Other',
        ],
      },
      success: {
        title:    'Message Received!',
        sub:      'Our team will get back to you within 4 business hours. Check your phone for a confirmation SMS.',
        btnAgain: 'Send Another Enquiry',
      },
    },

    // ── Footer ──────────────────────────────────────
    footer: {
      ctaTitle:  'Ready to start your project?',
      ctaSub:    'Get a free no-obligation quote within 24 hours.',
      ctaBtn:    'Get Free Quote →',
      tagline:   'Precision metal fabrication, gates, roof shades & windows. Built to last — since 2006.',
      colServices: 'Services',
      colNav:      'Navigation',
      colContact:  'Contact',
      copy:        'MAA SARADA ENGINEERING WORKS. All rights reserved.',
      legal: ['Privacy Policy', 'Terms of Service', 'Sitemap'],
    },
  },

  // ════════════════════════════════════════════════════════════════════
  //  Bengali (bn)
  // ════════════════════════════════════════════════════════════════════
  bn: {
    nav: {
      services:  'সেবাসমূহ',
      about:     'আমাদের সম্পর্কে',
      projects:  'প্রকল্পসমূহ',
      whyUs:     'কেন আমরা',
      contact:   'যোগাযোগ',
      getQuote:  'কোটেশন নিন',
    },

    hero: {
      eyebrow:    'কলকাতা, পঃ বঃ, ২০১৫',
      line1:      'মজবুত',
      line2:      'ইস্পাত নির্মাণই',
      line3:      'আমাদের অঙ্গীকার।',
      sub:        'মেটাল ফ্যাব্রিকেশন থেকে শুরু করে মজবুত গেট ও জানালা — নিখুঁত নকশা আর সঠিক নিপুণতায় আমরা পৌঁছে দিই আপনার কাছে।',
      ctaPrimary: 'বিনামূল্যে কোটেশন',
      ctaSecond:  'আমাদের কাজ',
      pills: [
        'ধাতব তৈরি',
        'কলাপসেবল গেট',
        'ছাদের শেড',
        'লোহার গেট',
        'লোহার জানলা',
      ],
    },

    services: {
      tag:         '— আমরা যা করি —',
      title:       'আমাদের',
      titleAccent: 'সেবাসমূহ',
      sub:         'কাঁচা ইস্পাত থেকে সম্পূর্ণ স্থাপনা পর্যন্ত — পাঁচটি বিশেষত্ব, একটি কর্মশালা, কোনো আপস নেই।',
      getQuote:    'কোটেশন নিন',
      items: [
        {
          id: 'fabrication',
          title:   'ধাতব তৈরি',
          tagline: 'কাঁচা ইস্পাত থেকে তৈরি',
          desc:    'নির্ভুল মাপে কাস্টম কাঠামোগত ও সজ্জামূলক ধাতব কাজ। ভারী শিল্প কাঠামো থেকে শুরু করে স্থাপত্যিক উপাদান পর্যন্ত সবই আমরা সামলাই।',
          tags:    ['কাঠামোগত', 'স্থাপত্যিক', 'কাস্টম'],
        },
        {
          id: 'gate',
          title:   'ভাঁজযোগ্য গেট',
          tagline: 'নিরাপত্তা ও সৌন্দর্যের মিলন',
          desc:    'বাণিজ্যিক, শিল্প ও আবাসিক সম্পত্তির জন্য ভারী শুল্ক ভাঁজযোগ্য ও স্লাইডিং নিরাপত্তা গেট। ম্যানুয়াল বা মোটরচালিত বিকল্প উপলব্ধ।',
          tags:    ['স্লাইডিং', 'মোটরচালিত', 'নিরাপত্তা'],
        },
        {
          id: 'roofshade',
          title:   'ছাদ শেড ও ক্যানোপি',
          tagline: 'আরও বেশি আচ্ছাদন',
          desc:    'পার্কিং, হাঁটার পথ, বাণিজ্যিক চত্বর ও শিল্প স্থাপনার জন্য ধাতব ছাদ শেড। সব আবহাওয়া উপযোগী।',
          tags:    ['ক্যানোপি', 'পার্কিং', 'হাঁটার পথ'],
        },
        {
          id: 'metalgate',
          title:   'ধাতব গেট',
          tagline: 'প্রথম ছাপ, স্থায়ী সুরক্ষা',
          desc:    'অলংকারমূলক ও ভারী শুল্ক ড্রাইভওয়ে প্রবেশদ্বার গেট। যেকোনো RAL রঙে পাউডার কোটেড। স্বয়ংক্রিয় প্রবেশ ব্যবস্থা সম্পূর্ণ একত্রিত।',
          tags:    ['ড্রাইভওয়ে', 'অলংকারমূলক', 'স্বয়ংক্রিয়'],
        },
        {
          id: 'windows',
          title:   'ধাতব জানালা ও গ্রিল',
          tagline: 'আলো, বায়ুচলাচল, নিরাপত্তা',
          desc:    'ক্যাসমেন্ট, লুভার ও স্থির ধাতব জানালার ফ্রেম এবং সজ্জামূলক গ্রিল। গ্যালভানাইজড বা স্টেইনলেস স্টিল। ক্রান্তীয় ও উপকূলীয় পরিবেশের জন্য ডিজাইন করা।',
          tags:    ['ক্যাসমেন্ট', 'লুভার', 'গ্রিল'],
        },
        {
          id: 'welding',
          title:   'কাস্টম ওয়েল্ডিং ও মেরামত',
          tagline: 'প্রতিটি ওয়েল্ড গুরুত্বপূর্ণ',
          desc:    'কাঠামোগত মেরামত, কাস্টম তৈরি ও সাইটে ওয়েল্ডিংয়ের জন্য MIG, TIG ও আর্ক ওয়েল্ডিং। ১৫+ বছরের অভিজ্ঞতাসম্পন্ন সার্টিফাইড ওয়েল্ডার।',
          tags:    ['MIG/TIG', 'সাইটে', 'মেরামত'],
        },
      ],
    },

    about: {
      tag:         '— আমরা কারা —',
      title:       'ইস্পাল আমাদের',
      titleAccent: 'রক্তে।',
      body1:       'স্টিলক্রাফট ২০০৬ সালে তেজগাঁও, ঢাকায় একটি ছোট ওয়েল্ডিং শেডে তিনজন ফ্যাব্রিকেটর দ্বারা প্রতিষ্ঠিত হয়েছিল যারা মান নিয়ে আপোস করতে অস্বীকার করেছিলেন। আজ আমরা ৪০ জন দক্ষ কারিগর এবং একটি পূর্ণ ডিজাইন অফিস সহ ১২,০০০ বর্গ ফুটের কর্মশালা পরিচালনা করি।',
      body2:       'আমরা সারা বাংলাদেশে আবাসিক গৃহস্বামী, বাণিজ্যিক ডেভেলপার এবং শিল্প ঠিকাদারদের সেবা দিই — প্রতিটি প্রকল্প সময়মতো, নির্ধারিত মান অনুযায়ী এবং ৫ বছরের কারিগরি গ্যারান্টি সহ।',
      cta:         'আমাদের সাথে কাজ করুন',
      creds: [
        { val: '১৮+', lbl: 'বছর'       },
        { val: '৪০',  lbl: 'কারিগর'    },
        { val: '৫বছ', lbl: 'ওয়ারেন্টি' },
      ],
      badgeLbl: 'বর্গ ফুট কর্মশালা',
      whyUs: [
        { icon: '⚡', title: 'দ্রুত কাজ',        desc: 'বেশিরভাগ প্রকল্প ২৪ ঘণ্টার মধ্যে কোটেশন দেওয়া হয় এবং সময়মতো সরবরাহ করা হয়।' },
        { icon: '🔩', title: 'উচ্চমানের উপকরণ', desc: 'শুধুমাত্র সার্টিফাইড কাঠামোগত স্টিল, স্টেইনলেস ও অ্যালুমিনিয়াম — মানের বিষয়ে কোনো আপোস নেই।' },
        { icon: '📐', title: 'নির্ভুলতা প্রথম',  desc: 'প্রতিটি পরিমাপ দুবার যাচাই করা হয়। কর্মশালা ছাড়ার আগে প্রতিটি ওয়েল্ড পরিদর্শন করা হয়।' },
        { icon: '🌐', title: 'সম্পূর্ণ সেবা',    desc: 'ডিজাইন, তৈরি, সরবরাহ ও স্থাপনা। একটি দল, শূন্য ব্যবধান।' },
      ],
    },

    projects: {
      tag:         '— পোর্টফোলিও —',
      title:       'সাম্প্রতিক',
      titleAccent: 'প্রকল্পসমূহ',
      sub:         'আমাদের গর্বের কাজের একটি নির্বাচন — আবাসিক গেট থেকে শিল্প ক্যানোপি পর্যন্ত।',
      filters:     ['সব', 'ধাতব তৈরি', 'ভাঁজযোগ্য গেট', 'ছাদ শেড', 'ধাতব গেট', 'ধাতব জানালা'],
      empty:       'এই বিভাগে এখনও কোনো প্রকল্প নেই। শীঘ্রই আসছে।',
      items: [
        { title: 'বাণিজ্যিক কমপ্লেক্স গেট', category: 'ভাঁজযোগ্য গেট', location: 'ঢাকা, বিডি' },
        { title: 'শিল্প ছাদ ক্যানোপি',       category: 'ছাদ শেড',        location: 'চট্টগ্রাম, বিডি' },
        { title: 'আবাসিক ড্রাইভওয়ে গেট',    category: 'ধাতব গেট',       location: 'সিলেট, বিডি' },
        { title: 'কারখানা জানালার গ্রিল',     category: 'ধাতব জানালা',    location: 'গাজীপুর, বিডি' },
        { title: 'পার্কিং শেড কাঠামো',        category: 'ছাদ শেড',        location: 'ঢাকা, বিডি' },
        { title: 'স্টিল সিকিউরিটি গ্রিল',   category: 'ধাতব তৈরি',      location: 'নারায়ণগঞ্জ, বিডি' },
      ],
    },

    stats: {
      items: [
        { value: '১৮+',    label: 'বছরের অভিজ্ঞতা',     icon: '🏆' },
        { value: '৩,২০০+', label: 'প্রকল্প সম্পন্ন',    icon: '📐' },
        { value: '৫০০+',   label: 'সন্তুষ্ট গ্রাহক',    icon: '🤝' },
        { value: '১০০%',   label: 'সাইট নিরাপত্তা রেকর্ড', icon: '🛡️' },
      ],
    },

    testimonials: {
      tag:         '— গ্রাহকদের মতামত —',
      title:       'গ্রাহকরা কী',
      titleAccent: 'বলেন',
      items: [
        { name: 'রহমান এন্টারপ্রাইজ', role: 'বাণিজ্যিক ক্লায়েন্ট',   quote: 'স্টিলক্রাফট আমাদের সম্পূর্ণ গেট ও গ্রিল সিস্টেম নির্ধারিত সময়ের দুই সপ্তাহ আগে সরবরাহ করেছে। অসাধারণ মান।' },
        { name: 'হাবিব কনস্ট্রাকশন', role: 'শিল্প অংশীদার',           quote: 'আমরা ১২টি প্রকল্পে তাদের ব্যবহার করেছি। ধারাবাহিক মান, ন্যায্য মূল্য এবং শূন্য কল-ব্যাক।' },
        { name: 'রেজওয়ান আর্কিটেক্টস', role: 'ডিজাইন ফার্ম',          quote: 'তারা আমাদের স্টিলের ধারণাগুলো ঠিক যেভাবে আঁকা হয়েছে সেভাবে জীবন্ত করে তোলে। কারিগরি দক্ষতা অতুলনীয়।' },
      ],
    },

    contact: {
      tag:         '— যোগাযোগ করুন —',
      title:       'একসাথে',
      titleAccent: 'গড়ি।',
      headerSub:   'আপনার প্রকল্প সম্পর্কে বলুন। আমরা এটি কোট করব, পরিকল্পনা করব এবং তৈরি করব — সময়মতো এবং নির্ধারিত মান অনুযায়ী।',
      mapLabel:    'আমাদের কর্মশালা খুঁজুন',
      mapLink:     'গুগল ম্যাপে খুলুন ↗',
      details: [
        { icon: '📍', label: 'কর্মশালা', val: 'দক্ষিণ কালিকাপুর(জল ট্যাঙ্ক এর কাছে), দক্ষিণ বারাশত, ৭৪৩৩৭২' },
        { icon: '📞', label: 'ফোন',      val: '+৯১ ৯১৬৩৬৩৩২১৫' },
        { icon: '✉️', label: 'ইমেইল',    val: 'contact2saradaengineeringworks@gmail.com' },
        { icon: '🕐', label: 'সময়',      val: 'সোম- শনি: সকাল ৮টা- রাত ৮টা' },
      ],
      form: {
        title:      'বিনামূল্যে কোটেশন নিন',
        sub:        'চিহ্নিত ফিল্ড',
        subReq:     'আবশ্যিক।',
        nameLbl:    'পুরো নাম',
        phoneLbl:   'ফোন / হোয়াটসঅ্যাপ',
        namePh:     'আপনার পুরো নাম',
        phonePh:    '+৮৮০ ১XXX-XXXXXX',
        serviceLbl: 'প্রয়োজনীয় সেবা',
        servicePh:  '— একটি সেবা বেছে নিন —',
        msgLbl:     'প্রকল্পের বিবরণ',
        msgPh:      'আপনার প্রকল্প বর্ণনা করুন — আকার, উপকরণ পছন্দ, সময়সীমা, অবস্থান...',
        submit:     'কোটেশন পাঠান',
        note:       'গড় প্রতিক্রিয়া সময়:',
        noteStrong: '৪ ঘণ্টার মধ্যে',
        noteSuffix: 'কর্মদিবসে।',
        services: [
          'ধাতব তৈরি',
          'ভাঁজযোগ্য গেট',
          'ছাদ শেড / ক্যানোপি',
          'ধাতব গেট',
          'ধাতব জানালা ও গ্রিল',
          'কাস্টম ওয়েল্ডিং ও মেরামত',
          'অন্যান্য',
        ],
      },
      success: {
        title:    'বার্তা পাওয়া গেছে!',
        sub:      'আমাদের দল ৪ কর্মঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করবে। নিশ্চিতকরণ এসএমএসের জন্য আপনার ফোন দেখুন।',
        btnAgain: 'আরেকটি অনুসন্ধান পাঠান',
      },
    },

    footer: {
      ctaTitle:    'আপনার প্রকল্প শুরু করতে প্রস্তুত?',
      ctaSub:      '২৪ ঘণ্টার মধ্যে বিনামূল্যে কোটেশন পান।',
      ctaBtn:      'বিনামূল্যে কোটেশন →',
      tagline:     'নির্ভুল ধাতব তৈরি, গেট, ছাদ শেড ও জানালা। টেকসইভাবে তৈরি — ২০০৬ থেকে।',
      colServices: 'সেবাসমূহ',
      colNav:      'নেভিগেশন',
      colContact:  'যোগাযোগ',
      copy:        'মা সারদা ইঞ্জিনিয়ারিং ওয়ার্কস। সর্বস্বত্ব সংরক্ষিত।',
      legal:       ['গোপনীয়তা নীতি', 'সেবার শর্তাবলী', 'সাইটম্যাপ'],
    },
  },
};
