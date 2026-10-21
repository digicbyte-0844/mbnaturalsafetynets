import { brandConfig } from '../data/brandConfig.js';

/**
 * Generates an executive-grade, simple, high-converting pre-filled mailto: URL.
 * Free of all port numbers, URLs, and technical clutter.
 */
export function generateEmailUrl(formData = {}) {
  const { name, phone, locality, service, preferredDate, dimensions, notes } = formData;
  const hasUserEnteredInfo = Boolean((name && name.trim()) || (phone && phone.trim()));

  if (hasUserEnteredInfo) {
    const localityText = locality ? ` - ${locality}` : '';
    const subject = `[Inspection Booking] Balcony Safety Nets - ${name?.trim() || 'Resident'}${localityText}`;

    let body = `Dear MB Natural Safety Nets Team,\n\n`;
    body += `I would like to book a free doorstep balcony laser inspection in Hyderabad.\n\n`;
    body += `--- BOOKING DETAILS ---\n`;
    if (name?.trim()) body += `• Resident Name: ${name.trim()}\n`;
    if (phone?.trim()) body += `• Contact Number: ${phone.trim()}\n`;
    if (locality) body += `• Hyderabad Locality / Society: ${locality}\n`;
    if (service) body += `• Required Service: ${service}\n`;
    if (preferredDate) body += `• Preferred Appointment Slot: ${preferredDate}\n`;
    if (dimensions?.trim()) body += `• Balcony Dimensions / Scope: ${dimensions.trim()}\n`;
    if (notes?.trim()) body += `• Additional Notes: ${notes.trim()}\n`;

    body += `\nPlease confirm technician availability for the free 30-minute doorstep measurement and net sample demo.\n\n`;
    body += `Best regards,\n${name?.trim() || 'Resident'}\n`;

    return `mailto:${brandConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  } else {
    // 1-Tap Direct Inquirer (From Header, Footer, Contact Page Cards)
    const serviceTitle = service && service !== 'Balcony Safety Netting' ? service : 'Balcony Safety Nets';
    const subject = `[Inquiry & Quotation Request] ${serviceTitle} in Hyderabad - MB Natural Safety Nets`;

    let body = `Dear MB Natural Safety Nets Team,\n\n`;
    body += `I am looking for balcony safety netting for my residence in Hyderabad and would like to request a price quotation.\n\n`;
    body += `Could you please provide:\n`;
    body += `1. Per sq.ft rate estimation and warranty details (Garware UV Copolymer / SS 316 Marine Invisible Grills).\n`;
    body += `2. Available time slots for a Free 30-Minute Doorstep Laser Measurement with physical net samples.\n\n`;
    body += `--- MY DETAILS ---\n`;
    body += `• Resident Name: \n`;
    body += `• Mobile / WhatsApp Number: \n`;
    body += `• Locality / Society in Hyderabad: ${locality || ''}\n`;
    body += `• Required Service: ${serviceTitle}\n`;
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

    body += `\nLooking forward to your prompt response.\n\n`;
    body += `Thank you,\n`;
    body += `Prospective Resident\n`;

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
