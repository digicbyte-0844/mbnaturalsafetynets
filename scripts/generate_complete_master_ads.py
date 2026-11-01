"""
Master Status Ads Generator for MB Natural Safety Nets
Crafted with Complete Brand Details:
- Official Logo & Brand Name
- Website (www.mbnaturalsafetynets.in)
- Direct Call (+91 81069 74046)
- WhatsApp (+91 81069 74046)
- All 6 Core Services with Visual Cues
- 5-Year Warranty, Pricing, and Locality Coverage
- 9:16 Mobile Status (1080 x 1920) with Safe Zones
"""

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

font_brand_name = get_font("bold", 42)
font_brand_tag = get_font("semibold", 22)
font_title_hero = get_font("bold", 50)
font_title_hero_sub = get_font("semibold", 27)
font_service_title = get_font("bold", 27)
font_service_desc = get_font("regular", 21)
font_cta_num = get_font("bold", 42)
font_cta_btn = get_font("bold", 28)
font_web_url = get_font("bold", 34)
font_badge_bold = get_font("bold", 22)
font_small = get_font("regular", 19)
font_small_bold = get_font("bold", 20)

# Colors
COLOR_NAVY_DARK = (8, 15, 28)
COLOR_GOLD = (245, 158, 11)
COLOR_AMBER = (251, 191, 36)
COLOR_CYAN = (14, 165, 233)
COLOR_SKY = (56, 189, 248)
COLOR_GREEN = (37, 211, 102) # WhatsApp Green
COLOR_DARK_GREEN = (6, 78, 59)
COLOR_WHITE = (255, 255, 255)
COLOR_MUTED = (203, 213, 225)
COLOR_CARD_BG = (15, 26, 46, 235)

# Logo
logo_path = os.path.join("public", "logo-tight.png")
if not os.path.exists(logo_path):
    logo_path = os.path.join("public", "logo.png")
logo_img = Image.open(logo_path).convert("RGBA")

