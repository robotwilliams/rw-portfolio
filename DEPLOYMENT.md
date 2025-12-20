# Deployment Guide - Vercel

## Overview

This guide covers deploying the portfolio to Vercel and setting up the admin dashboard. Vercel is recommended because it's optimized for Next.js, handles automatic deployments from GitHub, and provides excellent performance.

Why Vercel? It's built by the Next.js team, so it understands Next.js better than other platforms. Automatic deployments, edge functions, and zero-config SSL come standard. The free tier is generous enough for most portfolios.

## Setting Up Admin Dashboard on Vercel

### Understanding the Admin System

The admin dashboard uses a simple but secure authentication system. Credentials are stored in environment variables, never in code. Session management uses httpOnly cookies that can't be accessed by JavaScript. Cookies are secure in production (HTTPS only). The code requires environment variables with no fallback credentials.

This approach works well for a portfolio site where you're the only admin. It's simple, secure, and doesn't require OAuth or database setups.

### Step 1: Set Environment Variables in Vercel

1. Go to your Vercel project dashboard: https://vercel.com/dashboard
2. Select your project (`rw-portfolio`)
3. Go to **Settings** → **Environment Variables**
4. Add these two variables:

```
ADMIN_USERNAME=your_secure_username
ADMIN_PASSWORD=your_secure_password
```

Important: use a strong, unique password with letters, numbers, and symbols. Don't use defaults like "admin" or "admin123". These are case-sensitive. Set them for Production, Preview, and Development environments. Consider using different credentials for each environment for extra security.

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

Only you can login. Credentials are stored securely in Vercel's environment variables. Without your username and password, no one can access the admin dashboard. Session cookies are httpOnly and secure in production. The code requires environment variables with no fallback defaults.

### Troubleshooting

Can't login? Double-check your environment variables in Vercel. Make sure they're set for the Production environment. Redeploy after changing environment variables. Clear your browser cookies and try again.

Environment variables not working? Vercel requires a redeploy after adding or changing environment variables. Go to Deployments and click Redeploy on the latest deployment.

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

Once logged in, you can edit the About page content, edit the Contact page content, edit all portfolio projects, see changes immediately on the live site, and logout when done.

All changes are saved directly to the markdown files and appear instantly on your live site!

## How It Works

### The Authentication Flow

User visits /admin and the page checks for an existing session cookie. On login attempt, credentials are sent to /api/admin/login via POST request. The server compares credentials against environment variables. On success, the server sets an admin_session cookie with these properties: httpOnly true (JavaScript can't access it, XSS protection), secure true (only sent over HTTPS in production), sameSite lax (CSRF protection), maxAge 24 hours (session expires after 24 hours).

### Why This Approach

Simple: no database needed, no OAuth setup, no complex token management. Just environment variables and cookies.

Secure: httpOnly cookies can't be stolen by XSS attacks. Secure flag ensures HTTPS-only transmission. SameSite prevents CSRF.

Effective: for a single-admin portfolio site, this provides sufficient security. If you need multi-user support later, you can upgrade to a proper auth system.

### Content Updates

When you save content in the admin dashboard, it's sent to /api/admin/save-content. The server validates you're authenticated, then writes the markdown file to the file system. Next.js detects the change in development, or you redeploy in production. Frontend routes use force-dynamic so they always fetch fresh content.

**Important**: On Vercel, the file system is read-only. File writes will fail in production. For production content management, you need to use one of these approaches:

1. **Database**: Use Vercel KV, Supabase, or another database to store content
2. **Git-based workflow**: Use GitHub API to commit changes back to the repository
3. **External storage**: Use Vercel Blob Storage or similar service
4. **Development only**: Use the admin dashboard locally, then commit and push changes

The current implementation works in development but will show an error in production on Vercel. This is a platform limitation, not a code issue.

### Performance Considerations

Admin routes use force-dynamic to ensure fresh content. All admin API routes are server-rendered on demand. Content API routes disable caching so admin updates appear immediately. Static pages are still pre-rendered for performance.

This hybrid approach gives you fast static pages for visitors and dynamic content for admin updates.
