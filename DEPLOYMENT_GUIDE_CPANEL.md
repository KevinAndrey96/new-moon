# cPanel Deployment Guide (Moon / New Moon Psicología)

## 1. On your computer

### 1.1 Generate the build

In the project root:

```bash
npm run build
```

Wait for it to finish. You should have `.next/standalone/server.js` and `.next/static/`.

### 1.2 Generate the ZIP

```bash
./create-deploy-zip.sh
```

This creates a file like `new-moon-deploy-YYYYMMDD-HHMMSS.zip`. The ZIP contains:
- All application code (including the `.next/` folder)
- The `.env.local` file with environment variables (if it exists)
- **Does not** include `node_modules` (they are installed on the server)

**Important**: If you don't have an `.env.local` file, the script will ask whether to continue. The contact form requires SMTP variables to work.

---

## 2. On cPanel

### 2.1 Clean and extract the ZIP

1. Open **File Manager** in cPanel.
2. Go to the folder where the app lives. If you use **Application root: moon**, go to the **`moon`** folder (e.g. `public_html/moon` or `moon` in your home).
3. **Delete everything** inside that folder, including `.htaccess` if it existed. (The ZIP includes the `.htaccess` required by the project.)
4. Upload the **`new-moon-deploy-YYYYMMDD-HHMMSS.zip`** file to that same folder (e.g. inside `moon`).
5. Right-click the ZIP → **Extract**.
6. After extracting, verify that the folder contains: `.htaccess`, `.env.local`, `.next/`, `app/`, `components/`, `lib/`, `public/`, `package.json`, `start-server.js`, etc. If the ZIP created a subfolder when extracting, move its contents up one level so they are at the app root.

**Note**: The `.env.local` file with SMTP variables is already included in the ZIP if it exists in your local project.

**Target structure** (app folder, e.g. `moon/`):

```
moon/
  .htaccess
  .env.local
  .next/
    standalone/
      server.js
    static/
  app/
  components/
  lib/
  public/
  package.json
  start-server.js
  next.config.js
  tsconfig.json
```

---

## 3. Create / configure the Node.js application in cPanel

1. In cPanel, open **Node.js** (or “Setup Node.js App” / “Application Manager”).
2. If the “moon” app already exists, edit it; otherwise, **Create application**.
3. Configure as follows:

| Field | Value |
|-------|--------|
| **Node.js version** | `22.18.0` (or the 22.x version available) |
| **Application mode** | `Production` (recommended; screenshot may show Development) |
| **Application root** | `moon` (path relative to your home, e.g. `moon` or `public_html/moon` depending on your setup) |
| **Application URL** | `nmpsicologiaenevolucion.com` |
| **Application startup file** | `start-server.js` |
| **Passenger log file** | Optional; if used, e.g. `/mnt/jupiter/nmpsicologia/logs/passenger.log` |

4. Save the configuration (Save / Update).

### 3.1 Install dependencies on the server (Run NPM Install)

1. On the same **moon** app screen, click **Run NPM Install** (or “Run NPM Install” when shown).
2. Wait for it to finish (“Installing NPM...”); CloudLinux will install dependencies in the virtual environment and create the `node_modules` link in the app root.
3. Do not run `npm install` manually in the app root; use only this cPanel option.

### 3.2 Environment variables

**You no longer need to set them manually in cPanel** if you uploaded the `.env.local` file in step 2.1.

The `start-server.js` script automatically loads variables from `.env.local` on startup.

If you prefer to use cPanel’s configuration instead of the file, you can add the variables under **Environment variables**:

- `NODE_ENV=production` (if not set by Application mode).
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_SECURE`
- `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

### 3.3 Start the app

- Click **RESTART** (or **Start** if it was stopped).
- Confirm the status is “Running” or similar.

---

## 4. Verify

- Open **https://nmpsicologiaenevolucion.com** in your browser.
- If you see 503 or a Passenger error, check the **Passenger log file** you configured or the Node application logs in cPanel.

---

## Quick summary

| Step | Where | Action |
|------|--------|--------|
| 1 | Local | `npm run build` |
| 2 | Local | `./create-deploy-zip.sh` (automatically includes `.env.local` if present) |
| 3 | cPanel File Manager | Delete everything in the `moon` folder (incl. `.htaccess`), upload ZIP and extract |
| 4 | cPanel Node.js | Create/edit app: root `moon`, domain URL, startup `start-server.js`, Node 22 |
| 5 | cPanel Node.js | Run NPM Install |
| 6 | cPanel Node.js | Restart App |
