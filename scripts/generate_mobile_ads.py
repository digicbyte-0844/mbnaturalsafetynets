import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

OUTPUT_DIR = os.path.join("public", "images", "ads")
os.makedirs(OUTPUT_DIR, exist_ok=True)

# ----------------- FONTS -----------------
def get_font(style, size):
    paths = {
        "bold": [r"C:\Windows\Fonts\segoeuib.ttf", r"C:\Windows\Fonts\arialbd.ttf"],
        "semibold": [r"C:\Windows\Fonts\segoeuisb.ttf", r"C:\Windows\Fonts\arialbd.ttf"],
        "regular": [r"C:\Windows\Fonts\segoeui.ttf", r"C:\Windows\Fonts\arial.ttf"],
        "black": [r"C:\Windows\Fonts\impact.ttf", r"C:\Windows\Fonts\ariblk.ttf", r"C:\Windows\Fonts\arialbd.ttf"],
    }
    candidates = paths.get(style, paths["regular"])
    for p in candidates:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                continue
    return ImageFont.load_default()

font_title_lg = get_font("bold", 54)
font_title_md = get_font("bold", 44)
font_subtitle = get_font("semibold", 28)
font_badge = get_font("bold", 24)
font_pill = get_font("bold", 26)
font_body = get_font("regular", 25)
font_body_bold = get_font("bold", 26)
font_cta_big = get_font("bold", 46)
font_cta_sub = get_font("bold", 26)
font_small = get_font("regular", 21)
font_small_bold = get_font("bold", 22)

# ----------------- BRAND ASSETS -----------------
logo_path = os.path.join("public", "logo-tight.png")
if not os.path.exists(logo_path):
    logo_path = os.path.join("public", "logo.png")

logo_img = Image.open(logo_path).convert("RGBA")

# ----------------- COLOR PALETTE -----------------
COLOR_NAVY_BG = (10, 18, 32)
COLOR_CARD_DARK = (15, 27, 48, 235)
COLOR_GOLD = (245, 158, 11)
COLOR_AMBER = (251, 191, 36)
COLOR_CYAN = (14, 165, 233)
COLOR_GREEN = (37, 211, 102) # WhatsApp Green
COLOR_WHITE = (255, 255, 255)
COLOR_MUTED = (203, 213, 225)
COLOR_DARK_TEXT = (15, 23, 42)

