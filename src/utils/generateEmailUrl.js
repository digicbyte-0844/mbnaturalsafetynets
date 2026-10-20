import { brandConfig } from '../data/brandConfig';
import { getUtmParams } from './utmTracker';

/**
 * Generates a pre-filled mailto: URL based on form data with structured inquiry details.
 */
export function generateEmailUrl(formData = {}) {
  const { name, phone, locality, service, preferredDate, dimensions, notes } = formData;
  const hasUserEnteredInfo = Boolean((name && name.trim()) || (phone && phone.trim()));

  if (hasUserEnteredInfo) {
    const localityText = locality ? ` (${locality})` : '';
    const subject = `🚨 [New Booking] Free Balcony Laser Inspection - ${name?.trim() || 'Resident'}${localityText}`;

    let body = `Dear Manohar Gosala & MB Natural Safety Nets Team,\n\n`;
    body += `I have submitted a free balcony inspection request through your website:\n\n`;
    body += `--- INQUIRY DETAILS ---\n`;
    if (name?.trim()) body += `• Resident Name: ${name.trim()}\n`;
    if (phone?.trim()) body += `• Contact Number: ${phone.trim()}\n`;
    if (locality) body += `• Hyderabad Locality: ${locality}\n`;
    if (service) body += `• Required Solution: ${service}\n`;
    if (preferredDate) body += `• Preferred Slot: ${preferredDate}\n`;
    if (dimensions?.trim()) body += `• Balcony Details: ${dimensions.trim()}\n`;
    if (notes?.trim()) body += `• Special Notes: ${notes.trim()}\n\n`;

    const utm = getUtmParams();
    if (utm && utm.utm_source) {
      body += `• Marketing Campaign Ref: ${utm.utm_source}${utm.utm_campaign ? ` (${utm.utm_campaign})` : ''}\n\n`;
    }

    body += `Please confirm technician availability for the free 30-minute doorstep measurement.\n\n`;
    body += `Best regards,\n${name?.trim() || 'Resident'}\n`;
    body += `mbnaturalsafetynets.com/contact`;

    return `mailto:${brandConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  } else {
    // 1-Tap Direct Inquirer (No awkward unedited placeholders)
    const subject = `🚨 [Website Inquiry] Free Balcony Laser Inspection & Price Quotation - MB Natural Safety Nets`;
    let body = `Dear Manohar Gosala & MB Natural Safety Nets Team,\n\n`;
    body += `I am contacting you from your official website (mbnaturalsafetynets.com) regarding balcony safety netting in Hyderabad.\n\n`;
    body += `Could you please provide:\n`;
    body += `1. Price estimation per sq.ft (Balcony Pigeon Nets / Child Safety / SS 316 Invisible Grills)\n`;
    body += `2. Available schedule for a Free 30-Minute Doorstep Laser Measurement with physical net samples\n\n`;
    body += `--- MY CONTACT DETAILS ---\n`;
    body += `• Name: \n`;
    body += `• Mobile Number: \n`;
    body += `• Locality / Apartment Name in Hyderabad: \n`;
    body += `• Balcony Count / Approx Dimensions: \n\n`;

    const utm = getUtmParams();
    if (utm && utm.utm_source) {
      body += `• Marketing Campaign Ref: ${utm.utm_source}${utm.utm_campaign ? ` (${utm.utm_campaign})` : ''}\n\n`;
    }

    body += `Looking forward to your swift response.\n\n`;
    body += `Thank you,\n`;
    body += `Prospective Resident\n`;
    body += `mbnaturalsafetynets.com`;

    return `mailto:${brandConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}

/**
 * Generates a direct mailto: URL for general inquiries from headers/footers.
 */
export function getDirectEmailUrl(customSubject, customBody) {
  const subject = customSubject || `🚨 [Inquiry] Free Balcony Laser Inspection & Quotation - MB Natural Safety Nets`;
  const body =
    customBody ||
    `Dear MB Natural Safety Nets Team,\n\n` +
    `I would like to request a free doorstep laser inspection and price quotation for balcony safety netting in Hyderabad.\n\n` +
    `--- MY DETAILS ---\n` +
    `• Resident Name: \n` +
    `• Phone Number: \n` +
    `• Hyderabad Locality / Society: \n` +
    `• Balcony Service Needed (Pigeon Net / Child Safety / Invisible Grills): \n` +
    `• Approximate Balconies / Dimensions: \n` +
    `• Preferred Inspection Date/Time: \n\n` +
    `Please contact me with quotation details and technician availability.\n\n` +
    `Thank you!`;

  return `mailto:${brandConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
