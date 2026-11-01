"""
Master Google Ads & Social Preview Generator
MB Natural Safety Nets Hyderabad
Updated with verified primary phone: +91 81069 74046
Website: mbnaturalsafetynets.in
"""

import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC_DIR = os.path.join(BASE_DIR, "public")
DIST_DIR = os.path.join(BASE_DIR, "dist")
HERO_BG_PATH = os.path.join(PUBLIC_DIR, "images", "hero-balcony.jpg")
LOGO_PATH = os.path.join(PUBLIC_DIR, "logo-emblem.png")
ADS_DIR = os.path.join(PUBLIC_DIR, "images", "ads")
os.makedirs(ADS_DIR, exist_ok=True)

# Brand details
PHONE_DISPLAY = "+91 81069 74046"
PHONE_RAW = "+918106974046"
WEBSITE = "mbnaturalsafetynets.in"
PROPRIETOR = "Manohar Gosala"
LOCALITIES_STR = "Balanagar \u2022 HITEC City \u2022 Gachibowli \u2022 Kondapur"

# Colors
COLOR_NAVY_BG = (8, 15, 28)
COLOR_NAVY_CARD = (15, 27, 48)
COLOR_WHITE = (255, 255, 255)
COLOR_CYAN = (14, 165, 233)
COLOR_SKY = (56, 189, 248)
COLOR_GOLD = (245, 158, 11)
COLOR_AMBER = (251, 191, 36)
COLOR_EMERALD = (16, 185, 129)
COLOR_EMERALD_LIGHT = (52, 211, 153)
COLOR_MUTED = (148, 163, 184)
COLOR_LIGHT_MUTED = (203, 213, 225)
COLOR_GREEN = (37, 211, 102)

def get_font(name_or_style, size):
    font_map = {
        "black": [r"C:\Windows\Fonts\seguibl.ttf", r"C:\Windows\Fonts\ariblk.ttf"],
        "bold": [r"C:\Windows\Fonts\segoeuib.ttf", r"C:\Windows\Fonts\arialbd.ttf"],
        "semibold": [r"C:\Windows\Fonts\seguisb.ttf", r"C:\Windows\Fonts\arialbd.ttf"],
        "regular": [r"C:\Windows\Fonts\segoeui.ttf", r"C:\Windows\Fonts\arial.ttf"],
    }
    candidates = font_map.get(name_or_style, [r"C:\Windows\Fonts\segoeuib.ttf"])
    for p in candidates:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                continue
    return ImageFont.load_default()

def draw_bullet_check(draw, x, y, size=18, color=COLOR_EMERALD_LIGHT):
    """Draws a clean checkmark vector"""
    cy = y + 10
    draw.line([(x, cy), (x + 5, cy + 5), (x + 13, cy - 5)], fill=color, width=3)

def draw_phone_icon(draw, cx, cy, color=COLOR_WHITE):
    """Draws a simple clean vector phone handset"""
    # Base pill representing handset
    draw.rounded_rectangle([cx - 10, cy - 14, cx + 10, cy + 14], radius=5, outline=color, width=2)
    draw.line([(cx - 4, cy - 8), (cx + 4, cy - 8)], fill=color, width=2)
    draw.line([(cx - 2, cy + 8), (cx + 2, cy + 8)], fill=color, width=2)

