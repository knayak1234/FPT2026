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
  title: "National Conference on Frontiers of Physics and Technology",
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

