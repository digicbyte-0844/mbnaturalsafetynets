import { brandConfig } from '../data/brandConfig';
import { formatUtmForWhatsApp, getUtmParams } from './utmTracker';

export function generateWhatsAppUrl(formData = {}) {
  const { name, phone, locality, service, preferredDate, dimensions, notes } = formData;
  const hasUserEnteredInfo = Boolean((name && name.trim()) || (phone && phone.trim()));

  let message = '';

  if (hasUserEnteredInfo) {
    // Case A: Resident has filled in their details in the form
    message = `*NEW BALCONY INSPECTION BOOKING - MB NATURAL SAFETY NETS* 🛡️\n\n`;
    message += `Hello Manohar Gosala & Team,\n`;
    message += `I am requesting a free 30-minute doorstep balcony inspection in Hyderabad:\n\n`;

    if (name && name.trim()) message += `👤 *Resident Name:* ${name.trim()}\n`;
    if (phone && phone.trim()) message += `📞 *Phone / WhatsApp:* ${phone.trim()}\n`;
    if (locality) message += `📍 *Hyderabad Locality:* ${locality}\n`;
    if (service) message += `🛡️ *Balcony Service:* ${service}\n`;
    if (preferredDate) message += `📅 *Preferred Slot:* ${preferredDate}\n`;
    if (dimensions && dimensions.trim()) message += `📐 *Balcony Details:* ${dimensions.trim()}\n`;
    if (notes && notes.trim()) message += `📝 *Notes:* ${notes.trim()}\n`;

    message += `\nPlease confirm technician availability for doorstep laser measurement and physical net samples.\n`;
  } else {
    // Case B: 1-Tap Quick Inquirer (Direct click without typing in form)
    message = `*INQUIRY: BALCONY SAFETY NETS - MB NATURAL SAFETY NETS HYDERABAD* 🛡️\n\n`;
    message += `Hello Manohar Gosala Sir,\n`;
    message += `I found MB Natural Safety Nets through your official website (mbnaturalsafetynets.com).\n\n`;
    message += `I am looking for safety net installation for my balcony/apartment in Hyderabad. Could you please share:\n`;
    message += `1. Price quotation per sq.ft (Pigeon Nets / Child Safety / Invisible Grills)\n`;
    message += `2. Available slot for a Free 30-Minute Doorstep Laser Inspection & net sample demo\n\n`;
    if (service && service !== 'Balcony Safety Netting') {
      message += `🛡️ *Interested Service:* ${service}\n`;
    }
    message += `📍 *My Locality:* Hyderabad\n`;
  }

  const utm = getUtmParams();
  if (utm && utm.utm_source) {
    message += `\n📊 *Campaign Ref:* ${utm.utm_source}${utm.utm_campaign ? ` (${utm.utm_campaign})` : ''}\n`;
  }

  message += `\n_Sent via ${brandConfig.primaryDomain.replace('https://', '')}/contact_`;

  return `https://wa.me/${brandConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function getDirectWhatsAppUrl(customMessage) {
  const defaultText =
    `*INQUIRY: BALCONY SAFETY NETS - MB NATURAL HYDERABAD* 🛡️\n\n` +
    `Hello MB Natural Safety Nets, I would like to schedule a free 30-minute doorstep laser measurement & quotation for my balcony in Hyderabad.\n\n` +
    `📍 Locality: \n` +
    `🛡️ Service: Balcony Pigeon / Child Safety Nets\n\n` +
    `Please share pricing and technician availability.`;

  const baseText = customMessage || defaultText;
  const textWithUtm = formatUtmForWhatsApp(baseText);
  return `https://wa.me/${brandConfig.whatsapp}?text=${encodeURIComponent(textWithUtm)}`;
}
