import { brandConfig } from '../data/brandConfig.js';

/**
 * Generates an executive-grade, pre-filled Gmail Web compose URL.
 * Pre-populates the recipient (mahimanohar47@gmail.com), subject, and structured booking details
 * matching the WhatsApp booking format, ensuring 100% reliable delivery without mailto protocol crashes.
 */
export function generateGmailUrl(formData = {}) {
  const { name, phone, locality, service, preferredDate, dimensions, notes } = formData;
  const hasUserEnteredInfo = Boolean((name && name.trim()) || (phone && phone.trim()));

  let subject = '';
  let body = '';

  if (hasUserEnteredInfo) {
    const residentName = name && name.trim() ? name.trim() : 'Resident';
    const localityText = locality ? ` (${locality})` : ' (Hyderabad)';
    subject = `New Balcony Inspection Booking - ${residentName}${localityText} | MB Natural Safety Nets`;

    body = `Dear Manohar Gosala & MB Natural Safety Nets Team,\n\n`;
    body += `I would like to book a Free 30-Minute Doorstep Balcony Laser Inspection in Hyderabad.\n\n`;
    body += `📋 --- RESIDENTIAL BOOKING DETAILS ---\n`;
    body += `• Resident Name: ${residentName}\n`;
    if (phone && phone.trim()) body += `• Contact Mobile: ${phone.trim()}\n`;
    if (locality) body += `• Locality / Society in Hyderabad: ${locality}\n`;
    if (service) body += `• Required Service: ${service}\n`;
    if (preferredDate) body += `• Preferred Inspection Slot: ${preferredDate}\n`;
    if (dimensions && dimensions.trim()) body += `• Balcony Dimensions / Scope: ${dimensions.trim()}\n`;
    if (notes && notes.trim()) body += `• Special Instructions: ${notes.trim()}\n\n`;
    body += `Please confirm technician availability for doorstep laser measurement and physical net samples.\n\n`;
    body += `Thank you,\n${residentName}\n`;
  } else {
    const serviceTitle = service && service !== 'Balcony Safety Netting' ? service : 'Balcony Safety Nets';
    subject = `Inquiry: ${serviceTitle} in Hyderabad - MB Natural Safety Nets`;

    body = `Dear Manohar Gosala & MB Natural Safety Nets Team,\n\n`;
    body += `I am looking for certified balcony safety netting for my residence in Hyderabad and would like to request pricing and doorstep inspection.\n\n`;
    body += `Could you please share:\n`;
    body += `1. Per sq.ft rate estimation (Garware UV-Stabilized Copolymer / SS 316 Marine Invisible Grills).\n`;
    body += `2. Available time slots for a Free 30-Minute Doorstep Laser Measurement with physical net samples.\n\n`;
    body += `📋 --- MY DETAILS ---\n`;
    body += `• Resident Name: \n`;
    body += `• Mobile Number: \n`;
    body += `• Locality / Society in Hyderabad: ${locality || ''}\n`;
    body += `• Required Service: ${serviceTitle}\n`;
    if (dimensions && dimensions.trim()) {
      body += `• Estimated Balcony Scope: ${dimensions.trim()}\n`;
    } else {
      body += `• Balcony Count / Approx Dimensions: \n`;
    }
    if (preferredDate) {
      body += `• Preferred Day: ${preferredDate}\n`;
    }
    if (notes && notes.trim()) {
      body += `• Notes: ${notes.trim()}\n`;
    }
    body += `\nPlease let me know technician availability. Looking forward to your prompt response.\n\n`;
    body += `Thank you,\nProspective Resident\n`;
  }

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(brandConfig.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Generates direct Gmail compose URL for quick 1-tap inquiries.
 */
export function getDirectGmailUrl(customSubject) {
  return generateGmailUrl({ service: customSubject });
}
