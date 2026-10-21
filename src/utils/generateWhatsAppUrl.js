import { brandConfig } from '../data/brandConfig.js';
import { formatUtmForWhatsApp, getUtmParams } from './utmTracker.js';

/**
 * Generates an executive-grade, high-converting WhatsApp pre-filled URL.
 * Supports both:
 *  1. Detailed Booking / Lead Handoff (when user entered details in form or calculator)
 *  2. 1-Tap Professional Quick Inquiry (clean, polite, structured with easy-to-fill fields)
 */
export function generateWhatsAppUrl(formData = {}) {
  const { name, phone, locality, service, preferredDate, dimensions, notes, pageUrl } = formData;
  const hasUserEnteredInfo = Boolean((name && name.trim()) || (phone && phone.trim()));

  let message = '';

  if (hasUserEnteredInfo) {
    // Case A: Resident has filled in booking details in form or modal
    message = `*NEW BALCONY INSPECTION BOOKING - MB NATURAL SAFETY NETS* 🛡️\n\n`;
    message += `Hello MB Natural Safety Nets Team,\n`;
    message += `I have submitted a request for a Free 30-Minute Doorstep Balcony Inspection in Hyderabad.\n\n`;
    message += `📋 *Booking Details:*\n`;

    if (name && name.trim()) message += `• 👤 *Resident Name:* ${name.trim()}\n`;
    if (phone && phone.trim()) message += `• 📞 *Contact Number:* ${phone.trim()}\n`;
    if (locality) message += `• 📍 *Hyderabad Locality:* ${locality}\n`;
    if (service) message += `• 🛡️ *Service Required:* ${service}\n`;
    if (preferredDate) message += `• 📅 *Preferred Slot:* ${preferredDate}\n`;
    if (dimensions && dimensions.trim()) message += `• 📐 *Balcony Details:* ${dimensions.trim()}\n`;
    if (notes && notes.trim()) message += `• 📝 *Additional Notes:* ${notes.trim()}\n`;

    message += `\nPlease confirm technician availability for doorstep laser measurement and physical net samples.\n`;
  } else {
    // Case B: 1-Tap Quick Inquirer (Direct click from WhatsApp icon, calculator, or service cards)
    const serviceName = service && service !== 'Balcony Safety Netting' ? service : 'Balcony Safety Nets';
    message = `*INQUIRY: ${serviceName.toUpperCase()} - MB NATURAL SAFETY NETS HYDERABAD* 🛡️\n\n`;
    message += `Hello MB Natural Safety Nets Team,\n\n`;
    message += `I am reaching out via your official website (*mbnaturalsafetynets.com*) regarding safety netting solutions for my apartment/balcony in Hyderabad.\n\n`;
    message += `Could you please share:\n`;
    message += `1. Per sq.ft pricing & material warranty options (Garware UV Copolymer / SS 316 Invisible Grills)\n`;
    message += `2. Available time slots for a Free 30-Minute Doorstep Laser Measurement & material sample demo\n\n`;
    message += `📋 *My Requirements:*\n`;
    message += `• 📍 *Locality / Society:* ${locality || 'Hyderabad'}\n`;
    if (service) {
      message += `• 🛡️ *Interested Service:* ${service}\n`;
    } else {
      message += `• 🛡️ *Interested Service:* Balcony Pigeon Nets / Child Safety / Invisible Grills\n`;
    }
    if (dimensions && dimensions.trim()) {
      message += `• 📐 *Estimated Area / Scope:* ${dimensions.trim()}\n`;
    } else {
      message += `• 📐 *Balcony Count / Approx Size:*\n`;
    }
    if (notes && notes.trim()) {
      message += `• 📝 *Notes:* ${notes.trim()}\n`;
    }
    if (preferredDate) {
      message += `• 📅 *Preferred Day:* ${preferredDate}\n`;
    }
    if (pageUrl) {
      message += `• 🔗 *Page Reference:* ${pageUrl}\n`;
    }
    message += `\nLooking forward to your swift response. Thank you!\n`;
  }

  const utm = getUtmParams();
  if (utm && utm.utm_source) {
    message += `\n📊 *Ref:* ${utm.utm_source}${utm.utm_campaign ? ` (${utm.utm_campaign})` : ''}\n`;
  }

  message += `\n_Sent via mbnaturalsafetynets.com_`;

  return `https://wa.me/${brandConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a direct WhatsApp URL with custom text or default professional inquiry.
 */
export function getDirectWhatsAppUrl(customMessage) {
  if (customMessage) {
    const textWithUtm = formatUtmForWhatsApp(customMessage);
    return `https://wa.me/${brandConfig.whatsapp}?text=${encodeURIComponent(textWithUtm)}`;
  }
  return generateWhatsAppUrl({});
}
