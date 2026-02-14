export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    badge?: string;
    emoji: string;
}

export const products: Product[] = [
    {
        id: "nutella-blast",
        name: "Nutella Blast",
        description: "Premium hazelnut chocolate filling yang creamy dan lumer di setiap gigitan. Fan favorite!",
        price: 15000,
        image: "/products/nutella-blast.jpg",
        category: "Chocolate",
        badge: "Best Seller",
        emoji: "🍫",
    },
    {
        id: "pistachio-glaze",
        name: "Pistachio Glaze",
        description: "Glazed bomboloni dengan pistachio cream asli dan taburan pistachio cincang.",
        price: 18000,
        image: "/products/pistachio-glaze.jpg",
        category: "Premium",
        badge: "New",
        emoji: "🟢",
    },
    {
        id: "red-velvet-cream",
        name: "Red Velvet Cream",
        description: "Red velvet dough dengan cream cheese filling yang tangy dan manis sempurna.",
        price: 16000,
        image: "/products/red-velvet-cream.jpg",
        category: "Signature",
        badge: "Popular",
        emoji: "❤️",
    },
    {
        id: "salted-caramel",
        name: "Salted Caramel",
        description: "Caramel sauce homemade dengan hint of sea salt. Perpaduan manis-asin yang addictive.",
        price: 16000,
        image: "/products/salted-caramel.jpg",
        category: "Signature",
        emoji: "🧂",
    },
    {
        id: "matcha-latte",
        name: "Matcha Latte",
        description: "Japanese ceremonial grade matcha cream dengan white chocolate drizzle.",
        price: 18000,
        image: "/products/matcha-latte.jpg",
        category: "Premium",
        badge: "Limited",
        emoji: "🍵",
    },
    {
        id: "classic-sugar",
        name: "Classic Sugar",
        description: "Bomboloni original dengan taburan gula halus. Simple, timeless, dan selalu jadi favorit.",
        price: 12000,
        image: "/products/classic-sugar.jpg",
        category: "Classic",
        emoji: "✨",
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

export const testimonials = [
    {
        id: 1,
        name: "Sarah Amelia",
        rating: 5,
        text: "Bomboloni terenak yang pernah aku coba! Nutella Blast-nya lumer banget di mulut. Pasti order lagi! 🤤",
        avatar: "👩‍💼",
    },
    {
        id: 2,
        name: "Rizky Pratama",
        rating: 5,
        text: "Red Velvet Cream-nya beneran premium. Cream cheese-nya berasa banget. Worth every penny!",
        avatar: "👨‍💻",
    },
    {
        id: 3,
        name: "Anisa Putri",
        rating: 5,
        text: "Matcha Latte bomboloni-nya juara! Matcha-nya authentic, nggak pait. Packaging-nya juga cantik banget.",
        avatar: "👩‍🎨",
    },
    {
        id: 4,
        name: "Budi Santoso",
        rating: 4,
        text: "Pesan buat acara kantor, semua orang suka! Salted Caramel jadi favorit. Delivery-nya juga cepat.",
        avatar: "👨‍💼",
    },
    {
        id: 5,
        name: "Dina Rahayu",
        rating: 5,
        text: "Udah 3x reorder Pistachio Glaze. Beneran nagih! Harga juga affordable banget untuk rasa sekelas ini.",
        avatar: "👩‍🍳",
    },
];
