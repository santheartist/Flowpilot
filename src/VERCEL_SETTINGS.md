# Exact Vercel Dashboard Settings

## If Auto-Detection Doesn't Work

Go to your Vercel project → Settings → General → Build & Development Settings

### Framework Preset
Select: **Vite**

### Build Command
```
npm run build
```

### Output Directory
```
dist
```

### Install Command
```
npm install
```

### Root Directory
Leave blank or set to: `./`

### Node.js Version
18.x (or latest)

---

## Alternative: Use Environment Variable Override

If the above doesn't work, try this:

1. Go to Project Settings → Environment Variables
2. Add this variable:
   - **Key:** `OUTPUT_DIRECTORY`
   - **Value:** `dist`
   - **Environments:** Production, Preview, Development

---

## Step-by-Step Fix

### Step 1: Verify All Files Are Committed

```bash
# Check if files exist
ls -la index.html
ls -la src/main.tsx
ls -la package.json
ls -la vite.config.js
ls -la vercel.json

# If any are missing, commit them
git add index.html src/main.tsx package.json vite.config.js vercel.json
git commit -m "Add all required files"
git push origin main
```

### Step 2: Delete and Recreate Vercel Project

Sometimes Vercel caches old settings:

1. Go to Vercel Dashboard
2. Select your project
3. Settings → General → scroll to bottom
4. Click **"Delete Project"**
5. Confirm deletion
6. Go back to Vercel dashboard
7. Click **"Add New Project"**
8. Import your GitHub repo again
9. **IMPORTANT:** Before clicking "Deploy", click "Edit" next to Build & Development Settings
10. Set these manually:
    - Framework Preset: **Vite**
    - Build Command: `npm run build`
    - Output Directory: `dist`
    - Install Command: `npm install`
11. Click "Deploy"

### Step 3: Check Build Logs

After deployment starts:
1. Click on the deployment
2. Click "Building" or "View Build Logs"
3. Look for actual error (not just "dist not found")
4. Common errors:
   - **TypeScript errors** → Build fails before creating dist
   - **Missing dependencies** → Check package.json
   - **Import errors** → Check file paths

---

## Manual CLI Deployment (Alternative Method)

If the dashboard doesn't work, try CLI:

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy from project root
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? flowpilot-landing
# - Directory? ./
# - Override settings? No

# If it asks for framework, select: vite
```

---

## Debugging: Test Build Locally

Before deploying, test if the build works:

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Try to build
npm run build

# Check if dist folder was created
ls -la dist/

# If dist folder exists with files, the build works
# If not, check the error message
```

Common local build errors:
- **Module not found:** Check imports in components
- **TypeScript errors:** Check tsconfig.json
- **Vite errors:** Check vite.config.js

---

## Nuclear Option: Simplify Configuration

If nothing works, remove complexity:

1. Delete `vercel.json`
2. Let Vercel auto-detect everything
3. Only set these in dashboard:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

---

## Still Not Working?

Check these:

1. **Is your repo public or private?**
   - Private repos need proper Vercel permissions

2. **Is the main branch named `main` or `master`?**
   - Vercel deploys from the main branch

3. **Did you select the correct repository?**
   - Double-check in Vercel project settings

4. **Check Vercel build logs for the actual error**
   - The "dist not found" error often masks the real issue
   - Scroll up in logs to find the actual build failure

5. **Try a different branch**
   ```bash
   git checkout -b vercel-deploy
   git add .
   git commit -m "Deploy test"
   git push origin vercel-deploy
   ```
   Then deploy from `vercel-deploy` branch in Vercel settings

---

## Contact Information

If you share the actual build log from Vercel (not just "dist not found" but the full log), I can help identify the specific issue.
