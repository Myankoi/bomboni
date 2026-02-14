export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    badge?: string;
    badgeColor?: string;
}

export const MIN_ORDER = 6;
export const MIN_ORDER_LABEL = "Min. 6 pcs";

export const products: Product[] = [
    {
        id: "nutella-blast",
        name: "Nutella Blast",
        description: "Isian melimpah Nutella cokelat kacang yang otentik dan creamy, lumer di setiap gigitan.",
        price: 8000,
        image: "/images/image (2).jpg",
        category: "Chocolate",
        badge: "Best Seller",
        badgeColor: "from-rose-primary to-purple-600",
    },
    {
        id: "strawberry-love",
        name: "Strawberry Love",
        description: "Selai stroberi segar buatan rumah dengan isian melimpah, asam manis yang bikin nagih.",
        price: 8000,
        image: "/images/image (1).png",
        category: "Fruit",
        badge: "Favorit",
        badgeColor: "from-emerald-500 to-teal-500",
    },
    {
        id: "cheese-cloud",
        name: "Cheese Cloud",
        description: "Perpaduan gurihnya keju premium dan manisnya adonan donat yang pas.",
        price: 8000,
        image: "/images/image (2).jpg",
        category: "Cheese",
    },
    {
        id: "berry-love",
        name: "Berry Love",
        description: "Selai stroberi segar buatan rumah dengan potongan buah asli yang asam segar.",
        price: 8000,
        image: "/images/image (1).png",
        category: "Fruit",
    },
    {
        id: "kyoto-matcha",
        name: "Kyoto Matcha",
        description: "Krim teh hijau Jepang otentik dengan rasa manis-pahit yang elegan dan seimbang.",
        price: 8000,
        image: "/images/image (2).jpg",
        category: "Premium",
        badge: "New",
        badgeColor: "from-blue-400 to-indigo-500",
    },
    {
        id: "salted-caramel",
        name: "Salted Caramel",
        description: "Saus karamel mentega yang halus dengan sentuhan garam laut, bikin ketagihan.",
        price: 8000,
        image: "/images/image (1).png",
        category: "Signature",
    },
];

export const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price);
};

export const formatPriceShort = (price: number): string => {
    return `${price / 1000}K`;
};

export const testimonials = [
    {
        id: 1,
        name: "Andini Sari",
        role: "Pecinta Dessert",
        initials: "AS",
        rating: 5,
        text: "Bomboloni paling empuk yang pernah saya coba! Isiannya benar-benar melimpah, gak pelit sama sekali. Favorit saya yang Nutella!",
        featured: false,
        image: "/images/image (1).jpeg",
    },
    {
        id: 2,
        name: "Budi Pratama",
        role: "Food Blogger",
        initials: "BP",
        rating: 5,
        text: "Rasa Matcha-nya juara banget! Berasa premium bukan matcha kaleng-kaleng. Sangat worth it dengan harganya yang terjangkau. Packaging juga super aman.",
        featured: true,
        image: "/images/image (3).jpg",
    },
    {
        id: 3,
        name: "Rina Melati",
        role: "Ibu Rumah Tangga",
        initials: "RM",
        rating: 5,
        text: "Pesanan sampai masih fresh dan empuk. Packaging-nya cantik banget cocok buat hampers ke teman atau keluarga. Next bakal order buat acara kantor!",
        featured: false,
        image: "/images/image (3).jpeg",
    },
];
