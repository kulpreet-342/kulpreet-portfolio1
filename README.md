# 🚀 Kulpreet Kaur - Personal Portfolio Website

Welcome to your customized 4-page portfolio website! This portfolio is specifically tailored for **Kulpreet Kaur**, 1st Year Mechanical Engineering student at **JECRC University**, passionate about rocketry, MIT lectures, manga, cartoon drawing, and relentless problem-solving.

---

## 🌟 Pages Overview

1. **Page 1: Home (`index.html`)**
   - Clean, high-impact hero section with your name.
   - Dedicated **2-line introduction**:
     > *"First-year Mechanical Engineering student at JECRC University with a deep fascination for rocketry and how propulsion systems defy gravity."*  
     > *"Driven by relentless problem-solving, MIT lectures, cartoon artistry, and an unshakeable drive to find solutions even in seemingly impossible situations."*
   - Interactive animated rocket propulsion visual, stats counter, and call-to-action buttons.

2. **Page 2: My Story, Hobbies & Education (`about.html`)**
   - **My Story**: Your journey from Ellenabad, Haryana to JECRC University, Jaipur.
   - **Academic Timeline**:
     - *JECRC University* (B.Tech Mechanical Engineering, 1st Year)
     - *Nachiketan Public School, Ellenabad* (Schooling & STEM foundations)
   - **Hobbies & Passions**:
     - 🚀 Rockets & How They Work (aerospace propulsion, nozzle physics)
     - 🎓 MIT Lectures (OpenCourseWare classical mechanics & calculus)
     - 📖 Reading Manga (creative narratives & perseverance)
     - 🎨 Drawing Cartoons & Sketches (artistic visualization & drafting)

3. **Page 3: Skills & Superpower (`skills.html`)**
   - **Signature Superpower Showcase**:  
     *"Always Find a Way — Even in an Impossible Situation"* (Deconstruct, Reframe, Iterate, Execute).
   - Mechanical & Rocketry Foundations (Propulsion, Statics, Fluid Flow intuition).
   - Cartooning & Visual Art (Freehand sketching, isometric projections, character design).
   - Self-Directed Learning & Research (Autonomous MIT lecture study, first-principles logic).

4. **Page 4: Contact & Professional Links (`contact.html`)**
   - **Clickable & Professional Cards**:
     - 📞 **Phone**: Click to call directly (`tel:`) + Copy to clipboard.
     - 💼 **LinkedIn**: Clickable profile link (opens in new tab) + Copy URL.
     - ✉️ **Email**: Clickable `mailto:` link + Copy address.
     - 📍 **Location**: Ellenabad, Haryana &bull; Jaipur, Rajasthan.
   - Interactive contact message form with simulated instant mail composer.

---

## ✏️ How to Fill In and Edit Your Details

You have **two easy ways** to update your contact number, LinkedIn URL, email, or any other details:

### Method 1: On-Screen Live Customizer (No Coding Needed!)
1. Open any page (e.g. `index.html` or `contact.html`) in your browser.
2. Click the orange **"✏️ Edit Details"** button in the top navigation bar or on the contact page.
3. A popup modal will appear where you can enter:
   - Your complete Phone Number (e.g. `+91 95XXXXXX65`)
   - Your real LinkedIn URL (e.g. `https://www.linkedin.com/in/kulpreet-kaur-xyz`)
   - Your real Email Address (e.g. `kulpreet.kaur@email.com`)
   - Your 2-line intro, name, or university details
4. Click **"Save Changes"**.
5. ✨ **Done!** The website updates instantly on screen and saves to your browser's local storage. It will stay updated even if you refresh or switch between pages!

---

### Method 2: Edit the Configuration File (`js/portfolio-config.js`)
If you want to permanently update the default code values in the files:
1. Open the file `js/portfolio-config.js` in Notepad or VS Code.
2. Update the fields inside the `PORTFOLIO_CONFIG` object:
   ```javascript
   contact: {
     phone: "+91 95000 00065", // Put your real phone number here
     phoneRaw: "+919500000065", // No spaces, for tel: link
     email: "your.name@email.com", // Put your real email here
     linkedin: "https://www.linkedin.com/in/your-profile", // Put your real LinkedIn link here
     linkedinDisplay: "linkedin.com/in/your-profile"
   }
   ```
3. Save the file. All 4 pages will now use these updated defaults!

---

## 🖥️ How to Open & Run the Website

You don't need any special software or terminal commands:
1. Go to your folder:  
   `Downloads/kulpreet portfolio`
2. Simply double-click **`index.html`**.
3. It will open directly in Google Chrome, Microsoft Edge, or any web browser!

---

## 🌐 How to Publish Online for Free

When you are ready to share your portfolio with recruiters, professors, or friends:
- **Option 1: Netlify Drop** (Easiest, takes 1 minute):
  1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
  2. Drag and drop the `kulpreet portfolio` folder onto the page.
  3. You instantly get a live, free website link (e.g., `kulpreet-kaur.netlify.app`)!
- **Option 2: GitHub Pages**:
  1. Push this folder to a GitHub repository named `portfolio`.
  2. In repository Settings > Pages, select the `main` branch and click Save.
  3. Your site will be live at `https://<your-username>.github.io/portfolio`.
