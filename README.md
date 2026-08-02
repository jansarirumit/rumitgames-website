# Rumit Games Website

Static website prepared for GitHub Pages and the custom domain `rumitgames.com`.

## 1. Before publishing

1. Open `assets/site.js`.
2. Replace every `url:"#"` with the correct Google Play or App Store URL.
3. Replace placeholder game names/descriptions if required.
4. Create a free Formspree form and replace `YOUR_FORM_ID` in:
   - `advertise.html`
   - `contact.html`
5. Replace ad placeholders only after your advertising account is approved.
6. Review the privacy-policy and terms templates.
7. Add real screenshots and icons to `/assets/` when available.

## 2. Publish with GitHub Pages

1. Sign in to GitHub.
2. Create a new public repository, for example `rumitgames-website`.
3. In VS Code, open this folder.
4. Open Terminal and run:

```bash
git init
git add .
git commit -m "Initial Rumit Games website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/rumitgames-website.git
git push -u origin main
```

5. On GitHub, open **Settings → Pages**.
6. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
7. Save.

## 3. Connect rumitgames.com

The repository already includes a `CNAME` file containing `rumitgames.com`.

At your domain registrar, add:

### Apex domain records

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

### WWW record

| Type | Name | Value |
|---|---|---|
| CNAME | www | YOUR_USERNAME.github.io |

After DNS has propagated, return to **GitHub → Settings → Pages** and enable **Enforce HTTPS**.

## 4. Advertising

The left and right columns currently contain visual ad placeholders.

After Google AdSense approval:
1. Add the AdSense site script inside the `<head>` of every page.
2. Replace each `.ad-slot` placeholder with the ad-unit code.
3. Add a consent-management solution where legally required.
4. Update the privacy policy to name the advertising and analytics providers.

Do not disguise sponsored cards as editorial recommendations. Keep the `Sponsored` or `Featured` label visible.

## 5. SEO checklist

- Submit `https://rumitgames.com/sitemap.xml` to Google Search Console.
- Add a unique title and meta description to every new page.
- Create one page for each game.
- Use original screenshots, descriptions and gameplay information.
- Add internal links between related articles and games.
- Update articles that rely on current rankings or market figures.
- Add author/editorial and source information to research-led articles.

## 6. Important content note

The included articles are evergreen starter drafts, not current statistical research. Any article about current download rankings, revenues, market share or platform usage must be researched and cited immediately before publication.
