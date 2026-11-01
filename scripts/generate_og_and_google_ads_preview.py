"""
Generate Ultra-Premium OG Preview & Google Ads Assets with NEW Phone Number (+91 81069 74046)
Matches and elevates c:\\websites\\mbnaturalsafetynets\\public\\og-preview.jpg
"""

import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

# Paths
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC_DIR = os.path.join(BASE_DIR, "public")
DIST_DIR = os.path.join(BASE_DIR, "dist")
HERO_BG_PATH = os.path.join(PUBLIC_DIR, "images", "hero-balcony.jpg")
LOGO_PATH = os.path.join(PUBLIC_DIR, "logo-emblem.png")
OUTPUT_ADS_DIR = os.path.join(PUBLIC_DIR, "images", "ads")
os.makedirs(OUTPUT_ADS_DIR, exist_ok=True)

# Phone & Brand details
PHONE_DISPLAY = "+91 81069 74046"
PHONE_RAW = "+918106974046"
WEBSITE = "mbnaturalsafetynets.in"
LOCALITIES = "Balanagar \u2022 HITEC City \u2022 Gachibowli \u2022 Kondapur"

# Fonts helper
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

def create_og_preview():
    """Generates the 1200x630 OG Preview / Google Ads Landscape Image (1.91:1)"""
    width = 1200
    height = 630

    # 1. Base balcony image
    hero = Image.open(HERO_BG_PATH).convert("RGBA")
    
    # Scale and crop hero to fit 1200x630, focusing on the right/center
    hero_w, hero_h = hero.size
    scale = max(width / hero_w, height / hero_h)
    new_w = int(hero_w * scale)
    new_h = int(hero_h * scale)
    hero_resized = hero.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Crop offset: align towards right so the open Hyderabad view & balcony show nicely
    crop_x = new_w - width
    crop_y = (new_h - height) // 2
    canvas = hero_resized.crop((crop_x, crop_y, crop_x + width, crop_y + height))

    # 2. Left side dark gradient overlay
    # Deep navy rgb(8, 15, 28)
    gradient_overlay = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    grad_draw = ImageDraw.Draw(gradient_overlay)
    
    for x in range(width):
        if x < 420:
            alpha = 248  # Almost solid dark navy for high readability
        elif x < 680:
            progress = (x - 420) / (680 - 420)
            # Smooth cosine-like roll off
            alpha = int(248 * (1 - progress))
        else:
            alpha = 0
            
        # Draw vertical line
        grad_draw.line([(x, 0), (x, height)], fill=(8, 15, 28, alpha))

    # Bottom footer gradient bar for CTA readability across the width
    bottom_bar = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    b_draw = ImageDraw.Draw(bottom_bar)
    for y in range(height - 90, height):
        progress = (y - (height - 90)) / 90.0
        alpha = int(230 * progress)
        b_draw.line([(0, y), (width, y)], fill=(8, 15, 28, alpha))

    canvas = Image.alpha_composite(canvas, gradient_overlay)
    canvas = Image.alpha_composite(canvas, bottom_bar)

    draw = ImageDraw.Draw(canvas)

    # 3. Logo Emblem
    logo = Image.open(LOGO_PATH).convert("RGBA")
    # Resize logo to fit nicely (height ~105px)
    logo_h = 105
    logo_w = int(logo.width * (logo_h / logo.height))
    logo_resized = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
    logo_x = 65
    logo_y = 65
    canvas.paste(logo_resized, (logo_x, logo_y), logo_resized)

    # 4. Pill Badge next to Logo: "HYDERABAD #1 BALCONY SPECIALIST"
    font_badge = get_font("bold", 17)
    badge_text = "HYDERABAD #1 BALCONY SPECIALIST"
    bbox = font_badge.getbbox(badge_text)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    
    pill_x = logo_x + logo_w + 20
    pill_y = logo_y + 35
    pill_padding_x = 18
    pill_padding_y = 9
    pill_w = tw + pill_padding_x * 2
    pill_h = th + pill_padding_y * 2
    
    # Pill background (dark cyan with border)
    pill_rect = [pill_x, pill_y, pill_x + pill_w, pill_y + pill_h]
    draw.rounded_rectangle(pill_rect, radius=8, fill=(14, 116, 144, 180), outline=(56, 189, 248, 255), width=1)
    draw.text((pill_x + pill_padding_x, pill_y + pill_padding_y - 2), badge_text, font=font_badge, fill=(56, 189, 248, 255))

    # 5. Main Title: "MB NATURAL" (White) & "SAFETY NETS" (Cyan)
    font_title = get_font("black", 52)
    t_y = logo_y + logo_h + 35
    draw.text((logo_x, t_y), "MB NATURAL", font=font_title, fill=(255, 255, 255, 255))
    draw.text((logo_x, t_y + 60), "SAFETY NETS", font=font_title, fill=(14, 165, 233, 255))

    # 6. Subheading: "Balcony Fall Protection & SS 316 Invisible Grills"
    font_sub = get_font("bold", 26)
    sub_y = t_y + 130
    draw.text((logo_x, sub_y), "Balcony Fall Protection & SS 316 Invisible Grills", font=font_sub, fill=(241, 245, 249, 255))

    # 7. Bullet Points with Icons/Symbols
    font_bullet = get_font("semibold", 21)
    b_start_y = sub_y + 48
    spacing = 34

    # Bullet 1: 30-Minute Rapid Doorstep Laser Measurement
    b1_y = b_start_y
    draw.text((logo_x, b1_y), "*", font=font_bullet, fill=(52, 211, 153, 255))
    draw.text((logo_x + 18, b1_y), "30-Minute Rapid Doorstep Laser Measurement", font=font_bullet, fill=(52, 211, 153, 255))

    # Bullet 2: 100% Daylight Transparency - 180kg to 400kg+ Load
    b2_y = b1_y + spacing
    draw.text((logo_x, b2_y), "*", font=font_bullet, fill=(255, 255, 255, 255))
    draw.text((logo_x + 18, b2_y), "100% Daylight Transparency - 180kg to 400kg+ Load", font=font_bullet, fill=(248, 250, 252, 255))

    # Bullet 3: 5-Year Physical Stamped Doorstep Warranty
    b3_y = b2_y + spacing
    draw.text((logo_x, b3_y), "*", font=font_bullet, fill=(251, 191, 36, 255))
    draw.text((logo_x + 18, b3_y), "5-Year Physical Stamped Doorstep Warranty", font=font_bullet, fill=(251, 191, 36, 255))

    # 8. Bottom Footer with NEW Mobile Number
    font_footer = get_font("bold", 21)
    font_footer_sub = get_font("regular", 20)
    footer_y = height - 52
    
    # "Call: +91 81069 74046" highlighted in bright white/cyan
    call_prefix = "Call: "
    call_num = PHONE_DISPLAY
    pipe = "  |  "
    domain = WEBSITE
    locations = "  |  Balanagar - HITEC City - Gachibowli"

    # Measure
    cp_bbox = font_footer.getbbox(call_prefix)
    cp_w = cp_bbox[2] - cp_bbox[0]
    
    cn_bbox = font_footer.getbbox(call_num)
    cn_w = cn_bbox[2] - cn_bbox[0]
    
    pipe_bbox = font_footer_sub.getbbox(pipe)
    pipe_w = pipe_bbox[2] - pipe_bbox[0]
    
    dom_bbox = font_footer.getbbox(domain)
    dom_w = dom_bbox[2] - dom_bbox[0]

    cur_x = logo_x
    draw.text((cur_x, footer_y), call_prefix, font=font_footer_sub, fill=(203, 213, 225, 255))
    cur_x += cp_w
    draw.text((cur_x, footer_y), call_num, font=font_footer, fill=(255, 255, 255, 255))
    cur_x += cn_w
    draw.text((cur_x, footer_y), pipe, font=font_footer_sub, fill=(148, 163, 184, 255))
    cur_x += pipe_w
    draw.text((cur_x, footer_y), domain, font=font_footer, fill=(56, 189, 248, 255))
    cur_x += dom_w
    draw.text((cur_x, footer_y), locations, font=font_footer_sub, fill=(203, 213, 225, 255))

    # Convert to RGB and save JPG and WEBP
    rgb_canvas = canvas.convert("RGB")
    
    # Save to public
    out_jpg = os.path.join(PUBLIC_DIR, "og-preview.jpg")
    out_webp = os.path.join(PUBLIC_DIR, "og-preview.webp")
    rgb_canvas.save(out_jpg, "JPEG", quality=95, optimize=True)
    rgb_canvas.save(out_webp, "WEBP", quality=95)
    print(f"Generated: {out_jpg}")
    print(f"Generated: {out_webp}")

    # Also sync to dist if dist exists
    if os.path.exists(DIST_DIR):
        dist_jpg = os.path.join(DIST_DIR, "og-preview.jpg")
        dist_webp = os.path.join(DIST_DIR, "og-preview.webp")
        rgb_canvas.save(dist_jpg, "JPEG", quality=95, optimize=True)
        rgb_canvas.save(dist_webp, "WEBP", quality=95)
        print(f"Synced: {dist_jpg}")

    # Also save a Google Ads copy in ads folder
    ads_landscape = os.path.join(OUTPUT_ADS_DIR, "google_ad_landscape_1200x628.jpg")
    # For exact Google 1.91:1 (1200x628):
    g_canvas = rgb_canvas.crop((0, 1, 1200, 629))
    g_canvas.save(ads_landscape, "JPEG", quality=95, optimize=True)
    print(f"Generated Google Ad Landscape: {ads_landscape}")

if __name__ == "__main__":
    create_og_preview()
