export const profile = {
  fullName: "Maudatul Mufidah",
  shortName: "Fida",
  role: "Information Technology Student",
  headline: "Web n Mobile Developer Enthusiast",
  location: "Jawa Timur, Indonesia",
  email: "mauddaff@gmail.com", // Isi email aktif jika ingin menampilkannya di website.
  // Gunakan format internasional tanpa tanda +, spasi, atau strip. Contoh: 6281234567890
  whatsappNumber: "62881036332193",
  whatsappMessage: "Halo Fida! Saya melihat portofolio kamu dan ingin berdiskusi.",
  photo: "/profile.jpeg", 
  summary:
    "Mahasiswa D3 Teknologi Informasi yang tertarik membangun website dan aplikasi sederhana yang fungsional, mudah digunakan, serta bermanfaat. Saat ini terus mengembangkan kemampuan di bidang web development dan teknologi digital.",
  about:
    "Saya sedang menempuh pendidikan D3 Teknologi Informasi di Politeknik Negeri Madiun. Perjalanan belajar saya dimulai dari ketertarikan pada dunia web dan keamanan digital, lalu berkembang ke pengembangan aplikasi, database, serta teknologi yang bisa menyelesaikan masalah sehari-hari. Saya senang belajar lewat praktik, mengeksplorasi hal baru, dan mengubah ide menjadi produk digital yang bisa digunakan.",
};

export const skills = [
  { name: "HTML & CSS", level: "Comfortable", type: "core" },
  { name: "JavaScript", level: "Fundamental", type: "core" },
  { name: "Bootstrap", level: "Comfortable", type: "core" },
  { name: "PHP & MySQL", level: "Fundamental", type: "core" },
  { name: "React", level: "Currently learning", type: "learning" },
  { name: "Laravel", level: "Currently learning", type: "learning" },
  { name: "Flutter & Kotlin", level: "Currently learning", type: "learning" },
  { name: "Python & Flask", level: "Fundamental", type: "learning" },
  { name: "PostgreSQL", level: "Fundamental", type: "learning" },
];

export const projects = [
  {
    number: "01",
    title: "IngatBayar",
    category: "Personal Project · Web App",
    description:
      "Aplikasi pengingat tagihan dengan fitur tambah, ubah, hapus, pencarian, filter, dan dark mode. Data disimpan di browser menggunakan localStorage.",
    stack: ["Bootstrap", "Vanilla JS", "localStorage"],
    tone: "pink",
    icon: "◷",

    image: "/project/project1.png",
    url: "https://bill-reminder-mauda.netlify.app/",
  },
  {
    number: "02",
    title: "Desain UI/UX Aplikasi Pembayaran",
    category: "Academy Group Project · UI/UX",
    description:
      "Merancang alur pembayaran dan antarmuka (mockup & prototype) menggunakan Figma berdasarkan riset kebutuhan pengguna dan skenario penggunaan.",
    stack: ["UI/UX", "Figma", "Medium"],
    tone: "sky",
    icon: "↗",

    image: "/project/project2.png",
    url: "https://medium.com/@mauddaff/merancang-finease-pengalaman-pembayaran-digital-yang-aman-nyaman-dan-terkontrol-13ca1f382e8a",
  },
  {
    number: "03",
    title: "Library Visitor System",
    category: "Academic Project · Web System",
    description:
      "Sistem pencatatan pengunjung perpustakaan sebagai latihan pengolahan data dan integrasi database.",
    stack: ["PHP", "MySQL", "Bootstrap"],
    tone: "mint",
    icon: "▤",

    image: "/project/project3.png",
    url:"",
  },
  {
    number: "04",
    title: "ReidCourt",
    category: "Academy Group Project · Website",
    description:
      "Website pemesanan lapangan badminton dan menyediakan persewaan shuttlecoock dan raket di kabupaten Madiun yang terintegrasi dengan MidTrans.",
    stack: ["Laravel", "MySQL", "MidTrans"],
    tone: "mint",
    icon: "⌁",

    image:"/project/project4.png",
    url:"",
  },
  {
    number: "05",
    title: "GAS Kita",
    category: "Academy Group Project · Mobile App",
    description:
      "Mobile Application yang menyajikan informasi ketersediaan kebutuhan GAS Elpigi dengan tampilan yang sederhana",
    stack: ["Kotlin"],
    tone: "butter",
    icon: "⌁",

    image:"/project/project5.png",
    url:"",
  },
  {
    number: "06",
    title: "KampusFound",
    category: "Academy Group Project · Mobile App",
    description:
      "Aplikasi yang digunakan untuk mencari dan melaporkan barang yang hilang disekitar Kampus.",
    stack: ["Flutter", ],
    tone: "sky",
    icon: "⌁",

    image:"/project/project6.png",
    url:"",
  },
];

export const experiences = [
  {
    date: "Jan – Jun 2026",
    title: "IT Intern",
    company: "Thunderlabs",
    description:
      "Berkolaborasi dalam pengembangan SahilApp, Sahil Dashboard, dan VernonEdu. Terlibat dalam implementasi komponen UI, penyempurnaan halaman, serta pengujian fitur seperti profil, presensi, jadwal, perizinan, dan data administrasi.",
  },
];

export const education = [
  {
    period: "Saat ini",
    title: "D3 Teknologi Informasi",
    place: "Politeknik Negeri Madiun",
    note: "Diploma III · Semester 5",
  },
];

export const certificates = [
  "BNSP — Junior Web Developer (VSGA Kominfo, 2025)",
  "IBM SkillsBuild × Hacktiv8 — Code Generation & Optimization Using IBM Granite (Agt 2025)",
  "AWS re/Start Graduate Batch 15 — (Sep, 2026) ",
  "Semifinalis Cyber Security PORSIMAPTAR 2026"
];
