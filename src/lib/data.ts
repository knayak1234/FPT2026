export interface Speaker {
  id: number;
  name: string;
  title: string;
  affiliation: string;
  image?: string;
}

export interface SubTheme {
  id: number;
  title: string;
  topics: string[];
  description: string;
}

export interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description?: string;
}

export interface RegistrationFee {
  category: string;
  fee: string;
}

export interface ContactPerson {
  id: number;
  name: string;
  role: string;
  mobile: string;
  email: string;
  image?: string;
}

export const conferenceData = {
  title: "National Conference on Frontiers in Physics and Technology",
  subtitle: "FPT 2026",
  dates: "31st January - 1st February 2026",
  venue: "Panchayat College, Bargarh, Odisha",
  mode: "Hybrid Mode: Physical & Virtual",
  registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSecWAaRFJVlFdvoGNJdebkzd0N9zJZNCfLgRIXU5WKvHAd_vw/viewform",
  abstractEmail: "pcbphysics@gmail.com",
};

export const speakers: Speaker[] = [
  { id: 1, name: "Prof. Prashanta K. Panigrahi", title: "Former Prof.", affiliation: "IISER Kolkata", image: "/images/InvitedSpeaker/Prashanta_Panigrahi.png" },
  { id: 2, name: "Prof. Asima Pradhan", title: "Former Prof.", affiliation: "IIT Kanpur", image: "/images/InvitedSpeaker/Asima_Pradhan.png" },
  { id: 3, name: "Prof. Hiranmaya Mishra", title: "Prof.", affiliation: "PRL, Ahmedabad", image: "/images/InvitedSpeaker/Hiranmaya.png" },
  { id: 4, name: "Prof. Raghunath Sahoo", title: "Prof.", affiliation: "IIT Indore", image: "/images/InvitedSpeaker/Raghunath_Sahoo1.png" },
  { id: 4, name: "Prof. Susanta Kumar Das", title: "V.C (I/C)", affiliation: "GM University", image: "/images/InvitedSpeaker/SusantaKumarDas.png" },
  { id: 5, name: "Prof. Subhankar Bedanta", title: "Prof.", affiliation: "NISER, Bhubaneswar", image: "/images/InvitedSpeaker/Subhankar_Bedanta2.png" },
  { id: 6, name: "Prof. Rajib Padhee", title: "Prof.", affiliation: "Sambalpur University", image: "/images/InvitedSpeaker/Rajib_Padhi1.png" },
  { id: 7, name: "Prof. Sukanta Ku. Tripathy", title: "Prof.", affiliation: "Berhampur University", image: "/images/InvitedSpeaker/Sukanta_Kumar_Tripathi1.png" },
  { id: 8, name: "Prof. Banarji Behera", title: "Prof.", affiliation: "Sambalpur University", image: "/images/InvitedSpeaker/Banarji_Behera1.png" },
  { id: 9, name: "Dr. Pratap Kumar Sahoo", title: "Dr.", affiliation: "NISER, Bhubaneswar", image: "/images/InvitedSpeaker/Pratap.png" },
  { id: 10, name: "Dr. Tapan Mishra", title: "Dr.", affiliation: "NISER Bhubaneswar", image: "/images/InvitedSpeaker/Tapan_Mishra.png" },
  { id: 10, name: "Dr. Kalpataru Pradhan", title: "Dr.", affiliation: "SINP, Kolkata", image: "/images/InvitedSpeaker/Kalpataru_Pradhan2.png" },
  { id: 11, name: "Dr. Dibakar Sahoo", title: "Dr.", affiliation: "Sambalpur University", image: "/images/InvitedSpeaker/Dibakar_Sahoo.png" },
  { id: 12, name: "Dr. Sudhansu Sekhar Biswal", title: "Dr.", affiliation: "Ravenshaw University", image: "/images/InvitedSpeaker/Sushanshu_Sekhar.png" },
  { id: 13, name: "Dr. Pramoda Kumar Samal", title: "Dr.", affiliation: "G.M. University", image: "/images/InvitedSpeaker/Pramod_Kumar_Samal2.png" },
];

