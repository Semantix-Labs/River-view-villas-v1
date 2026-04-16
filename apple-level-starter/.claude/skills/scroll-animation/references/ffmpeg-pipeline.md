# FFmpeg Frame Extraction Pipeline — Detailed Reference

## Prerequisites

```bash
brew install ffmpeg    # macOS
# or
sudo apt install ffmpeg  # Linux
```

## Step 1: Analyze Your Video

```bash
ffprobe -v error \
  -show_entries format=duration \
  -show_entries stream=width,height,r_frame_rate \
  -of default=noprint_wrappers=1 \
  INPUT.mp4
```

This tells you: duration, resolution, and native frame rate. You need the duration to calculate the extraction fps.

## Step 2: Calculate FPS

**Formula:** `fps = target_frames / video_duration_seconds`

| Video Duration | Target Frames | FPS Value |
|---------------|---------------|-----------|
| 5 seconds | 150 | fps=30 |
| 8 seconds | 150 | fps=18.75 (use 19) |
| 10 seconds | 150 | fps=15 |
| 15 seconds | 150 | fps=10 |
| 20 seconds | 150 | fps=7.5 (use 8) |
| 30 seconds | 150 | fps=5 |

## Step 3: Extract Frames

### Desktop Frames (1920px)

```bash
ffmpeg -i INPUT.mp4 \
  -vf "fps=15,scale=1920:-1" \
  -c:v libwebp \
  -quality 80 \
  -compression_level 6 \
  -preset picture \
  -an \
  public/frames/frame-%03d.webp
```

### Mobile Frames (1080px, fewer frames)

```bash
ffmpeg -i INPUT.mp4 \
  -vf "fps=8,scale=1080:-1" \
  -c:v libwebp \
  -quality 75 \
  -compression_level 6 \
  -preset picture \
  -an \
  public/frames/mobile/frame-%03d.webp
```

### Retina/4K Frames (2560px)

```bash
ffmpeg -i INPUT.mp4 \
  -vf "fps=15,scale=2560:-1" \
  -c:v libwebp \
  -quality 80 \
  -compression_level 6 \
  -preset picture \
  -an \
  public/frames/retina/frame-%03d.webp
```

### Extract from a Specific Time Range

```bash
ffmpeg -ss 00:00:02 -t 8 -i INPUT.mp4 \
  -vf "fps=18,scale=1920:-1" \
  -c:v libwebp \
  -quality 80 \
  -compression_level 6 \
  -preset picture \
  -an \
  public/frames/frame-%03d.webp
```

`-ss` = start time, `-t` = duration. Place `-ss` before `-i` for fast seeking.

### Extract Exact N Frames (Alternative Method)

If you need exactly N evenly-spaced frames regardless of duration:

```bash
# First, count total frames
TOTAL=$(ffprobe -v error -select_streams v:0 -count_packets \
  -show_entries stream=nb_read_packets -of csv=p=0 INPUT.mp4)

# Calculate interval (e.g., for 150 frames from a 900-frame video: INTERVAL=6)
INTERVAL=$((TOTAL / 150))

# Extract
ffmpeg -i INPUT.mp4 \
  -vf "select=not(mod(n\,$INTERVAL)),scale=1920:-1" \
  -vsync vfr \
  -c:v libwebp \
  -quality 80 \
  -compression_level 6 \
  -preset picture \
  -an \
  public/frames/frame-%03d.webp
```

## Step 4: Verify

```bash
# Count frames
ls public/frames/*.webp | wc -l

# Check total size
du -sh public/frames/

# Check individual frame size
ls -la public/frames/ | head -5

# Check frame dimensions
ffprobe -v error -show_entries stream=width,height public/frames/frame-001.webp
```

### Target Sizes

| Resolution | Per Frame | 150 Frames Total |
|-----------|-----------|------------------|
| 1080px | 20-50 KB | 3-7.5 MB |
| 1920px | 30-80 KB | 4.5-12 MB |
| 2560px | 50-120 KB | 7.5-18 MB |

## WebP Quality Comparison

| Quality | File Size (relative) | Visual Quality | Use Case |
|---------|---------------------|----------------|----------|
| 50 | Small | Noticeable artifacts | Aggressive optimization |
| 65 | Medium | Good for simple scenes | Budget-conscious |
| **80** | **Recommended** | **Excellent** | **Sweet spot for scroll animations** |
| 85 | Large | Near-perfect | High-detail product shots |
| 100 | Largest | Maximum | Never needed for scroll animations |

WebP at quality 80 produces files 25-34% smaller than equivalent JPEG at the same visual quality (Google WebP Study).

## Troubleshooting

### Frames look blurry
Increase `-quality` to 85 or increase resolution with `scale=2560:-1`.

### Too many frames (>200)
Lower the fps value. 150 is the sweet spot.

### Total size too large (>20MB)
1. Reduce frame count (try 120 instead of 150)
2. Lower resolution (1440px instead of 1920px)
3. Lower quality to 75

### Frames have different sizes
Normal. Complex frames (lots of detail) compress less than simple ones.

### Animation feels choppy
You need more frames. Increase fps value or use a longer video source.
