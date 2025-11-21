# GitHub Setup Instructions

The website has been created and is ready to push to GitHub!

## Step 1: Create the GitHub Repository

1. Go to https://github.com/new
2. Repository name: `StCarloAcutis_Website`
3. Description: "Official website for Blessed Carlo Acutis Parish - Diocese of Worcester, MA"
4. Choose: Public repository
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Push Your Code

The Git repository is already initialized. After creating the repository on GitHub, run:

```bash
cd /home/rustt/projects/StCarloAcutis_Website
git remote add origin https://github.com/YOUR_USERNAME/StCarloAcutis_Website.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## What's Been Created

✅ Complete parish website with 8 pages
✅ Home, About, Mass Times, Bulletins, Sacraments, Ministries, Contact, Give
✅ Responsive CSS design with Catholic aesthetic  
✅ Interactive JavaScript features
✅ README and documentation
✅ Git repository initialized with initial commit

## Project Structure

```
StCarloAcutis_Website/
├── README.md
├── .gitignore
├── GITHUB_SETUP.md
├── public/
│   ├── index.html (Home)
│   ├── about.html
│   ├── mass-times.html
│   ├── bulletins.html
│   ├── sacraments.html
│   ├── ministries.html
│   ├── contact.html
│   ├── give.html
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── main.js
│   │   └── bulletins.js
│   └── images/ (empty, ready for parish photos)
└── bulletins/ (empty, ready for PDF bulletins)
```

## Next Steps After Pushing

1. Add parish images to `public/images/`
2. Upload bulletin PDFs to `bulletins/`
3. Update content as needed
4. Set up hosting (GitHub Pages, Netlify, or parish hosting)

---

*Website built for Blessed Carlo Acutis Parish*
*Diocese of Worcester, Massachusetts*
