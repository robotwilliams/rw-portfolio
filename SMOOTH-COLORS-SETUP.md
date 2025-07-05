# Smooth Terminal Colors Setup Guide

This guide will help you apply smoother, less blocky colors to your Powerlevel10k terminal setup.

## What This Fixes

The "blocky" appearance you're experiencing is typically caused by:
- High contrast color combinations
- Sharp color transitions between segments
- Lack of color blending
- Font rendering issues

## Step 1: Apply Windows Terminal Settings

1. Open Windows Terminal
2. Press `Ctrl + ,` to open settings
3. Click "Open JSON file" at the bottom
4. Replace the entire content with the contents of `windows-terminal-smooth-colors.json`
5. Save the file and restart Windows Terminal

## Step 2: Apply Oh My Posh Configuration

1. Copy the contents of `powerlevel10k-smooth-config.json`
2. Open PowerShell and run:
   ```powershell
   notepad $PROFILE
   ```
3. Find the line that loads Oh My Posh and replace it with:
   ```powershell
   oh-my-posh init pwsh --config "C:\path\to\your\powerlevel10k-smooth-config.json" | Invoke-Expression
   ```
4. Save the profile and restart PowerShell

## Step 3: Font Optimization

Ensure you're using MesloLGS NF font with proper settings:

1. In Windows Terminal settings, verify:
   - Font: `MesloLGS NF`
   - Size: `12`
   - Weight: `normal`
   - Antialiasing: `cleartype`

## Step 4: Additional Smoothing Options

### Option A: Reduce Opacity
In Windows Terminal settings, set:
- `"opacity": 90` (instead of 95)
- `"useAcrylic": true`

### Option B: Enable Font Features
Add to your Windows Terminal profile:
```json
"fontFeatures": "liga"
```

### Option C: Adjust Color Scheme
If you want even smoother colors, you can modify the color values in the JSON files to use more muted tones.

## Troubleshooting

### Colors Still Look Blocky
1. Check that MesloLGS NF font is properly installed
2. Ensure Windows Terminal is using the correct color scheme
3. Try reducing the font size slightly
4. Verify that ClearType is enabled in Windows

### Performance Issues
1. Reduce opacity to 85-90
2. Disable background image effects
3. Use a simpler color scheme

## Color Palette Explanation

The new configuration uses:
- **Smoother blues**: `#3b8eea` instead of harsh blues
- **Gentle greens**: `#23d18b` for better readability
- **Muted reds**: `#f14c4c` that's easier on the eyes
- **Balanced contrast**: White text on colored backgrounds for clarity

## Alternative: Cobalt2 Smooth Theme

If you prefer the Cobalt2 theme, use the "Cobalt2 Smooth" color scheme in the Windows Terminal settings. This provides the same smooth appearance with Wes Bos's signature colors.

## Final Notes

- The smooth appearance comes from better color harmony and reduced contrast
- Font rendering with ClearType helps eliminate pixelation
- Proper opacity and acrylic effects create depth without harshness
- The diamond separators provide clean visual breaks between segments

After applying these changes, your terminal should have a much smoother, less blocky appearance while maintaining the Powerlevel10k functionality and Cobalt2 aesthetic. 