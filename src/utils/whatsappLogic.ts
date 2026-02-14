import { CartItem } from "@/store/useCart";
import { formatPrice } from "@/data/products";

const WHATSAPP_NUMBER = "6281234567890"; // Ganti dengan nomor WA bisnis

export function generateWhatsAppMessage(
    name: string,
    location: string,
    items: CartItem[],
    total: number
): string {
    const itemLines = items
        .map(
            (item) =>
                `• ${item.product.name} x${item.quantity} — ${formatPrice(
                    item.product.price * item.quantity
                )}`
        )
        .join("\n");

    const message = `*ORDER BARU - BOMBONI* 🍩
--------------------------
*Nama:* ${name}

*Pesanan:*
${itemLines}

--------------------------
*Total: ${formatPrice(total)}*
--------------------------
*Link Maps:* ${location}

Terima kasih! 🙏`;

    return message;
}

export function generateWhatsAppURL(
    name: string,
    location: string,
    items: CartItem[],
    total: number
): string {
    const message = generateWhatsAppMessage(name, location, items, total);
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
