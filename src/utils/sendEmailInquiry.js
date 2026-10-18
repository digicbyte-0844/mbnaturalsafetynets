import { brandConfig } from '../data/brandConfig';
import { getUtmParams } from './utmTracker';

export async function sendEmailInquiry(formData) {
  try {
    const utm = getUtmParams();

    const payload = {
      _subject: `🚨 [MB NATURAL BALCONY SAFETY NETS HYDERABAD] ${formData.service || 'Balcony Net'} - ${formData.name || 'Resident'} (${formData.locality || 'Hyderabad'})`,
      _template: "table",
      _captcha: "false",
      "Customer Name": formData.name || "N/A",
      "Phone / WhatsApp": formData.phone || "N/A",
      "Hyderabad Location": formData.locality || "N/A",
      "Requested Balcony Safety Solution": formData.service || "Balcony Safety Netting",
      "Preferred Inspection Date": formData.preferredDate || "Earliest Available",
      "Balcony Dimensions / Count": formData.dimensions || "Standard Balcony",
      "Customer Notes": formData.notes || "None provided",
      "Submission Source": formData.source || "Website Booking Form",
      "Marketing UTM Source": utm.utm_source || "Direct / Organic",
      "Marketing UTM Campaign": utm.utm_campaign || "None",
      "Marketing UTM Medium": utm.utm_medium || "None",
      "Recipient Mailbox": brandConfig.email,
      "Timestamp (IST)": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
    };

    const response = await fetch(brandConfig.formSubmitEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, error: "Submission failed" };
    }
  } catch (err) {
    console.error("FormSubmit API error:", err);
    return { success: false, error: err.message };
  }
}