# -------------------------------------------------------------
# 1. LANDSCAPE OG PREVIEW & GOOGLE ADS BANNER (1200 x 630)
# -------------------------------------------------------------
def generate_landscape_preview():
    width = 1200
    height = 630

    hero = Image.open(HERO_BG_PATH).convert("RGBA")
    hero_w, hero_h = hero.size
    scale = max(width / hero_w, height / hero_h)
    new_w = int(hero_w * scale)
    new_h = int(hero_h * scale)
    hero_resized = hero.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    crop_x = new_w - width
    crop_y = (new_h - height) // 2
    canvas = hero_resized.crop((crop_x, crop_y, crop_x + width, crop_y + height))

    # Left Dark Gradient (Deep Navy)
    gradient = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    g_draw = ImageDraw.Draw(gradient)
    for x in range(width):
        if x < 430:
            a = 246
        elif x < 710:
            prog = (x - 430) / (710 - 430)
            a = int(246 * (1.0 - prog))
        else:
            a = 0
        g_draw.line([(x, 0), (x, height)], fill=(8, 15, 28, a))

    # Bottom footer gradient
    b_grad = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    bg_draw = ImageDraw.Draw(b_grad)
    for y in range(height - 85, height):
        prog = (y - (height - 85)) / 85.0
        a = int(240 * prog)
        bg_draw.line([(0, y), (width, y)], fill=(8, 15, 28, a))

    canvas = Image.alpha_composite(canvas, gradient)
    canvas = Image.alpha_composite(canvas, b_grad)

    draw = ImageDraw.Draw(canvas)

    # Logo Emblem
    logo = Image.open(LOGO_PATH).convert("RGBA")
    logo_h = 106
    logo_w = int(logo.width * (logo_h / logo.height))
    logo_resized = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
    logo_x = 60
    logo_y = 56
    canvas.paste(logo_resized, (logo_x, logo_y), logo_resized)

    # Pill badge next to logo: "HYDERABAD #1 BALCONY SPECIALIST"
    font_badge = get_font("bold", 16)
    badge_text = "HYDERABAD #1 BALCONY SPECIALIST"
    bbox = font_badge.getbbox(badge_text)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    
    pill_x = logo_x + logo_w + 20
    pill_y = logo_y + 36
    px = 16
    py = 8
    pill_rect = [pill_x, pill_y, pill_x + tw + px*2, pill_y + th + py*2]
    draw.rounded_rectangle(pill_rect, radius=8, fill=(14, 116, 144, 190), outline=(56, 189, 248), width=1)
    draw.text((pill_x + px, pill_y + py - 2), badge_text, font=font_badge, fill=(56, 189, 248))

    # Top Right Warranty Seal
    font_wb_top = get_font("black", 17)
    font_wb_bot = get_font("semibold", 11)
    
    wb_w = 210
    wb_h = 58
    wb_x = width - wb_w - 45
    wb_y = 48
    draw.rounded_rectangle([wb_x, wb_y, wb_x + wb_w, wb_y + wb_h], radius=12, fill=(8, 15, 28, 225), outline=COLOR_GOLD, width=2)
    
    t1 = "5-YEAR WARRANTY"
    t1_w = draw.textlength(t1, font=font_wb_top)
    draw.text((wb_x + (wb_w - t1_w) // 2, wb_y + 10), t1, font=font_wb_top, fill=COLOR_AMBER)
    
    t2 = "STAMPED DOORSTEP CARD"
    t2_w = draw.textlength(t2, font=font_wb_bot)
    draw.text((wb_x + (wb_w - t2_w) // 2, wb_y + 33), t2, font=font_wb_bot, fill=(241, 245, 249))

    # Main Title
    font_title = get_font("black", 52)
    t_y = logo_y + logo_h + 32
    draw.text((logo_x, t_y), "MB NATURAL", font=font_title, fill=COLOR_WHITE)
    draw.text((logo_x, t_y + 58), "SAFETY NETS", font=font_title, fill=COLOR_CYAN)

    # Subheading
    font_sub = get_font("bold", 26)
    sub_y = t_y + 128
    draw.text((logo_x, sub_y), "Balcony Fall Protection & SS 316 Invisible Grills", font=font_sub, fill=(241, 245, 249))

    # Features (with clean checkmarks)
    font_bullet = get_font("semibold", 21)
    b_y = sub_y + 46
    gap = 35

    # Bullet 1
    draw_bullet_check(draw, logo_x, b_y, color=COLOR_EMERALD_LIGHT)
    draw.text((logo_x + 24, b_y), "30-Minute Rapid Doorstep Laser Measurement", font=font_bullet, fill=COLOR_EMERALD_LIGHT)

    # Bullet 2
    draw_bullet_check(draw, logo_x, b_y + gap, color=COLOR_WHITE)
    draw.text((logo_x + 24, b_y + gap), "100% Daylight Transparency - 180kg to 400kg+ Load", font=font_bullet, fill=COLOR_WHITE)

    # Bullet 3
    draw_bullet_check(draw, logo_x, b_y + gap*2, color=COLOR_AMBER)
    draw.text((logo_x + 24, b_y + gap*2), "5-Year Physical Stamped Doorstep Warranty", font=font_bullet, fill=COLOR_AMBER)

    # Footer CTA Bar (With NEW Phone Number +91 81069 74046)
    font_f_call = get_font("black", 22)
    font_f_reg = get_font("regular", 20)
    font_f_bold = get_font("bold", 20)
    footer_y = height - 50

    cur_x = logo_x
    prefix = "Call: "
    draw.text((cur_x, footer_y), prefix, font=font_f_reg, fill=COLOR_LIGHT_MUTED)
    cur_x += draw.textlength(prefix, font=font_f_reg)

    draw.text((cur_x, footer_y), PHONE_DISPLAY, font=font_f_call, fill=COLOR_WHITE)
    cur_x += draw.textlength(PHONE_DISPLAY, font=font_f_call)

    pipe = "   |   "
    draw.text((cur_x, footer_y), pipe, font=font_f_reg, fill=COLOR_MUTED)
    cur_x += draw.textlength(pipe, font=font_f_reg)

    draw.text((cur_x, footer_y), WEBSITE, font=font_f_bold, fill=COLOR_SKY)
    cur_x += draw.textlength(WEBSITE, font=font_f_bold)

    draw.text((cur_x, footer_y), pipe, font=font_f_reg, fill=COLOR_MUTED)
    cur_x += draw.textlength(pipe, font=font_f_reg)

    loc_str = "Balanagar - HITEC City - Gachibowli"
    draw.text((cur_x, footer_y), loc_str, font=font_f_reg, fill=COLOR_LIGHT_MUTED)

    # Export formats
    rgb = canvas.convert("RGB")
    
    # 1. public/og-preview.jpg & webp
    p_jpg = os.path.join(PUBLIC_DIR, "og-preview.jpg")
    p_webp = os.path.join(PUBLIC_DIR, "og-preview.webp")
    rgb.save(p_jpg, "JPEG", quality=95, optimize=True)
    rgb.save(p_webp, "WEBP", quality=95)
    
    # 2. Sync to dist
    if os.path.exists(DIST_DIR):
        d_jpg = os.path.join(DIST_DIR, "og-preview.jpg")
        d_webp = os.path.join(DIST_DIR, "og-preview.webp")
        rgb.save(d_jpg, "JPEG", quality=95, optimize=True)
        rgb.save(d_webp, "WEBP", quality=95)

    # 3. Dedicated Google Ads Landscape (1200x628)
    g_jpg = os.path.join(ADS_DIR, "google_ad_landscape_1200x628.jpg")
    g_webp = os.path.join(ADS_DIR, "google_ad_landscape_1200x628.webp")
    g_crop = rgb.crop((0, 1, 1200, 629))
    g_crop.save(g_jpg, "JPEG", quality=95, optimize=True)
    g_crop.save(g_webp, "WEBP", quality=95)
    print(f"[OK] Landscape OG Preview (1200x630) and Google Ads (1200x628) saved successfully.")


# -------------------------------------------------------------
# 2. SQUARE GOOGLE ADS POST & SOCIAL FEED POST (1200 x 1200)
# -------------------------------------------------------------
def generate_square_post():
    """Generates 1200x1200 Square Ad Post for Google Responsive Display & Social Feed"""
    width = 1200
    height = 1200

    # Clean luxury deep navy background
    canvas = Image.new("RGBA", (width, height), (8, 15, 28, 255))
    draw = ImageDraw.Draw(canvas)

    # TOP HEADER: Logo & Brand
    logo = Image.open(LOGO_PATH).convert("RGBA")
    logo_h = 130
    logo_w = int(logo.width * (logo_h / logo.height))
    logo_resized = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
    
    logo_x = (width - logo_w) // 2
    logo_y = 48
    canvas.paste(logo_resized, (logo_x, logo_y), logo_resized)

    # Brand Title
    font_brand = get_font("black", 42)
    b_txt = "MB NATURAL SAFETY NETS"
    b_w = draw.textlength(b_txt, font=font_brand)
    draw.text(((width - b_w) // 2, logo_y + logo_h + 16), b_txt, font=font_brand, fill=COLOR_WHITE)

    # Tagline Pill
    font_tag = get_font("bold", 20)
    tag_txt = "HYDERABAD #1 BALCONY & INVISIBLE GRILLS SPECIALIST"
    tag_w = draw.textlength(tag_txt, font=font_tag)
    pill_w = tag_w + 36
    pill_h = 40
    pill_x = (width - pill_w) // 2
    pill_y = logo_y + logo_h + 74
    draw.rounded_rectangle([pill_x, pill_y, pill_x + pill_w, pill_y + pill_h], radius=20, fill=(14, 116, 144, 200), outline=COLOR_SKY, width=1)
    draw.text(((width - tag_w) // 2, pill_y + 8), tag_txt, font=font_tag, fill=COLOR_SKY)

    # HERO VISUAL PHOTO CARD (Balcony showcase)
    card_x = 60
    card_y = 330
    card_w = width - 120
    card_h = 425

    hero = Image.open(HERO_BG_PATH).convert("RGBA")
    hero_scaled = hero.resize((card_w, card_h), Image.Resampling.LANCZOS)
    
    mask = Image.new("L", (card_w, card_h), 0)
    m_draw = ImageDraw.Draw(mask)
    m_draw.rounded_rectangle([0, 0, card_w, card_h], radius=22, fill=255)
    
    canvas.paste(hero_scaled, (card_x, card_y), mask)
    draw.rounded_rectangle([card_x, card_y, card_x + card_w, card_y + card_h], radius=22, outline=COLOR_SKY, width=2)

    # Badge on Image (Bottom Left: SS 316 Marine Grade)
    draw.rounded_rectangle([card_x + 25, card_y + card_h - 60, card_x + 475, card_y + card_h - 18], radius=10, fill=(8, 15, 28, 230), outline=COLOR_GOLD, width=2)
    font_img_badge = get_font("bold", 18)
    draw.text((card_x + 42, card_y + card_h - 52), "SS 316 MARINE GRADE  \u2022  180KG+ LOAD", font=font_img_badge, fill=COLOR_AMBER)

    # Badge on Image (Bottom Right: Price starting)
    draw.rounded_rectangle([card_x + card_w - 280, card_y + card_h - 60, card_x + card_w - 25, card_y + card_h - 18], radius=10, fill=(6, 78, 59, 235), outline=COLOR_EMERALD, width=2)
    font_price = get_font("bold", 18)
    draw.text((card_x + card_w - 265, card_y + card_h - 52), "STARTING \u20b918 / SQ.FT", font=font_price, fill=COLOR_WHITE)

    # 4 CORE FEATURES GRID (y=780 to 865)
    f_grid_y = 780
    col1_x = 75
    col2_x = 640
    
    font_feat = get_font("bold", 22)
    
    # Feature 1
    draw_bullet_check(draw, col1_x, f_grid_y, color=COLOR_EMERALD_LIGHT)
    draw.text((col1_x + 25, f_grid_y), "30-Min Rapid Doorstep Inspection", font=font_feat, fill=COLOR_EMERALD_LIGHT)

    # Feature 2
    draw_bullet_check(draw, col2_x, f_grid_y, color=COLOR_SKY)
    draw.text((col2_x + 25, f_grid_y), "100% Pigeon Menace Solved", font=font_feat, fill=COLOR_SKY)

    # Feature 3
    draw_bullet_check(draw, col1_x, f_grid_y + 44, color=COLOR_AMBER)
    draw.text((col1_x + 25, f_grid_y + 44), "5-Year Stamped Doorstep Warranty", font=font_feat, fill=COLOR_AMBER)

    # Feature 4
    draw_bullet_check(draw, col2_x, f_grid_y + 44, color=COLOR_WHITE)
    draw.text((col2_x + 25, f_grid_y + 44), "Free Installation Across 25+ Areas", font=font_feat, fill=COLOR_WHITE)

    # DUAL CTA ACTION BUTTONS (y=885 to 1010)
    cta_y = 885
    btn_w = 515
    btn_h = 120
    
    # Left CTA: Direct Phone Call
    btn_call_x = 70
    draw.rounded_rectangle([btn_call_x, cta_y, btn_call_x + btn_w, cta_y + btn_h], radius=18, fill=(30, 58, 138), outline=COLOR_SKY, width=2)
    font_btn_label = get_font("bold", 21)
    font_btn_num = get_font("black", 36)
    draw.text((btn_call_x + 35, cta_y + 20), "CALL HELPLINE DIRECTLY", font=font_btn_label, fill=(191, 219, 254))
    draw.text((btn_call_x + 35, cta_y + 58), PHONE_DISPLAY, font=font_btn_num, fill=COLOR_WHITE)

    # Right CTA: WhatsApp Button
    btn_wa_x = 615
    draw.rounded_rectangle([btn_wa_x, cta_y, btn_wa_x + btn_w, cta_y + btn_h], radius=18, fill=(16, 185, 129), outline=(255, 255, 255, 140), width=2)
    draw.text((btn_wa_x + 35, cta_y + 20), "CHAT ON WHATSAPP", font=font_btn_label, fill=(6, 78, 59))
    draw.text((btn_wa_x + 35, cta_y + 58), PHONE_DISPLAY, font=font_btn_num, fill=COLOR_WHITE)

    # PROMINENT WEBSITE FOOTER CARD (y=1030 to 1135)
    site_card_y = 1030
    site_card_h = 95
    draw.rounded_rectangle([70, site_card_y, width - 70, site_card_y + site_card_h], radius=16, fill=(15, 27, 48), outline=COLOR_AMBER, width=2)
    
    font_site_sub = get_font("bold", 17)
    font_site_url = get_font("black", 32)
    draw.text((105, site_card_y + 15), "OFFICIAL WEBSITE & COST ESTIMATOR", font=font_site_sub, fill=COLOR_AMBER)
    draw.text((105, site_card_y + 44), f"www.{WEBSITE}", font=font_site_url, fill=COLOR_WHITE)

    font_loc = get_font("semibold", 17)
    draw.text((width - 430, site_card_y + 26), "Hyderabad & 25+ Localities\nSame-Day Doorstep Service", font=font_loc, fill=COLOR_LIGHT_MUTED)

    # Save
    rgb = canvas.convert("RGB")
    sq_jpg = os.path.join(ADS_DIR, "google_ad_square_1200x1200.jpg")
    sq_webp = os.path.join(ADS_DIR, "google_ad_square_1200x1200.webp")
    rgb.save(sq_jpg, "JPEG", quality=95, optimize=True)
    rgb.save(sq_webp, "WEBP", quality=95)
    print(f"[OK] Square Ad (1200x1200) generated: {sq_jpg}")

if __name__ == "__main__":
    generate_landscape_preview()
    generate_square_post()
    print("Google Ads Master generation complete!")