export const subThemes: SubTheme[] = [
  {
    id: 1,
    title: "Condensed Matter Physics",
    topics: ["Superconductivity", "Magnetism", "Crystallography", "Spintronics"],
    description: "Exploring the properties of matter in its condensed phases",
  },
  {
    id: 2,
    title: "High Energy Physics, Astrophysics & Cosmology",
    topics: ["Quark-Gluon Plasma (QGP)", "QCD Phase Diagram", "Black Holes", "Dark Matter", "Space Science"],
    description: "From particle physics to the cosmos",
  },
  {
    id: 3,
    title: "Nano Technology",
    topics: ["Nanomaterials", "Quantum dots", "Polymers", "Smart Materials", "Plasmonic (SPR/LSPR)"],
    description: "Advancements in nanotechnology and nanomaterials",
  },
  {
    id: 4,
    title: "Energy Physics",
    topics: ["Solar Cells", "Fuel Cells", "Catalysis & Energy Storage", "Hydrogen Evolution", "CO₂ Conversion"],
    description: "Sustainable energy solutions and storage technologies",
  },
  {
    id: 5,
    title: "Quantum Information",
    topics: ["Quantum Computing", "Quantum Cryptography", "Quantum Entanglement", "Qubits"],
    description: "Exploring quantum mechanics for information processing and communication",
  },
  {
    id: 6,
    title: "Interdisciplinary",
    topics: ["Biophysics", "Medical Physics", "Computational Physics", "Environmental Physics"],
    description: "Physics applications across diverse scientific disciplines",
  },
];

export const timelineEvents: TimelineEvent[] = [
  { id: 1, date: "31st January & 1st February 2026", title: "Conference Dates" },
  { id: 2, date: "6th January 2026", title: "Registration Open" },
  { id: 3, date: "25th January 2026", title: "Last Date of Abstract Submission" },
  { id: 4, date: "27th January 2026", title: "Notification of Abstract Submission" },
  { id: 5, date: "28th January 2026", title: "Registration Closed" },
  { id: 6, date: "31st January 2026", title: "Spot Registration" },
];

export interface ProgrammeSlot {
  time: string;
  title: string;
  speaker?: string;
  affiliation?: string;
}

export const programmeDay1: ProgrammeSlot[] = [
  { time: "9:00–10:00 AM", title: "Registration" },
  { time: "10:00–11:15 AM", title: "Inauguration" },
  { time: "11:15–11:30 AM", title: "Tea Break / Photo Session" },
  { time: "11:30 AM–12:00 PM", title: "Matter under extreme conditions", speaker: "Prof. Hiranmaya Mishra", affiliation: "IOP, Bhubaneswar" },
  { time: "12:00–12:30 PM", title: "Bio-Inspired Quantum Materials: Mimicking the Lotus Leaf Effect", speaker: "Prof. Pratap Kumar Sahoo", affiliation: "NISER, Bhubaneswar" },
  { time: "12:30–1:00 PM", title: "Anomalous slowdown of particle dynamics with enhanced tunneling", speaker: "Dr. Tapan Mishra", affiliation: "NISER, Bhubaneswar" },
  { time: "1:00–2:30 PM", title: "Lunch Break / Poster Session" },
  { time: "2:30–3:00 PM", title: "Topological Textures in Magnetism: Classical and Quantum Skyrmion Systems", speaker: "Dr. Kalpataru Pradhan", affiliation: "SINP, Kolkata" },
  { time: "3:00–3:30 PM", title: "Cosmic Origin to Laboratory Discoveries: The Physics of Quark-Gluon Plasma—LHC at CERN", speaker: "Prof. Raghunath Sahoo", affiliation: "IIT, Indore" },
  { time: "3:30–3:45 PM", title: "Tea Break" },
  { time: "3:45–4:15 PM", title: "Biophotonics in early cancer diagnosis: from concept to clinic", speaker: "Prof. Asima Pradhan", affiliation: "SOA University" },
  { time: "4:15–4:45 PM", title: "Quantum Mechanics and Beyond", speaker: "Dr. Sudhansu Sekhar Biswal", affiliation: "Ravenshaw University" },
  { time: "2:00–5:00 PM (RN-77)", title: "Invited/Oral Presentation of Participants" },
  { time: "5:00–6:00 PM", title: "Cultural Programme" },
];