# -------------------------------------------------------------
# MASTER AD 1: "ALL SERVICES & COMPLETE CONTACT MASTER STATUS"
# -------------------------------------------------------------
def build_master_complete_ad():
    w, h = 1080, 1920
    canvas = Image.new("RGBA", (w, h), COLOR_NAVY_DARK)
    
    # 1. Background Visual
    bg_p = os.path.join(OUTPUT_DIR, "raw_ad1_child_safety.jpg")
    if os.path.exists(bg_p):
        bg = Image.open(bg_p).convert("RGBA")
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
        cx = (new_w - w) // 2
        cy = (new_h - h) // 2
        bg_cropped = bg_resized.crop((cx, cy, cx + w, cy + h))
        canvas.paste(bg_cropped, (0, 0))
    
    # Gradient overlay for maximum contrast & crisp readability
    overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    ov_draw = ImageDraw.Draw(overlay)
    
    # Darken top
    for y in range(0, 480):
        alpha = int(245 * (1.0 - (y / 480.0)**1.5))
        ov_draw.line([(0, y), (w, y)], fill=(8, 14, 26, alpha))
        
    # Darken middle & bottom heavily so services & contact cards are ultra crisp
    for y in range(460, 1920):
        t = (y - 460) / (1920 - 460)
        alpha = int(235 + 20 * t)
        ov_draw.line([(0, y), (w, y)], fill=(9, 16, 30, alpha))
        
    canvas = Image.alpha_composite(canvas, overlay)
    draw = ImageDraw.Draw(canvas)
    
    # 2. Top Header Card (Safe zone y=120 to 255)
    header_box = (45, 120, 1035, 255)
    header_layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    hl_draw = ImageDraw.Draw(header_layer)
    hl_draw.rounded_rectangle(header_box, radius=20, fill=(13, 23, 40, 245), outline=(245, 158, 11, 160), width=2)
    canvas = Image.alpha_composite(canvas, header_layer)
    draw = ImageDraw.Draw(canvas)
    
    # Logo
    lh = 105
    lw = int(logo_img.width * (lh / logo_img.height))
    logo_scaled = logo_img.resize((lw, lh), Image.Resampling.LANCZOS)
    canvas.paste(logo_scaled, (65, 135), mask=logo_scaled)
    
    # Brand Name & Credentials next to logo
    draw.text((65 + lw + 24, 134), "MB NATURAL SAFETY NETS", font=font_brand_name, fill=COLOR_WHITE)
    draw.text((65 + lw + 26, 182), "Hyderabad's #1 Certified Balcony & Pigeon Net Specialists", font=font_brand_tag, fill=COLOR_AMBER)
    
    # Mini stats row in header
    stats_line = "⭐ 4.98 Rating  |  🛡️ 5-Yr Stamped Warranty  |  12,500+ Homes"
    draw.text((65 + lw + 26, 214), stats_line, font=font_small_bold, fill=COLOR_SKY)
    
    # 3. Main Hook Banner (y=275 to 455)
    pill_box = (45, 275, 430, 318)
    draw.rounded_rectangle(pill_box, radius=10, fill=COLOR_AMBER)
    draw.text((65, 283), "COMPLETE SAFETY SOLUTIONS", font=font_badge_bold, fill=(15, 23, 42))
    
    draw.text((45, 335), "Total Balcony Fall & Bird Protection", font=font_title_hero, fill=COLOR_WHITE)
    draw.text((45, 395), "For High-Rise Apartments, Gated Communities & Villas", font=font_title_hero_sub, fill=COLOR_SKY)
    
    # 4. ALL SERVICES 6-CARD GRID (y=455 to 1180)
    # 2 columns x 3 rows = 6 distinct services
    services_list = [
        {
            "icon": "🛡️",
            "title": "Balcony Safety Nets",
            "specs": "180kg+ certified multi-point breaking load for high-rise family fall prevention.",
            "tag": "CHILD SAFETY",
            "tag_color": COLOR_AMBER
        },
        {
            "icon": "🕊️",
            "title": "Pigeon & Bird Nets",
            "specs": "100% bird-proof UV monofilament netting. Keeps balcony clean & odor-free.",
            "tag": "ZERO DROPPINGS",
            "tag_color": COLOR_SKY
        },
        {
            "icon": "💎",
            "title": "SS 316 Invisible Grills",
            "specs": "Marine grade SS 316 cables. 400kg tensile strength with unblocked views.",
            "tag": "LUXURY VIEW",
            "tag_color": (251, 146, 60)
        },
        {
            "icon": "🐾",
            "title": "Pet & Toddler Nets",
            "specs": "Micro-gap heavy-duty boundary netting preventing pet slips & dropped toys.",
            "tag": "PET SAFE",
            "tag_color": (52, 211, 153)
        },
        {
            "icon": "🏏",
            "title": "Cricket & Sports Nets",
            "specs": "Custom high-impact box turf nets for terraces, societies & sports academies.",
            "tag": "SPORTS TURF",
            "tag_color": (168, 85, 247)
        },
        {
            "icon": "🏢",
            "title": "Duct Area & Bird Spikes",
            "specs": "Complete building shaft netting & polycarbonate anti-roost bird spikes.",
            "tag": "BUILDING SHAFTS",
            "tag_color": (244, 63, 94)
        }
    ]
    
    card_w = 475
    card_h = 195
    c_start_y = 455
    spacing_x = 40
    spacing_y = 20
    
    card_layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    cl_draw = ImageDraw.Draw(card_layer)
    
    for i, s in enumerate(services_list):
        row = i // 2
        col = i % 2
        cx = 45 + col * (card_w + spacing_x)
        cy = c_start_y + row * (card_h + spacing_y)
        
        # Rounded service card
        cl_draw.rounded_rectangle((cx, cy, cx + card_w, cy + card_h), radius=16, fill=(16, 27, 46, 230), outline=(255, 255, 255, 45), width=2)
    
    canvas = Image.alpha_composite(canvas, card_layer)
    draw = ImageDraw.Draw(canvas)
    
    # Draw service card contents
    for i, s in enumerate(services_list):
        row = i // 2
        col = i % 2
        cx = 45 + col * (card_w + spacing_x)
        cy = c_start_y + row * (card_h + spacing_y)
        
        # Tag pill
        tag_txt = s["tag"]
        tw = draw.textlength(tag_txt, font=font_small_bold) + 20
        draw.rounded_rectangle((cx + card_w - tw - 16, cy + 14, cx + card_w - 16, cy + 42), radius=6, fill=(24, 38, 64), outline=s["tag_color"], width=1)
        draw.text((cx + card_w - tw - 6, cy + 18), tag_txt, font=font_small_bold, fill=s["tag_color"])
        
        # Icon & Title
        draw.text((cx + 18, cy + 18), f"{s['icon']} {s['title']}", font=font_service_title, fill=COLOR_WHITE)
        
        # Specs / Description (Word wrapped)
        words = s["specs"].split(" ")
        lines = []
        cur = ""
        for wd in words:
            test = cur + (" " if cur else "") + wd
            if draw.textlength(test, font=font_service_desc) < (card_w - 36):
                cur = test
            else:
                lines.append(cur)
                cur = wd
        if cur:
            lines.append(cur)
            
        for li, line_txt in enumerate(lines[:3]):
            draw.text((cx + 18, cy + 68 + li * 28), line_txt, font=font_service_desc, fill=COLOR_MUTED)

    # 5. TRUST BADGES STRIP (y=1120 to 1190)
    badge_box = (45, 1120, 1035, 1195)
    draw.rounded_rectangle(badge_box, radius=14, fill=(24, 38, 64, 240), outline=COLOR_AMBER, width=2)
    t_text = "🛡️ 5-YEAR WARRANTY  •  ⚡ 30-MIN ESTIMATE  •  🏷️ FROM ₹18/SQ.FT  •  🧼 FREE SANITIZATION"
    tt_len = draw.textlength(t_text, font=font_small_bold)
    draw.text((45 + (990 - tt_len) // 2, 1146), t_text, font=font_small_bold, fill=COLOR_AMBER)

    # 6. COMPLETE CONTACT CARD: WEBSITE + CALL + WHATSAPP (y=1215 to 1720)
    contact_box = (45, 1215, 1035, 1720)
    c_layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    cl_draw = ImageDraw.Draw(c_layer)
    cl_draw.rounded_rectangle(contact_box, radius=24, fill=(12, 22, 38, 250), outline=(56, 189, 248, 180), width=2)
    canvas = Image.alpha_composite(canvas, c_layer)
    draw = ImageDraw.Draw(canvas)
    
    # Section Header in Contact Card
    draw.text((75, 1235), "BOOK FREE BALCONY INSPECTION & SAME-DAY INSTALLATION", font=font_badge_bold, fill=COLOR_SKY)
    
    # DUAL CTA BUTTONS: CALL & WHATSAPP
    # Left CTA: Direct Phone Call
    call_btn = (70, 1280, 520, 1420)
    draw.rounded_rectangle(call_btn, radius=18, fill=(30, 58, 138), outline=(56, 189, 248), width=2)
    draw.text((100, 1300), "CALL DIRECTLY", font=font_cta_btn, fill=(191, 219, 254))
    draw.text((100, 1345), "+91 81069 74046", font=font_cta_num, fill=COLOR_WHITE)
    
    # Right CTA: WhatsApp Button (Emerald Green)
    wa_btn = (555, 1280, 1010, 1420)
    draw.rounded_rectangle(wa_btn, radius=18, fill=(16, 185, 129), outline=(255, 255, 255, 120), width=2)
    draw.text((585, 1300), "CHAT ON WHATSAPP", font=font_cta_btn, fill=(6, 78, 59))
    draw.text((585, 1345), "+91 81069 74046", font=font_cta_num, fill=COLOR_WHITE)
    
    # PROMINENT WEBSITE CARD (y=1440 to 1545)
    web_btn = (70, 1440, 1010, 1545)
    draw.rounded_rectangle(web_btn, radius=16, fill=(18, 30, 52), outline=COLOR_AMBER, width=2)
    
    web_badge_txt = "🌐 VISIT OFFICIAL WEBSITE FOR INSTANT PRICING & GALLERY:"
    draw.text((95, 1455), web_badge_txt, font=font_small_bold, fill=COLOR_AMBER)
    
    url_txt = "www.mbnaturalsafetynets.in"
    url_len = draw.textlength(url_txt, font=font_web_url)
    draw.text((95, 1488), url_txt, font=font_web_url, fill=COLOR_WHITE)
    
    tag_visit = "OPEN 24/7 ONLINE"
    tw2 = draw.textlength(tag_visit, font=font_small_bold) + 20
    draw.rounded_rectangle((1010 - tw2 - 25, 1480, 1010 - 25, 1525), radius=8, fill=(30, 41, 59), outline=COLOR_SKY, width=1)
    draw.text((1010 - tw2 - 15, 1493), tag_visit, font=font_small_bold, fill=COLOR_SKY)
    
    # Contact Footer & Localities (y=1565 to 1700)
    p_info = "Proprietor: Manohar Gosala  |  Doorstep Quote in 30 Mins  |  Direct Factory Prices"
    pi_len = draw.textlength(p_info, font=font_small_bold)
    draw.text((45 + (990 - pi_len) // 2, 1575), p_info, font=font_small_bold, fill=COLOR_WHITE)
    
    loc_info = "Serving: Gachibowli • Kondapur • Miyapur • Kukatpally • Hitec City • Manikonda • Dundigal • All Hyderabad"
    li_len = draw.textlength(loc_info, font=font_small)
    draw.text((45 + (990 - li_len) // 2, 1615), loc_info, font=font_small, fill=COLOR_MUTED)
    
    timing_info = "Working Hours: Monday – Sunday, 07:00 AM – 09:00 PM IST  |  Same-Day Booking"
    ti_len = draw.textlength(timing_info, font=font_small)
    draw.text((45 + (990 - ti_len) // 2, 1650), timing_info, font=font_small, fill=COLOR_SKY)
    
    # Save outputs
    out_png = os.path.join(OUTPUT_DIR, "master_complete_brand_ad_status.png")
    out_jpg = os.path.join(OUTPUT_DIR, "master_complete_brand_ad_status.jpg")
    out_webp = os.path.join(OUTPUT_DIR, "master_complete_brand_ad_status.webp")
    
    canvas_rgb = canvas.convert("RGB")
    canvas.save(out_png, "PNG")
    canvas_rgb.save(out_jpg, "JPEG", quality=95)
    canvas_rgb.save(out_webp, "WEBP", quality=92)
    print(f"Generated Master Ad 1: {out_png}")


# ------------------------------------------------------------------
# MASTER AD 2: "TRIPLE VISUAL HERO SHOWCASE WITH FULL BRAND CONTACT"
# ------------------------------------------------------------------
def build_master_visual_showcase_ad():
    w, h = 1080, 1920
    canvas = Image.new("RGBA", (w, h), COLOR_NAVY_DARK)
    draw = ImageDraw.Draw(canvas)
    
    # Background gradient
    for y in range(h):
        t = y / float(h)
        r = int(9 + t * 6)
        g = int(16 + t * 12)
        b = int(28 + t * 20)
        draw.line([(0, y), (w, y)], fill=(r, g, b))
        
    # Header container (y=120 to 255)
    header_box = (45, 120, 1035, 255)
    header_layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    hl_draw = ImageDraw.Draw(header_layer)
    hl_draw.rounded_rectangle(header_box, radius=20, fill=(13, 23, 40, 245), outline=(56, 189, 248, 140), width=2)
    canvas = Image.alpha_composite(canvas, header_layer)
    draw = ImageDraw.Draw(canvas)
    
    lh = 105
    lw = int(logo_img.width * (lh / logo_img.height))
    logo_scaled = logo_img.resize((lw, lh), Image.Resampling.LANCZOS)
    canvas.paste(logo_scaled, (65, 135), mask=logo_scaled)
    
    draw.text((65 + lw + 24, 134), "MB NATURAL SAFETY NETS", font=font_brand_name, fill=COLOR_WHITE)
    draw.text((65 + lw + 26, 182), "Certified High-Rise Fall Protection & Pigeon Control", font=font_brand_tag, fill=COLOR_AMBER)
    draw.text((65 + lw + 26, 214), "★ 4.98 Rating  |  5-Yr Warranty  |  Free Doorstep Visit", font=font_small_bold, fill=COLOR_SKY)
    
    # Punchy hook
    draw.text((45, 280), "PREMIUM BALCONY SAFETY & HYGIENE", font=font_badge_bold, fill=COLOR_AMBER)
    draw.text((45, 315), "Protect What Matters Most", font=font_title_hero, fill=COLOR_WHITE)
    draw.text((45, 375), "100% Fall Safe Balconies • Pigeon-Free Spaces • Modern Invisible Grills", font=font_brand_tag, fill=COLOR_MUTED)
    
    # TRIPLE VISUAL WINDOWS (3 stacked horizontal photo banners y=425 to 1180)
    banners_data = [
        {
            "img": os.path.join(OUTPUT_DIR, "raw_ad1_child_safety.jpg"),
            "fallback": os.path.join("public", "images", "balcony-safety-net.jpg"),
            "badge": "SERVICE 01",
            "title": "High-Rise Balcony Child Safety Nets",
            "desc": "180kg+ breaking load monofilament twine. 100% natural daylight & views.",
            "color": COLOR_AMBER
        },
        {
            "img": os.path.join(OUTPUT_DIR, "raw_ad2_pigeon_net.jpg"),
            "fallback": os.path.join("public", "images", "balcony-pigeon-net.jpg"),
            "badge": "SERVICE 02",
            "title": "Balcony Pigeon Nets & Anti-Bird Spikes",
            "desc": "Humane barrier against pigeons. Zero bird droppings, odor, or diseases.",
            "color": COLOR_SKY
        },
        {
            "img": os.path.join(OUTPUT_DIR, "raw_ad3_invisible_grill.jpg"),
            "fallback": os.path.join("public", "images", "corner-balcony-invisible-grill.jpg"),
            "badge": "SERVICE 03",
            "title": "Marine Grade SS 316 Invisible Grills",
            "desc": "Ultra-sleek high-tension cables with unblocked 360° skyline views.",
            "color": (251, 146, 60)
        }
    ]
    
    b_y = 425
    b_h = 230
    b_spacing = 20
    b_w = 990
    
    for i, b in enumerate(banners_data):
        curr_y = b_y + i * (b_h + b_spacing)
        src_p = b["img"] if os.path.exists(b["img"]) else b["fallback"]
        
        if os.path.exists(src_p):
            p_img = Image.open(src_p).convert("RGBA")
            # crop to b_w x b_h
            p_ratio = p_img.width / p_img.height
            target_r = b_w / b_h
            if p_ratio > target_r:
                nh = b_h
                nw = int(b_h * p_ratio)
            else:
                nw = b_w
                nh = int(b_w / p_ratio)
            p_resized = p_img.resize((nw, nh), Image.Resampling.LANCZOS)
            cx = (nw - b_w) // 2
            cy = (nh - b_h) // 2
            p_cropped = p_resized.crop((cx, cy, cx + b_w, cy + b_h))
            
            # Mask rounded
            mask = Image.new("L", (b_w, b_h), 0)
            m_draw = ImageDraw.Draw(mask)
            m_draw.rounded_rectangle((0, 0, b_w, b_h), radius=18, fill=255)
            
            canvas.paste(p_cropped, (45, curr_y), mask=mask)
            
            # Dark gradient overlay from left/bottom for text
            b_overlay = Image.new("RGBA", (b_w, b_h), (0, 0, 0, 0))
            bo_draw = ImageDraw.Draw(b_overlay)
            for bx in range(b_w):
                # gradient darker on left
                t_x = bx / float(b_w)
                alpha_x = int(240 * (1.0 - t_x ** 0.6)) if t_x < 0.75 else 50
                bo_draw.line([(bx, 0), (bx, b_h)], fill=(10, 18, 32, max(alpha_x, 140)))
                
            bo_draw.rounded_rectangle((0, 0, b_w, b_h), radius=18, outline=(255, 255, 255, 70), width=2)
            
            # Draw banner badge & text
            bo_draw.rounded_rectangle((24, 20, 150, 52), radius=6, fill=(15, 23, 42, 230), outline=b["color"], width=1)
            bo_draw.text((36, 26), b["badge"], font=font_small_bold, fill=b["color"])
            
            bo_draw.text((24, 68), b["title"], font=get_font("bold", 32), fill=COLOR_WHITE)
            bo_draw.text((24, 114), b["desc"], font=font_service_desc, fill=(226, 232, 240))
            
            # Micro pill
            bo_draw.text((24, 165), "✓ 5-Yr Warranty  •  ✓ Certified Load Tested  •  ✓ Free Doorstep Measurement", font=font_small_bold, fill=COLOR_AMBER)
            
            canvas.paste(b_overlay, (45, curr_y), mask=mask)
            
    # ALSO AVAILABLE SERVICES STRIP (y=1185 to 1250)
    extra_box = (45, 1185, 1035, 1255)
    draw.rounded_rectangle(extra_box, radius=12, fill=(20, 32, 54), outline=(255, 255, 255, 40), width=1)
    extra_txt = "ALSO SPECIALIZING IN:  🏏 Cricket Practice Nets  •  🐾 Pet Balcony Nets  •  🏢 Duct Area Safety Nets"
    et_len = draw.textlength(extra_txt, font=font_small_bold)
    draw.text((45 + (990 - et_len) // 2, 1210), extra_txt, font=font_small_bold, fill=COLOR_SKY)
    
    # COMPLETE DIGITAL & CONTACT ACTION HUB (y=1275 to 1720)
    hub_box = (45, 1275, 1035, 1720)
    hub_layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    hl_draw = ImageDraw.Draw(hub_layer)
    hl_draw.rounded_rectangle(hub_box, radius=24, fill=(13, 22, 38, 250), outline=COLOR_AMBER, width=2)
    canvas = Image.alpha_composite(canvas, hub_layer)
    draw = ImageDraw.Draw(canvas)
    
    draw.text((75, 1295), "FASTEST 30-MINUTE DOORSTEP SERVICE ACROSS HYDERABAD", font=font_badge_bold, fill=COLOR_AMBER)
    
    # 1. Direct Call & WhatsApp row
    c_btn = (70, 1335, 520, 1475)
    draw.rounded_rectangle(c_btn, radius=18, fill=(30, 58, 138), outline=(56, 189, 248), width=2)
    draw.text((100, 1355), "CALL FOR FREE QUOTE", font=font_cta_btn, fill=(191, 219, 254))
    draw.text((100, 1400), "+91 81069 74046", font=font_cta_num, fill=COLOR_WHITE)
    
    w_btn = (555, 1335, 1010, 1475)
    draw.rounded_rectangle(w_btn, radius=18, fill=(16, 185, 129), outline=(255, 255, 255, 120), width=2)
    draw.text((585, 1355), "CHAT ON WHATSAPP", font=font_cta_btn, fill=(6, 78, 59))
    draw.text((585, 1400), "+91 81069 74046", font=font_cta_num, fill=COLOR_WHITE)
    
    # 2. Prominent Website Card
    site_btn = (70, 1495, 1010, 1595)
    draw.rounded_rectangle(site_btn, radius=16, fill=(19, 32, 54), outline=(56, 189, 248), width=2)
    draw.text((95, 1512), "OFFICIAL WEBSITE (PRICING CALCULATOR & PHOTO GALLERY)", font=font_small_bold, fill=COLOR_SKY)
    draw.text((95, 1542), "www.mbnaturalsafetynets.in", font=font_web_url, fill=COLOR_WHITE)
    
    open_tag = "EXPLORE ONLINE"
    ot_w = draw.textlength(open_tag, font=font_small_bold) + 24
    draw.rounded_rectangle((1010 - ot_w - 25, 1525, 1010 - 25, 1575), radius=8, fill=(245, 158, 11), outline=COLOR_WHITE, width=1)
    draw.text((1010 - ot_w - 13, 1540), open_tag, font=font_small_bold, fill=(15, 23, 42))
    
    # 3. Trust Footer
    p_line = "Proprietor: Manohar Gosala  |  Starting ₹18 / sq.ft  |  5-Year Stamped Guarantee"
    pl_len = draw.textlength(p_line, font=font_small_bold)
    draw.text((45 + (990 - pl_len) // 2, 1618), p_line, font=font_small_bold, fill=COLOR_AMBER)
    
    loc_line = "Gachibowli • Kondapur • Hitec City • Miyapur • Kukatpally • Manikonda • Pragathi Nagar"
    ll_len = draw.textlength(loc_line, font=font_small)
    draw.text((45 + (990 - ll_len) // 2, 1655), loc_line, font=font_small, fill=COLOR_MUTED)
    
    # Save outputs
    out_png = os.path.join(OUTPUT_DIR, "master_luxury_visual_ad_status.png")
    out_jpg = os.path.join(OUTPUT_DIR, "master_luxury_visual_ad_status.jpg")
    out_webp = os.path.join(OUTPUT_DIR, "master_luxury_visual_ad_status.webp")
    
    canvas_rgb = canvas.convert("RGB")
    canvas.save(out_png, "PNG")
    canvas_rgb.save(out_jpg, "JPEG", quality=95)
    canvas_rgb.save(out_webp, "WEBP", quality=92)
    print(f"Generated Master Ad 2: {out_png}")

if __name__ == "__main__":
    print("Generating Master Status Ads...")
    build_master_complete_ad()
    build_master_visual_showcase_ad()
    print("ALL COMPLETE STATUS ADS GENERATED SUCCESSFULLY!")
