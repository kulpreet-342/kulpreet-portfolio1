/**
 * ====================================================================
 * PORTFOLIO CONFIGURATION - KULPREET KAUR
 * ====================================================================
 * You can edit your details directly in this file!
 * Any changes here will update across all 4 pages automatically.
 * You can also use the on-screen "Customize Profile" button on the site.
 */

const PORTFOLIO_CONFIG = {
  // Personal Info
  name: "Kulpreet Kaur",
  headlineRole: "1st Year Mechanical Engineering Student & Rocketry Enthusiast",
  
  // Page 1: Home 2-Line Intro
  introLine1: "First-year Mechanical Engineering student at JECRC University with a deep fascination for rocketry and how propulsion systems defy gravity.",
  introLine2: "Driven by relentless problem-solving, MIT lectures, cartoon artistry, and an unshakeable drive to find solutions even in seemingly impossible situations.",
  
  // Education & Roots
  university: "JECRC University, Jaipur",
  degree: "B.Tech in Mechanical Engineering (1st Year, 2024 - 2028)",
  school: "Nachiketan Public School",
  hometown: "Ellenabad, Haryana, India",
  currentCity: "Jaipur, Rajasthan / Ellenabad, Haryana",

  // Page 4: Contact Information (Clickable & Editable)
  contact: {
    phone: "+91 95000 00065", // Replace with your complete phone number
    phoneRaw: "+919500000065", // Format without spaces for tel: link
    email: "kulpreet.kaur@example.com", // Replace with your real email address
    linkedin: "https://www.linkedin.com/in/kulpreet-kaur", // Replace with your real LinkedIn profile URL
    linkedinDisplay: "linkedin.com/in/kulpreet-kaur",
    github: "https://github.com", // Optional, can be updated
    location: "Ellenabad, Haryana | Jaipur, Rajasthan"
  },

  // Core Strengths & Passions
  passions: [
    {
      title: "Rockets & Space Propulsion",
      description: "Fascinated by multi-stage propulsion, aerodynamic nozzle design, thrust vectors, and orbital mechanics."
    },
    {
      title: "MIT OpenCourseWare Deep Dives",
      description: "Self-driven learner absorbing university-level lectures in classical mechanics, calculus, and fluid dynamics."
    },
    {
      title: "Cartoon Drawing & Visual Storytelling",
      description: "Passionate artist bringing characters and concepts to life through creative cartooning and sketching."
    },
    {
      title: "Manga & Analytical Reading",
      description: "Avid manga reader inspired by perseverance, intricate worldbuilding, and inventive technical themes."
    }
  ],

  // Signature Mindset
  superpower: {
    title: "Relentless Problem-Solver",
    motto: "Always find a way to do something, even in an impossible situation.",
    description: "Whether tackling tough engineering mechanics, complex technical puzzles, or unforeseen hurdles, I adapt quickly, test alternative pathways, and refuse to surrender."
  }
};

// Export or attach to global window
if (typeof window !== "undefined") {
  window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}