export const programmeDay2: ProgrammeSlot[] = [
  { time: "9:30–9:45 AM", title: "Engineering Optical Vortices with Coaxial LG Beam Superposition", speaker: "Dr. Sushanta Kumar Pal", affiliation: "SOA University" },
  { time: "9:45–10:00 AM", title: "Atomic Insights into Melting Phenomenon of Platinum Nanocluster Using MD Simulations", speaker: "Dr. Soumya Saswati Sarangi", affiliation: "VSSUT, Burla" },
  { time: "10:00–10:30 AM", title: "Quantum Principles to Quantum Technology: The Journey of a Century", speaker: "Prof. Prasanta Ku. Panigrahi", affiliation: "SOA University" },
  { time: "10:30–11:00 AM", title: "Photocatalytic dye decomposition for green environment using cost effective metal oxide nanoparticles", speaker: "Prof. Susanta Kumar Das", affiliation: "G.M. University" },
  { time: "11:00–11:30 AM", title: "Progress in Organic Spintronics: Interface Design and Novel Phenomena", speaker: "Prof. Subhankar Bedanta", affiliation: "NISER, Bhubaneswar" },
  { time: "11:30–11:45 AM", title: "Tea Break" },
  { time: "11:45 AM–12:15 PM", title: "Testing the Cosmological Principle", speaker: "Dr. Pramoda Kumar Samal", affiliation: "G.M. University" },
  { time: "12:15–12:45 PM", title: "Design, Implementation, and Prototyping an Acetone Sensor for Exhale Breath Analysis", speaker: "Prof. Sukanta Kumar Tripathy", affiliation: "Berhampur University" },
  { time: "12:45–2:00 PM", title: "Lunch Break" },
  { time: "2:00–2:30 PM", title: "The world of ceramics, dielectrics and ferroelectrics", speaker: "Prof. Rajib Padhee", affiliation: "Sambalpur University" },
  { time: "2:30–3:00 PM", title: "Multifunctional Material and Its Application", speaker: "Prof. Banarji Behera", affiliation: "Sambalpur University" },
  { time: "3:00–3:30 PM", title: "2D Graphene-Based Nano Materials for Next-Generation Energy Storage", speaker: "Prof. Dibakar Sahoo", affiliation: "Sambalpur University" },
  { time: "3:30–3:45 PM", title: "Tea Break" },
  { time: "3:45–5:00 PM", title: "Valedictory Function" },
];

export interface OralPresentationSlot {
  time: string;
  author: string;
  affiliation: string;
  title: string;
}

/** Schedule of Invited Speakers' & Oral Presentations — 31.01.2026, 02:00–05:00 PM, Venue: RN-77 */
export const oralPresentationSchedule: OralPresentationSlot[] = [
  { time: "2:00–2:15 PM", author: "Dr. Ranjita K. Mohapatra", affiliation: "Rajdhani College, Bhubaneswar", title: "QCD phase diagram with finite volume effects using Nambu–Jona-Lasinio model" },
  { time: "2:15–2:30 PM", author: "Dr. Pankaj Kumar Sahoo", affiliation: "Dhenkanal Autonomous College", title: "Common-Path Interferometric Phase Sensing Using Guided-Mode Resonance" },
  { time: "2:30–2:45 PM", author: "Dr. Jitendra Ku. Pradhan", affiliation: "Rajendra University, Balangir", title: "Design of thermal camouflage device based on VO₂ based metamaterial absorber" },
  { time: "2:45–3:00 PM", author: "Dr. Sudipta Mahana", affiliation: "Rajdhani College, Bhubaneswar", title: "Magnetic refrigeration: A Green Technology" },
  { time: "3:00–3:15 PM", author: "Dr. Jyoti Ranjan Sahu", affiliation: "Maharaja Sriram Chandra Bhanja Deo University", title: "Magnetocaloric effect in magnetic materials: A case study of ABO₃-type mixed-valent manganites" },
  { time: "3:15–3:30 PM", author: "Dr. Bharati Naik", affiliation: "School of Physics, iThemba LABS, Cape Town", title: "Overview of Production of muons from heavy-flavour hadron decays in heavy-ion collisions" },
  { time: "3:30–3:42 PM", author: "Dr. Laxmipriya Nanda", affiliation: "CeNSE, Indian Institute of Science", title: "Magnetotransport Signatures of Granular Josephson Coupling in NiBi₃ Nanowires" },
  { time: "3:42–3:54 PM", author: "Topeswar Meher", affiliation: "Dept. of Pure and Applied Physics, Guru Ghasidas Vishwavidyalaya", title: "Metal induced crystallization of Ge in In/Ge bilayer films under SHI irradiation" },
  { time: "3:54–4:06 PM", author: "Ayan Roy", affiliation: "Dept. of Pure and Applied Physics, Guru Ghasidas Vishwavidyalaya", title: "Microstructure and Interface Driven Magnetic, Dielectric and Magnetoelectric Responses in Ni₀.₅Co₀.₅Fe₂O₄/LaFeO₃ Composites" },
  { time: "4:06–4:18 PM", author: "Roshni Pattanayak", affiliation: "LARPM-CIPET, Bhubaneswar", title: "Eco-Engineered Hygiene Materials from Discarded Marigold Flowers: A Sustainable Biopolymer Approach" },
  { time: "4:18–4:30 PM", author: "Dr. Radhakanta Dash", affiliation: "M.P.C. Autonomous College, Baripada", title: "Numerical Simulation of a Laser plasma Wakefield based high gradient Compact Linac" },
  { time: "4:30–4:42 PM", author: "Subhalaxmi Das", affiliation: "Kalinga Institute of Technology", title: "Permeation of Caffeine within a DPPC Bilayer: A Molecular Dynamics Perspective" },
];

