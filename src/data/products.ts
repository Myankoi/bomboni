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
        id: "coklat",
        name: "Coklat",
        description: "Isian coklat yang rich dan creamy, classic tapi gak pernah gagal. Cocok buat kamu yang emang suka coklat.",
        price: 8000,
        image: "/images/image (2).jpg",
        category: "Classic",
        badge: "Best Seller",
        badgeColor: "from-rose-primary to-purple-600",
    },
    {
        id: "tiramisu",
        name: "Tiramisu",
        description: "Rasa kopi dicampur krim mascarpone yang lembut. Khas tiramisu banget, manisnya pas gak bikin eneg.",
        price: 8000,
        image: "/images/image (1).png",
        category: "Premium",
        badge: "Favorit",
        badgeColor: "from-amber-500 to-orange-600",
    },
    {
        id: "greentea",
        name: "Greentea",
        description: "Matcha-nya kerasa, sedikit pahit tapi balance sama manisnya krim. Buat yang suka rasa teh hijau pasti suka.",
        price: 8000,
        image: "/images/image (2).jpg",
        category: "Premium",
        badge: "New",
        badgeColor: "from-emerald-500 to-teal-500",
    },
    {
        id: "cream-cheese",
        name: "Cream Cheese",
        description: "Gurih-gurih creamy dari cream cheese asli. Rasa kejunya tuh berasa, bukan yang keju-kejuan doang.",
        price: 8000,
        image: "/images/image (1).png",
        category: "Savory",
    },
    {
        id: "strawberry",
        name: "Strawberry",
        description: "Selai stroberi yang asem-manis seger. Warnanya pink cantik, rasanya juga gak kalah cantik.",
        price: 8000,
        image: "/images/image (2).jpg",
        category: "Fruit",
    },
    {
        id: "blueberry",
        name: "Blueberry",
        description: "Selai blueberry yang fruity dan seger. Agak beda dari yang lain, tapi sekali coba pasti ketagihan.",
        price: 8000,
        image: "/images/image (1).png",
        category: "Fruit",
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
        name: "Keisha",
        initials: "K",
        rating: 5,
        text: "Gila sih ini bomboloni empuk banget, isiannya tumpah-tumpah. Yang Coklat sama Tiramisu auto repeat order deh.",
        featured: false,
    },
    {
        id: 2,
        name: "Maulana",
        initials: "M",
        rating: 5,
        text: "Yang Greentea enak parah, matcha-nya beneran kerasa bukan yang manis doang. Harga 8rb mah murah bgt sih ini.",
        featured: true,
    },
    {
        id: 3,
        name: "Humaira",
        initials: "H",
        rating: 5,
        text: "Strawberry sama Blueberry-nya seger banget! Temen-temen sekelas juga pada suka, besok mau pesen lagi buat di kelas.",
        featured: false,
    },
];
