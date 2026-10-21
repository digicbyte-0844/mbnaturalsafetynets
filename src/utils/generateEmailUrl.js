import { brandConfig } from '../data/brandConfig.js';
import { getUtmParams } from './utmTracker.js';

/**
 * Generates an executive-grade, high-converting pre-filled mailto: URL.
 * Handles both:
 *  1. Structured Booking Submission (when user submitted form)
 *  2. 1-Tap Professional Quick Inquiry (from Navbar, Footer, or Contact cards)
 */
export function generateEmailUrl(formData = {}) {
  const { name, phone, locality, service, preferredDate, dimensions, notes, pageUrl } = formData;
  const hasUserEnteredInfo = Boolean((name && name.trim()) || (phone && phone.trim()));

  if (hasUserEnteredInfo) {
    const localityText = locality ? ` - ${locality}` : '';
    const subject = `[Inspection Booking] Balcony Safety Nets - ${name?.trim() || 'Resident'}${localityText}`;

    let body = `Dear MB Natural Safety Nets Team,\n\n`;
    body += `I have submitted a request for a free doorstep balcony laser inspection via your website (mbnaturalsafetynets.com).\n\n`;
    body += `--- BOOKING DETAILS ---\n`;
    if (name?.trim()) body += `• Resident Name: ${name.trim()}\n`;
    if (phone?.trim()) body += `• Contact Number: ${phone.trim()}\n`;
    if (locality) body += `• Hyderabad Locality / Gated Community: ${locality}\n`;
    if (service) body += `• Required Service: ${service}\n`;
    if (preferredDate) body += `• Preferred Appointment Slot: ${preferredDate}\n`;
    if (dimensions?.trim()) body += `• Balcony Dimensions / Scope: ${dimensions.trim()}\n`;
    if (notes?.trim()) body += `• Additional Notes / Instructions: ${notes.trim()}\n`;
    if (pageUrl) body += `• Page Reference: ${pageUrl}\n`;

    const utm = getUtmParams();
    if (utm && utm.utm_source) {
      body += `• Marketing Reference: ${utm.utm_source}${utm.utm_campaign ? ` (${utm.utm_campaign})` : ''}\n`;
    }

    body += `\nPlease confirm technician availability for the free 30-minute doorstep measurement and material sample demo.\n\n`;
    body += `Best regards,\n${name?.trim() || 'Resident'}\n`;
    body += `mbnaturalsafetynets.com`;

    return `mailto:${brandConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  } else {
    // 1-Tap Direct Inquirer (From Header, Footer, Contact Page Cards)
    const serviceName = service && service !== 'Balcony Safety Netting' ? service : 'Balcony Safety Nets';
    const subject = `[Inquiry & Quotation Request] ${serviceName} in Hyderabad - MB Natural Safety Nets`;

    let body = `Dear MB Natural Safety Nets Team,\n\n`;
    body += `I am reaching out via your official website (mbnaturalsafetynets.com) to inquire about balcony safety netting and request a price quotation in Hyderabad.\n\n`;
    body += `Could you please provide:\n`;
    body += `1. Per sq.ft rate estimation and warranty details (Garware UV-stabilized Copolymer / SS 316 Marine Invisible Grills).\n`;
    body += `2. Available time slots for a certified technician to conduct a Free 30-Minute Doorstep Laser Measurement with physical net samples.\n\n`;
    body += `--- MY INQUIRY DETAILS ---\n`;
    body += `• Resident Name: \n`;
    body += `• Mobile / WhatsApp Number: \n`;
    body += `• Locality / Society in Hyderabad: ${locality || ''}\n`;
    body += `• Required Service: ${service || 'Balcony Pigeon Nets / Child Safety / Invisible Grills'}\n`;
    if (dimensions?.trim()) {
      body += `• Estimated Area / Scope: ${dimensions.trim()}\n`;
    } else {
      body += `• Balcony Count / Approx Dimensions: \n`;
    }
    if (preferredDate) {
      body += `• Preferred Inspection Slot: ${preferredDate}\n`;
    }
    if (notes?.trim()) {
      body += `• Special Notes: ${notes.trim()}\n`;
    }
    if (pageUrl) {
      body += `• Page Reference: ${pageUrl}\n`;
    }

    const utm = getUtmParams();
    if (utm && utm.utm_source) {
      body += `\n• Marketing Reference: ${utm.utm_source}${utm.utm_campaign ? ` (${utm.utm_campaign})` : ''}\n`;
    }

    body += `\nLooking forward to your prompt response.\n\n`;
    body += `Thank you,\n`;
    body += `Prospective Resident\n`;
    body += `mbnaturalsafetynets.com`;

    return `mailto:${brandConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}

/**
 * Generates a direct mailto: URL for general inquiries from headers, footers, and contact cards.
 */
export function getDirectEmailUrl(customSubject, customBody) {
  if (customSubject || customBody) {
    const subject = customSubject || `[Inquiry] Balcony Safety Nets - MB Natural Safety Nets Hyderabad`;
    const body =
      customBody ||
      `Dear MB Natural Safety Nets Team,\n\nI would like to request a free doorstep laser inspection and price quotation for balcony safety netting in Hyderabad.\n\nThank you!`;
    return `mailto:${brandConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  return generateEmailUrl({});
}