export const registrationFees: RegistrationFee[] = [
  { category: "Faculty (Invited)", fee: "₹1000" },
  { category: "Faculty/Industry Delegates", fee: "₹700" },
  { category: "Faculty (Online)", fee: "₹500" },
  { category: "Research Scholars", fee: "₹500" },
  { category: "UG/PG Student", fee: "₹300" },
];

export const paymentDetails = {
  bank: "State Bank of India, BHEDEN",
  accountName: "Prabhas Ranjan Bhoi",
  accountNumber: "32512324766",
  ifscCode: "SBIN0003379",
  upiId: "prabhasranjanbhoi@ybl",
  upiNumber: "9937494263",
};

export const contactPersons: ContactPerson[] = [
  {
    id: 1,
    name: "Dr. Nakul Seth",
    role: "Patron|Principal, Panchayat College, Bargarh",
    mobile: "",
    email: "",
    image: "/images/Nakul_Seth.png",
  },
  {
    id: 2,
    name: "Dr. Lipsa Nanda",
    role: "Convener|H.O.D., P.G. Department of Physics",
    mobile: "9439223142",
    email: "nlipsa@gmail.com",
    image: "/images/Lipsa_Nanda_2.png",
  },
  {
    id: 3,
    name: "Dr. Kishora Nayak",
    role: "Organizing Secretary|P.G. Department of Physics",
    mobile: "7978960365",
    email: "k.nayak1234@gmail.com",
    image: "/images/kishora_nayak.jpg",
  },
  {
    id: 4,
    name: "Dr. Binaya Kumar Sahu",
    role: "Organizing Secretary|P.G. Department of Physics",
    mobile: "9444209475",
    email: "binayamsc12@gmail.com",
    image: "/images/Binaya_Kumar_Sahu1.png",
  },
  {
    id: 5,
    name: "Ms. Smrutismita Samal",
    role: "Joint Organizing Secretary|P.G. Department of Physics",
    mobile: "",
    email: "",
    image: "/images/Smrutismita_Samal1.png",
  },
  {
    id: 6,
    name: "Mrs. Reeta Pandey",
    role: "Joint Organizing Secretary|P.G. Department of Physics",
    mobile: "",
    email: "",
    image: "/images/Reeta_Pandey1.png",
  },
  {
    id: 7,
    name: "Mrs. Pankajini Ray",
    role: "Joint Organizing Secretary|P.G. Department of Physics",
    mobile: "",
    email: "",
    image: "/images/Pankajini_Ray.png",
  },
  {
    id: 8,
    name: "Mr. Anirudha Rohidas",
    role: "Joint Organizing Secretary|P.G. Department of Physics",
    mobile: "",
    email: "",
    image: "/images/Anirudha_Rohidas.png",
  },
];

export const travelInfo = {
  train: {
    station: "Bargarh Road Railway Station",
    distance: "3 km",
  },
  airports: [
    { name: "Jharsuguda Airport", distance: "100 km" },
    { name: "Raipur Airport", distance: "230 km" },
    { name: "Bhubaneswar Airport", distance: "320 km" },
  ],
  collegeAddress: "Panchayat College, Bargarh, Odisha – 768028",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.8876!2d83.6232607!3d21.3206094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a214af03bd33923%3A0xa79784314ef3c40d!2sPanchayat%20College%2C%20Bargarh!5e1!3m2!1sen!2sin!4v1705600000000!5m2!1sen!2sin",
  mapSearchUrl: "https://www.google.com/maps/place/Panchayat+College,+Bargarh/@21.3206094,83.6232607,17z",
};

export const faqData = [
  {
    id: 1,
    question: "What is the mode of the conference?",
    answer: "The conference will be conducted in Hybrid Mode, allowing both physical and virtual participation.",
  },
  {
    id: 2,
    question: "What are the registration fees?",
    answer: "Registration fees vary by category: UG/PG Students (₹300), Research Scholars (₹500), Faculty/Industry Delegates (₹700), and Faculty Online (₹500).",
  },
  {
    id: 3,
    question: "How do I submit my abstract?",
    answer: "Abstracts should be submitted to pcbphysics@gmail.com in the specified format (single column, A4 size, 12pt Times New Roman, 1.5 line spacing, max 300 words).",
  },
  {
    id: 4,
    question: "What are the abstract submission deadlines?",
    answer: "The last date for abstract submission is 20th January 2026, with acceptance notifications on 22nd January 2026.",
  },
  {
    id: 5,
    question: "Are there awards for presentations?",
    answer: "Yes, there will be prizes for outstanding oral and poster presentations.",
  },
  {
    id: 6,
    question: "What are the poster dimensions?",
    answer: "Posters should be 36\" (Width) × 48\" (Length) in portrait orientation.",
  },
];

