import { brandConfig } from '../data/brandConfig.js';

/**
 * Generates an executive-grade, simple, high-converting WhatsApp pre-filled URL.
 * Free of all port numbers, URLs, and technical clutter.
 */
export function generateWhatsAppUrl(formData = {}) {
  const { name, phone, locality, service, preferredDate, dimensions, notes } = formData;
  const hasUserEnteredInfo = Boolean((name && name.trim()) || (phone && phone.trim()));

  let message = '';

  if (hasUserEnteredInfo) {
    // Case A: Resident has filled in booking details in form or modal
    message = `*NEW BALCONY INSPECTION BOOKING - MB NATURAL SAFETY NETS* 🛡️\n\n`;
    message += `Hello MB Natural Safety Nets Team,\n`;
    message += `I would like to book a Free 30-Minute Doorstep Balcony Inspection in Hyderabad.\n\n`;
    message += `📋 *Booking Details:*\n`;

    if (name && name.trim()) message += `• 👤 *Resident Name:* ${name.trim()}\n`;
    if (phone && phone.trim()) message += `• 📞 *Contact Number:* ${phone.trim()}\n`;
    if (locality) message += `• 📍 *Locality / Area:* ${locality}\n`;
    if (service) message += `• 🛡️ *Service Required:* ${service}\n`;
    if (preferredDate) message += `• 📅 *Preferred Slot:* ${preferredDate}\n`;
    if (dimensions && dimensions.trim()) message += `• 📐 *Balcony Details:* ${dimensions.trim()}\n`;
    if (notes && notes.trim()) message += `• 📝 *Notes:* ${notes.trim()}\n`;

    message += `\nPlease confirm technician availability for doorstep laser measurement and net samples. Thank you!`;
  } else {
    // Case B: 1-Tap Quick Inquiry (from WhatsApp button, Service Page, or Calculator)
    const serviceTitle = service && service !== 'Balcony Safety Netting' ? service : 'Balcony Safety Nets';

    message = `*INQUIRY: ${serviceTitle.toUpperCase()} - MB NATURAL SAFETY NETS HYDERABAD* 🛡️\n\n`;
    message += `Hello MB Natural Safety Nets Team,\n\n`;
    message += `I am looking for balcony safety netting for my residence in Hyderabad.\n\n`;
    message += `Could you please share:\n`;
    message += `1. Per sq.ft pricing & options (Pigeon Nets / Child Safety / SS Invisible Grills)\n`;
    message += `2. Free Doorstep Laser Measurement & net sample demo availability\n\n`;
    message += `📋 *My Details:*\n`;
    message += `• 📍 *Locality / Society:* ${locality || ''}\n`;
    message += `• 🛡️ *Service Required:* ${serviceTitle}\n`;
    if (dimensions && dimensions.trim()) {
      message += `• 📐 *Estimated Area:* ${dimensions.trim()}\n`;
    } else {
      message += `• 📐 *Balcony Count / Approx Size:*\n`;
    }
    if (notes && notes.trim()) {
      message += `• 📝 *Notes:* ${notes.trim()}\n`;
    }
    if (preferredDate) {
      message += `• 📅 *Preferred Day:* ${preferredDate}\n`;
    }

    message += `\nPlease let me know technician availability. Thank you!`;
  }

  return `https://wa.me/${brandConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a direct WhatsApp URL with custom text or default professional inquiry.
 */
export function getDirectWhatsAppUrl(customMessage) {
  if (customMessage) {
    return `https://wa.me/${brandConfig.whatsapp}?text=${encodeURIComponent(customMessage)}`;
  }
  return generateWhatsAppUrl({});
}
