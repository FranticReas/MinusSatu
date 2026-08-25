export type Project = {
    id: string;
    title: string;
    description: string;
    author: string;
    team: boolean;
    views: number;
    category: string;
    status: ProjectStatus;
    members: TeamMember[];
    imageUrl: string;
    coverType: "banner" | "cover";
    coverLabel?: string;
    coverSub?: string;
    coverSub2?: string;
    avatarColor: string;
};

export type ProjectStatus =
    | "On Going"
    | "Done"
    | "Open Collaboration";

export type TeamMember = {
    name: string;
    avatarUrl: string;
};

export const categories: string[] = [
    "ALL",
    "Desktop Application",
    "Mobile Application",
    "Web Application",
    "Cloud Application",
    "Cybersecurity",
    "UI/X Design",
    "Data Mining",
    "Augmented Reality",
    "Multimedia Application",
    "Branding",
    "Others",
    "Artificial Intelligence",
    "Internet of Things",
    "Game",
];

export const projects: Project[] = [
    {
        id: "redesign-aplikasi-edulearn",
        title: "Redesign Aplikasi EduLearn",
        description:
            "Redesain tampilan dan pengalaman pengguna aplikasi mobile EduLearn agar lebih modern, intuitif, dan mudah digunakan.",
        author: "Sarah Putri & Team",
        team: true,
        views: 128,
        category: "UI/X Design",
        status: "Open Collaboration",
        members: [
            {
                name: "Sarah Putri",
                avatarUrl: "/avatars/sarah.jpg",
            },
            {
                name: "Andi Pratama",
                avatarUrl: "",
            },
            {
                name: "Nadia Lestari",
                avatarUrl: "",
            },
        ],
        imageUrl: "/projects/edulearn.png",
        coverType: "cover",
        coverLabel: "UI/X DESIGN",
        coverSub: "Redesign Aplikasi EduLearn",
        avatarColor: "#5b35d5",
    },
    {
        id: "website-company-profile-nexora",
        title: "Website Company Profile Nexora",
        description:
            "Pengembangan website company profile untuk Nexora dengan desain profesional dan responsif di semua perangkat.",
        author: "Raka Wijaya & Team",
        team: true,
        views: 96,
        category: "Web Application",
        status: "On Going",
        members: [
            {
                name: "Raka Wijaya",
                avatarUrl: "",
            },
            {
                name: "Dimas Saputra",
                avatarUrl: "",
            },
            {
                name: "Alya Rahma",
                avatarUrl: "",
            },
        ],
        imageUrl: "/projects/nexora.png",
        coverType: "cover",
        coverLabel: "WEB DEVELOPMENT",
        coverSub: "Website Company Profile Nexora",
        avatarColor: "#2563eb",
    },
    {
        id: "branding-identity-leafora",
        title: "Branding Identity Leafora",
        description:
            "Perancangan identitas merek untuk Leafora, brand produk ramah lingkungan yang menekankan keberlanjutan dan alam.",
        author: "Maya Sari & Team",
        team: true,
        views: 84,
        category: "Branding",
        status: "Done",
        members: [
            {
                name: "Maya Sari",
                avatarUrl: "",
            },
            {
                name: "Bimo Nugraha",
                avatarUrl: "",
            },
            {
                name: "Citra Dewi",
                avatarUrl: "",
            },
        ],
        imageUrl: "/projects/leafora.png",
        coverType: "cover",
        coverLabel: "BRANDING",
        coverSub: "Branding Identity Leafora",
        avatarColor: "#2f8f62",
    },
];
