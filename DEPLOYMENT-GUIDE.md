# 🚀 Timberdart AI Website - Railway Deployment Guide

## Prerequisites
- Git installed on your computer
- A GitHub account (free)
- A Railway account (free - sign up at railway.app)
- Your domain ready (if connecting custom domain)

---

## Part 1: Push Your Code to GitHub

### Step 1: Initialize Git Repository
Open your terminal/command prompt in the project folder and run:

```bash
git init
git add .
git commit -m "Initial commit - Timberdart AI website"
```

### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `timberdart-website` (or any name you prefer)
3. Keep it **Private** (recommended) or Public
4. **Do NOT** check "Add a README file"
5. Click **Create repository**

### Step 3: Push to GitHub
Copy the commands from GitHub (they'll look like this) and run them:

```bash
git remote add origin https://github.com/YOUR-USERNAME/timberdart-website.git
git branch -M main
git push -u origin main
```

**Note:** Replace `YOUR-USERNAME` with your actual GitHub username.

---

## Part 2: Deploy to Railway

### Step 1: Sign Up / Log In to Railway
1. Go to https://railway.app/
2. Click **"Login"** or **"Start a New Project"**
3. Sign in with your **GitHub** account (recommended)

### Step 2: Create New Project
1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. If this is your first time:
   - Click **"Configure GitHub App"**
   - Give Railway access to your repository
4. Select your **timberdart-website** repository

### Step 3: Configure Deployment
Railway will automatically detect your project. Wait for it to deploy (usually takes 2-3 minutes).

You'll see:
- ✅ Build successful
- ✅ Deployment successful

### Step 4: Get Your Railway URL
1. Click on your deployment
2. Go to **"Settings"** tab
3. Under **"Domains"**, you'll see a URL like: `your-project-name.up.railway.app`
4. Click on it to test your website!

---

## Part 3: Connect Your Custom Domain

### Step 1: Add Domain in Railway
1. In your Railway project, go to **"Settings"** tab
2. Scroll to **"Domains"** section
3. Click **"+ Custom Domain"**
4. Enter your domain: `yourdomain.com` (or `www.yourdomain.com`)
5. Click **"Add Domain"**

Railway will show you DNS records you need to add.

### Step 2: Configure DNS (if using root domain like `timberdart.com`)
Railway will show you something like:

**A Record:**
```
Type: A
Name: @
Value: [Railway's IP address]
```

**Optional CNAME for www:**
```
Type: CNAME
Name: www
Value: your-project-name.up.railway.app
```

### Step 3: Add DNS Records to Your Domain Provider

**Where to do this depends on where you bought your domain:**

#### If using **Namecheap**:
1. Log in to Namecheap
2. Go to **Domain List** → Click **Manage**
3. Go to **Advanced DNS** tab
4. Click **Add New Record**
5. Add the A record:
   - Type: `A Record`
   - Host: `@`
   - Value: [Railway's IP address]
   - TTL: Automatic
6. Add CNAME for www (optional):
   - Type: `CNAME Record`
   - Host: `www`
   - Value: `your-project-name.up.railway.app`
   - TTL: Automatic
7. Click **Save All Changes**

#### If using **GoDaddy**:
1. Log in to GoDaddy
2. Go to **My Products** → **Domains**
3. Click your domain → **Manage DNS**
4. Add A Record:
   - Type: `A`
   - Name: `@`
   - Value: [Railway's IP address]
   - TTL: 600 seconds
5. Add CNAME (optional):
   - Type: `CNAME`
   - Name: `www`
   - Value: `your-project-name.up.railway.app`
   - TTL: 1 hour
6. Click **Save**

#### If using **Cloudflare**:
1. Log in to Cloudflare
2. Select your domain
3. Go to **DNS** section
4. Click **Add record**
5. Add A Record:
   - Type: `A`
   - Name: `@`
   - IPv4 address: [Railway's IP address]
   - Proxy status: **DNS only** (grey cloud)
6. Add CNAME (optional):
   - Type: `CNAME`
   - Name: `www`
   - Target: `your-project-name.up.railway.app`
   - Proxy status: **DNS only**
7. Click **Save**

### Step 4: Wait for DNS Propagation
- DNS changes can take **5 minutes to 48 hours** to propagate worldwide
- Usually happens within **15-30 minutes**
- Check status at: https://dnschecker.org/

### Step 5: Verify SSL Certificate
- Railway automatically provisions SSL certificates (HTTPS)
- Once DNS is active, Railway will generate the certificate (takes ~5-10 minutes)
- Your site will automatically redirect HTTP to HTTPS

---

## Part 4: Test Your Deployment

Visit these URLs to confirm everything works:

1. **Homepage:** `https://yourdomain.com`
2. **Profit Accelerator:** `https://yourdomain.com/profit-accelerator`
3. **Booking Confirmed:** `https://yourdomain.com/booking-confirmed?email=test@example.com&name=John`

---

## Troubleshooting

### Issue: "Application failed to start"
**Solution:**
1. Check Railway logs in the **Deployments** tab
2. Make sure `package.json` and `server.js` are in the repository
3. Redeploy by clicking **"Redeploy"**

### Issue: Domain not working after 24 hours
**Solution:**
1. Verify DNS records are correct using https://dnschecker.org/
2. Check that Railway shows domain as "Active" (green checkmark)
3. Ensure you're using **DNS only** mode (not proxied) in Cloudflare if applicable

### Issue: CSS/Images not loading
**Solution:**
1. Check that all file paths are correct (relative paths)
2. Verify `assets` folder is in your repository
3. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: 404 errors on page refresh
**Solution:**
- This is already handled in `server.js` with the 404 handler
- If still occurring, check Railway logs

---

## Updating Your Website

Whenever you make changes:

```bash
git add .
git commit -m "Updated website content"
git push
```

Railway will **automatically** detect the changes and redeploy! (takes ~2-3 minutes)

---

## Environment Variables (if needed later)

If you need to add environment variables:
1. Go to Railway project
2. Click **"Variables"** tab
3. Add your variables (e.g., `API_KEY=your-key`)
4. Redeploy

---

## Cost Information

**Railway Free Tier:**
- $5 free credit per month
- Usually enough for small-medium traffic websites
- Upgrades available if you exceed limits

---

## Support

If you run into issues:
- Check Railway docs: https://docs.railway.app/
- Railway Discord: https://discord.gg/railway
- Railway status: https://status.railway.app/

---

## Quick Command Reference

```bash
# Push changes to GitHub
git add .
git commit -m "Your message"
git push

# Check git status
git status

# View git history
git log --oneline

# Create a new branch (for testing)
git checkout -b new-feature
```

---

✅ **Your website is now live!** Share your link and start getting bookings! 🎉
