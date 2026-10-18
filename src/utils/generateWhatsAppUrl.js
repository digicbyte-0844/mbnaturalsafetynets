import { brandConfig } from '../data/brandConfig';
import { formatUtmForWhatsApp, getUtmParams } from './utmTracker';

export function generateWhatsAppUrl({ name, phone, locality, service, preferredDate, dimensions, notes }) {
  let message = `*NEW BALCONY INSPECTION INQUIRY - MB NATURAL SAFETY NETS HYDERABAD*\n\n`;

  if (name) message += `👤 *Resident Name:* ${name}\n`;
  if (phone) message += `📞 *Phone / WhatsApp:* ${phone}\n`;
  if (locality) message += `📍 *Hyderabad Locality:* ${locality}\n`;
  if (service) message += `🛡️ *Balcony Service:* ${service}\n`;
  if (preferredDate) message += `📅 *Preferred Inspection:* ${preferredDate}\n`;
  if (dimensions) message += `📐 *Balcony Details:* ${dimensions}\n`;
  if (notes) message += `📝 *Notes:* ${notes}\n`;

  const utm = getUtmParams();
  if (utm && utm.utm_source) {
    message += `📊 *Campaign Ref:* ${utm.utm_source}${utm.utm_campaign ? ` (${utm.utm_campaign})` : ''}\n`;
  }

  message += `\n_Sent via ${brandConfig.primaryDomain.replace('https://', '')}_`;

  return `https://wa.me/${brandConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function getDirectWhatsAppUrl(customMessage) {
  const baseText = customMessage || `Hi MB Natural Safety Nets, I would like a free 30-minute doorstep laser inspection for my apartment balcony in Hyderabad.`;
  const textWithUtm = formatUtmForWhatsApp(baseText);
  return `https://wa.me/${brandConfig.whatsapp}?text=${encodeURIComponent(textWithUtm)}`;
}
