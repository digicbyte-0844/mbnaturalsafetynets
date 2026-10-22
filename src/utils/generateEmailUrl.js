import { brandConfig } from '../data/brandConfig.js';

/**
 * Generates an executive-grade, simple, high-converting pre-filled mailto: URL.
 * Free of dangerous characters (ampersands, square brackets, unicode symbols)
 * that cause webmail handlers (such as Gmail in Chrome) to return 404 errors.
 */
export function generateEmailUrl(formData = {}) {
  const { name, phone, locality, service, preferredDate, dimensions, notes } = formData;
  const hasUserEnteredInfo = Boolean((name && name.trim()) || (phone && phone.trim()));

  if (hasUserEnteredInfo) {
    const safeName = name ? name.trim().replace(/[&[\]]/g, '') : 'Resident';
    const safeLocality = locality ? ` - ${locality.replace(/[&[\]]/g, '')}` : '';
    const safeService = service ? service.replace(/[&[\]]/g, '') : 'Balcony Safety Nets';

    const subject = `Balcony Safety Nets Booking: ${safeName}${safeLocality}`;

    let body = `Dear MB Natural Safety Nets Team,\n\n`;
    body += `I would like to book a free doorstep balcony laser inspection in Hyderabad.\n\n`;
    body += `Resident: ${safeName}\n`;
    if (phone?.trim()) body += `Phone: ${phone.trim()}\n`;
    if (locality) body += `Locality: ${locality}\n`;
    body += `Service: ${safeService}\n`;
    if (preferredDate) body += `Preferred Slot: ${preferredDate}\n`;
    if (dimensions?.trim()) body += `Balcony Details: ${dimensions.trim()}\n`;
    if (notes?.trim()) body += `Notes: ${notes.trim()}\n`;
    body += `\nThank you!`;

    return `mailto:${brandConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  // 1-Tap Direct Inquiries (Navbar, Footer, Contact Page Cards)
  // Keep it lean and clean to ensure 100% compatibility with all webmail protocol handlers
  const safeService = (service && service !== 'Balcony Safety Netting' ? service : 'Balcony Safety Nets').replace(/[&[\]]/g, '');
  const subject = `Inquiry: ${safeService} Hyderabad - MB Natural Safety Nets`;

  return `mailto:${brandConfig.email}?subject=${encodeURIComponent(subject)}`;
}

/**
 * Generates a direct mailto: URL for general inquiries from headers, footers, and contact cards.
 */
export function getDirectEmailUrl(customSubject, customBody) {
  if (customSubject || customBody) {
    const subject = (customSubject || 'Inquiry: Balcony Safety Nets Hyderabad').replace(/[&[\]]/g, '');
    if (customBody) {
      return `mailto:${brandConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(customBody)}`;
    }
    return `mailto:${brandConfig.email}?subject=${encodeURIComponent(subject)}`;
  }
  return generateEmailUrl({});
}

