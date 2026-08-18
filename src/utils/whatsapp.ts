import { CartItem, Product, ProductColor, OrderCustomerInfo } from '../types';
import { STORE_INFO } from '../data/storeInfo';

/**
 * Generates direct WhatsApp order/inquiry link for a single product:
 *
 * SHOE CASA ORDER / INQUIRY
 * Product: [Product Name]
 * Category: [Category]
 * Size: [Selected Size]
 * Color: [Selected Color]
 * Quantity: [Quantity]
 * Customer Name: [Name]
 */
export function generateProductWhatsAppLink(params: {
  product: Product;
  size: number;
  color: ProductColor;
  quantity: number;
  customerName?: string;
  deliveryAddress?: string;
  city?: string;
  notes?: string;
}): string {
  const { product, size, color, quantity, customerName, deliveryAddress, city, notes } = params;

  const lines = [
    `*SHOE CASA ORDER / INQUIRY*`,
    ``,
    `*Product:* ${product.name}`,
    `*Category:* ${product.categoryLabel}`,
    `*Size:* ${size} (EU)`,
    `*Color:* ${color.name}`,
    `*Quantity:* ${quantity}`,
    `*Customer Name:* ${customerName && customerName.trim() ? customerName : '[Please specify your name]'}`,
  ];

  if (city) {
    lines.push(`*City:* ${city}`);
  }
  if (deliveryAddress) {
    lines.push(`*Delivery Address:* ${deliveryAddress}`);
  }
  if (notes) {
    lines.push(`*Special Notes:* ${notes}`);
  }

  lines.push(``);
  lines.push(`_Sent via SHOE CASA Online Portal (Grand Regent Mall, Faisalabad)_`);

  const message = lines.join('\n');
  return `https://wa.me/${STORE_INFO.whatsappInternational}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates structured WhatsApp message for an entire cart/inquiry bag order
 */
export function generateCartWhatsAppLink(
  items: CartItem[],
  customerInfo?: OrderCustomerInfo
): string {
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  const lines = [
    `*SHOE CASA ORDER / INQUIRY*`,
    `--------------------------`,
    `*Total Items:* ${totalQuantity} pair(s)`,
    `--------------------------`,
  ];

  items.forEach((item, index) => {
    lines.push(
      `${index + 1}. *${item.product.name}*`,
      `   • Category: ${item.product.categoryLabel}`,
      `   • Size: ${item.selectedSize} (EU)`,
      `   • Color: ${item.selectedColor.name}`,
      `   • Quantity: ${item.quantity}`
    );
  });

  lines.push(`--------------------------`);

  if (customerInfo) {
    lines.push(`*Customer Details:*`);
    lines.push(`• Name: ${customerInfo.fullName || '[Not provided]'}`);
    lines.push(`• Phone: ${customerInfo.phoneNumber || '[Not provided]'}`);
    lines.push(`• City: ${customerInfo.city || '[Not provided]'}`);
    lines.push(`• Address: ${customerInfo.deliveryAddress || '[Not provided]'}`);
    lines.push(`• Preferred Method: ${customerInfo.paymentMethod === 'cod' ? 'Cash on Delivery (COD)' : customerInfo.paymentMethod === 'bank_transfer' ? 'Bank Transfer' : 'Direct WhatsApp Confirmation'}`);
    if (customerInfo.orderNotes) {
      lines.push(`• Notes: ${customerInfo.orderNotes}`);
    }
  } else {
    lines.push(`*Customer Name:* [Please specify your name]`);
  }

  lines.push(``);
  lines.push(`_Sent via SHOE CASA Online Store (Grand Regent Mall, Chen One Road, Faisalabad)_`);

  const message = lines.join('\n');
  return `https://wa.me/${STORE_INFO.whatsappInternational}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates direct inquiry link
 */
export function generateGeneralInquiryLink(topic: string = 'Inquiry'): string {
  const message = `Hello SHOE CASA Team,\n\nI am contacting you from your online store regarding ${topic}. Please share availability and details.\n\nThank you!`;
  return `https://wa.me/${STORE_INFO.whatsappInternational}?text=${encodeURIComponent(message)}`;
}
