# Deployment Guide - Vercel

## Overview

This guide walks you through deploying the portfolio to Vercel and setting up the admin dashboard. Vercel is the recommended platform because it's optimized for Next.js, handles automatic deployments from GitHub, and provides excellent performance out of the box.

**Why Vercel?** It's built by the Next.js team, so it understands Next.js better than any other platform. Automatic deployments, edge functions, and zero-config SSL are just the beginning. Plus, the free tier is generous enough for most portfolios.

## Setting Up Admin Dashboard on Vercel

### Understanding the Admin System

The admin dashboard uses a simple but secure authentication system:
- **Credentials**: Stored in environment variables (never in code)
- **Session Management**: Uses httpOnly cookies (can't be accessed by JavaScript)
- **Security**: Secure cookies in production (HTTPS only)
- **No Defaults**: The code requires environment variables - no fallback credentials

This approach is perfect for a portfolio site where you're the only admin. It's simple, secure, and doesn't require complex OAuth or database setups.

### Step 1: Set Environment Variables in Vercel

1. Go to your Vercel project dashboard: https://vercel.com/dashboard
2. Select your project (`rw-portfolio`)
3. Go to **Settings** → **Environment Variables**
4. Add these two variables:

```
ADMIN_USERNAME=your_secure_username
ADMIN_PASSWORD=your_secure_password
```

**Important:**

- Use a strong, unique password (mix of letters, numbers, symbols)
- Don't use the default "admin" / "admin123" - be creative!
- These are case-sensitive (Admin ≠ admin)
- Make sure to set them for **Production**, **Preview**, and **Development** environments
- Consider using different credentials for each environment if you want extra security

### Step 2: Deploy to Vercel

After setting environment variables, deploy your code:

```bash
git add .
git commit -m "Ready for production"
git push origin main
```

Vercel will automatically build and deploy.

### Step 3: Access Admin Dashboard

Once deployed, access the admin dashboard at:

**https://robotwilliams.com/admin**

You'll see a login form. Enter:

- **Username**: The value you set for `ADMIN_USERNAME`
- **Password**: The value you set for `ADMIN_PASSWORD`

### Security Notes

✅ **Only you can login** - The credentials are stored securely in Vercel's environment variables
✅ **Not accessible to others** - Without your username/password, no one can access the admin dashboard
✅ **Secure cookies** - Session cookies are `httpOnly` and `secure` in production
✅ **No default credentials** - The code requires environment variables (no fallback defaults)

### Troubleshooting

**Can't login?**

- Double-check your environment variables in Vercel
- Make sure they're set for the **Production** environment
- Redeploy after changing environment variables
- Clear your browser cookies and try again

**Environment variables not working?**

- Vercel requires a redeploy after adding/changing environment variables
- Go to **Deployments** → Click **Redeploy** on the latest deployment

### Quick Vercel CLI Setup (Alternative)

If you prefer using the CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Set environment variables
vercel env add ADMIN_USERNAME
vercel env add ADMIN_PASSWORD

# Deploy
vercel --prod
```

## Admin Dashboard Features

Once logged in, you can:

- ✅ Edit **About** page content
- ✅ Edit **Contact** page content
- ✅ Edit **Portfolio Projects** (all 6 projects)
- ✅ See changes immediately on the live site
- ✅ Logout when done

All changes are saved directly to the markdown files and appear instantly on your live site!

## How It Works (Technical Deep Dive)

### The Authentication Flow

1. **User visits `/admin`**: The page loads and checks for an existing session cookie
2. **Login attempt**: Credentials are sent to `/api/admin/login` via POST request
3. **Server validation**: Server compares credentials against environment variables
4. **Session creation**: On success, server sets an `admin_session` cookie
5. **Cookie properties**: 
   - `httpOnly: true` - JavaScript can't access it (XSS protection)
   - `secure: true` - Only sent over HTTPS in production
   - `sameSite: "lax"` - CSRF protection
   - `maxAge: 24 hours` - Session expires after 24 hours

### Why This Approach?

**Simple**: No database needed, no OAuth setup, no complex token management. Just environment variables and cookies.

**Secure**: httpOnly cookies can't be stolen by XSS attacks. Secure flag ensures HTTPS-only transmission. SameSite prevents CSRF.

**Effective**: For a single-admin portfolio site, this is more than enough security. If you need multi-user support later, you can upgrade to a proper auth system.

### Content Updates

When you save content in the admin dashboard:
1. Content is sent to `/api/admin/save-content`
2. Server validates you're authenticated
3. Markdown file is written to the file system
4. Next.js detects the change (in development) or you redeploy (in production)
5. Frontend routes use `force-dynamic` so they always fetch fresh content

**Note**: In production, file system writes persist between deployments on Vercel, but for true persistence, consider using a database or Git-based workflow.

### Performance Considerations

- **Dynamic Routes**: Admin routes use `force-dynamic` to ensure fresh content
- **API Routes**: All admin API routes are server-rendered on demand
- **No Caching**: Content API routes disable caching so admin updates appear immediately
- **Build Time**: Static pages are still pre-rendered for performance

This hybrid approach gives you the best of both worlds: fast static pages for visitors, dynamic content for admin updates.
