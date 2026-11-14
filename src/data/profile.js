export const profile = {
  fullName: "Maudatul Mufidah",
  shortName: "Fida",
  role: "Information Technology Student",
  headline: "Web Developer Enthusiast",
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
    tone: "butter",
    icon: "◷",
  },
  {
    number: "02",
    title: "Job Seeker Portal",
    category: "Academic Project · CRUD",
    description:
      "Website sederhana untuk mengelola informasi lowongan dan data pencari kerja dengan operasi CRUD.",
    stack: ["PHP", "MySQL", "HTML/CSS"],
    tone: "sky",
    icon: "↗",
  },
  {
    number: "03",
    title: "Library Visitor System",
    category: "Academic Project · Web System",
    description:
      "Sistem pencatatan pengunjung perpustakaan sebagai latihan pengolahan data dan integrasi database.",
    stack: ["PHP", "MySQL", "Bootstrap"],
    tone: "pink",
    icon: "▤",
  },
  {
    number: "04",
    title: "Tourism Website",
    category: "Academic Project · Website",
    description:
      "Website informasi wisata yang menyajikan destinasi dan informasi pendukung dalam tampilan yang mudah dijelajahi.",
    stack: ["HTML", "CSS", "JavaScript"],
    tone: "mint",
    icon: "⌁",
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
  "AWS re/Start Graduate — (Sep, 2026) ",
];
