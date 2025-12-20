# Deployment Guide - Vercel

## Setting Up Admin Dashboard on Vercel

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

- Use a strong, unique password
- Don't use the default "admin" / "admin123"
- These are case-sensitive
- Make sure to set them for **Production**, **Preview**, and **Development** environments

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