def make_rounded_crop(img, radius):
    """Adds rounded corners to an image"""
    mask = Image.new("L", img.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle((0, 0, img.size[0], img.size[1]), radius=radius, fill=255)
    rounded = Image.new("RGBA", img.size, (0, 0, 0, 0))
    rounded.paste(img.convert("RGBA"), (0, 0), mask=mask)
    return rounded

def compose_status_ad(
    bg_image_path,
    output_filename,
    category_tag,
    headline_p1,
    headline_p2,
    subheadline,
    feature_bullets,
    offer_highlight,
    cta_header="CALL / WHATSAPP FOR FREE ESTIMATE",
    phone="+91 81069 74046",
    proprietor="Manohar Gosala",
    primary_color=COLOR_AMBER
):
    w, h = 1080, 1920
    canvas = Image.new("RGBA", (w, h), COLOR_NAVY_BG)
    
    # 1. Base Background Image
    if os.path.exists(bg_image_path):
        bg = Image.open(bg_image_path).convert("RGBA")
        # Resize to cover
        bg_ratio = bg.width / bg.height
        canvas_ratio = w / h
        if bg_ratio > canvas_ratio:
            new_h = h
            new_w = int(h * bg_ratio)
        else:
            new_w = w
            new_h = int(w / bg_ratio)
        bg_resized = bg.resize((new_w, new_h), Image.Resampling.LANCZOS)
        # Crop center
        cx = (new_w - w) // 2
        cy = (new_h - h) // 2
        bg_cropped = bg_resized.crop((cx, cy, cx + w, cy + h))
        canvas.paste(bg_cropped, (0, 0))
    
    # 2. Gradient Overlays for readability
    # Top overlay: dark gradient from y=0 to y=600
    overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw_ov = ImageDraw.Draw(overlay)
    
    # Top shadow
    for y in range(0, 560):
        alpha = int(245 * (1.0 - (y / 560.0)**1.3))
        draw_ov.line([(0, y), (w, y)], fill=(8, 15, 28, alpha))
        
    # Bottom shadow: strong gradient from y=1100 to y=1920
    for y in range(1100, 1920):
        t = (y - 1100) / (1920 - 1100)
        alpha = int(250 * (t ** 0.8))
        draw_ov.line([(0, y), (w, y)], fill=(8, 15, 28, alpha))
        
    canvas = Image.alpha_composite(canvas, overlay)
    draw = ImageDraw.Draw(canvas)
    
    # 3. Header Bar (Top Safe Zone: y=130 to 250)
    header_box = (45, 125, 1035, 245)
    header_overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    h_draw = ImageDraw.Draw(header_overlay)
    h_draw.rounded_rectangle(header_box, radius=22, fill=(11, 22, 38, 220), outline=(255, 255, 255, 50), width=2)
    canvas = Image.alpha_composite(canvas, header_overlay)
    draw = ImageDraw.Draw(canvas)
    
    # Brand Logo in Header
    l_h = 95
    l_w = int(logo_img.width * (l_h / logo_img.height))
    logo_scaled = logo_img.resize((l_w, l_h), Image.Resampling.LANCZOS)
    canvas.paste(logo_scaled, (70, 137), mask=logo_scaled)
    
    # Right Trust Badges in Header
    draw.text((w - 530, 142), "⭐ 4.98 / 5.0  (3,850+ Reviews)", font=font_small_bold, fill=COLOR_AMBER)
    draw.text((w - 530, 172), "🛡️ 5-YEAR STAMPED WARRANTY", font=font_small_bold, fill=(56, 189, 248))
    draw.text((w - 530, 202), "📍 Across 25+ Hyderabad Localities", font=font_small, fill=COLOR_MUTED)
    
    # 4. Category Tag Pill (y=275)
    tag_w = draw.textlength(category_tag, font=font_badge) + 36
    tag_box = (50, 275, 50 + tag_w, 320)
    draw.rounded_rectangle(tag_box, radius=12, fill=primary_color)
    draw.text((68, 283), category_tag, font=font_badge, fill=COLOR_DARK_TEXT)
    
    # 5. Headline (y=340 to 450)
    # Drop shadow
    draw.text((53, 343), headline_p1, font=font_title_lg, fill=(0, 0, 0, 200))
    draw.text((50, 340), headline_p1, font=font_title_lg, fill=COLOR_WHITE)
    
    draw.text((53, 408), headline_p2, font=font_title_lg, fill=(0, 0, 0, 200))
    draw.text((50, 405), headline_p2, font=font_title_lg, fill=primary_color)
    
    # Subheadline (y=475)
    draw.text((50, 480), subheadline, font=font_subtitle, fill=COLOR_MUTED)
    
    # 6. Center Feature Pills (Floating Glass Badges) (y=1120 to 1340)
    # We display 4 high-impact feature badges in 2 rows
    pill_overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    p_draw = ImageDraw.Draw(pill_overlay)
    
    col_w = 465
    row_h = 70
    start_y = 1140
    
    positions = [
        (50, start_y),
        (565, start_y),
        (50, start_y + 85),
        (565, start_y + 85),
    ]
    
    for i, (bx, by) in enumerate(positions):
        if i < len(feature_bullets):
            p_draw.rounded_rectangle(
                (bx, by, bx + col_w, by + row_h),
                radius=16,
                fill=(15, 27, 48, 220),
                outline=(255, 255, 255, 60),
                width=2
            )
    canvas = Image.alpha_composite(canvas, pill_overlay)
    draw = ImageDraw.Draw(canvas)
    
    for i, (bx, by) in enumerate(positions):
        if i < len(feature_bullets):
            icon, txt = feature_bullets[i]
            # Draw icon & text
            draw.text((bx + 20, by + 18), f"{icon}  {txt}", font=font_body_bold, fill=COLOR_WHITE)
            
    # 7. Offer / Hook Card (y=1330)
    offer_box = (50, 1335, 1030, 1405)
    draw.rounded_rectangle(offer_box, radius=14, fill=(30, 41, 59, 230), outline=COLOR_AMBER, width=2)
    offer_txt = f"⚡ SPECIAL STATUS OFFER:  {offer_highlight}"
    # center text
    ot_len = draw.textlength(offer_txt, font=font_pill)
    draw.text((50 + (980 - ot_len) // 2, 1354), offer_txt, font=font_pill, fill=COLOR_AMBER)
    
    # 8. All Services Checklist (y=1425)
    services_line = "Balcony Nets  •  Pigeon Nets  •  Invisible Grills  •  Child Safety  •  Bird Spikes"
    sl_len = draw.textlength(services_line, font=font_small_bold)
    draw.text((50 + (980 - sl_len) // 2, 1425), services_line, font=font_small_bold, fill=(226, 232, 240))
    
    # 9. Master CTA Button (WhatsApp Emerald Green) (y=1470 to 1630)
    cta_box = (50, 1470, 1030, 1625)
    cta_overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    c_draw = ImageDraw.Draw(cta_overlay)
    # Bright green button
    c_draw.rounded_rectangle(cta_box, radius=24, fill=(16, 185, 129, 250), outline=(255, 255, 255, 120), width=3)
    canvas = Image.alpha_composite(canvas, cta_overlay)
    draw = ImageDraw.Draw(canvas)
    
    # CTA Content
    header_len = draw.textlength(cta_header, font=font_cta_sub)
    draw.text((50 + (980 - header_len) // 2, 1488), cta_header, font=font_cta_sub, fill=(6, 78, 59))
    
    phone_line = f"📞 Call / WhatsApp: {phone}"
    phone_len = draw.textlength(phone_line, font=font_cta_big)
    draw.text((50 + (980 - phone_len) // 2, 1530), phone_line, font=font_cta_big, fill=COLOR_WHITE)
    
    # 10. Secondary Trust & Localities Footer (y=1645 to 1730)
    sub_line1 = f"Proprietor: {proprietor}  |  Fast Doorstep Quote in 30 Mins"
    s1_len = draw.textlength(sub_line1, font=font_small_bold)
    draw.text((50 + (980 - s1_len) // 2, 1645), sub_line1, font=font_small_bold, fill=COLOR_AMBER)
    
    sub_line2 = "Gachibowli • Kondapur • Miyapur • Hitec City • Kukatpally • Manikonda • Dundigal"
    s2_len = draw.textlength(sub_line2, font=font_small)
    draw.text((50 + (980 - s2_len) // 2, 1680), sub_line2, font=font_small, fill=COLOR_MUTED)
    
    # Save Outputs
    out_png = os.path.join(OUTPUT_DIR, f"{output_filename}.png")
    out_jpg = os.path.join(OUTPUT_DIR, f"{output_filename}.jpg")
    out_webp = os.path.join(OUTPUT_DIR, f"{output_filename}.webp")
    
    canvas_rgb = canvas.convert("RGB")
    canvas.save(out_png, "PNG")
    canvas_rgb.save(out_jpg, "JPEG", quality=95)
    canvas_rgb.save(out_webp, "WEBP", quality=92)
    
    print(f"Generated: {out_png}")
    return out_png

print("Ad generator module defined successfully")
