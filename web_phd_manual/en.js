// en.js: ALL the manual text lives here, none is typed inside the page layout.
// For Spanish later: copy this file to es.js, translate the text (not the keys, ids, icons or image names),
// and load es.js instead of en.js in index.html.
//
// Block types used below:
//   sub (small heading), p (paragraph), steps (numbered), list (bullets), note (tinted box),
//   pair (two side by side), files (file names), icons (icon row with screenshot popups),
//   accordion (a row that opens and closes)

window.MANUAL_TEXT = {
  lang: "en",

  // The Homepage button. Leave "" until you have a real domain, then put the app home page address here.
  homeUrl: "",

  page: {
    docTitle: "User manual | Profile Hub Dossier",
    brand: "Profile Hub Dossier",
    title: "User manual",
    lede: "Everything you need to use PHD on the web, step by step."
  },

  // The 3 buttons that stay at the top. target = the id of the section it scrolls to.
  nav: {
    label: "Manual sections",
    profiles: { text: "Profiles", icon: "badge", target: "profiles" },
    home: { text: "Homepage", icon: "home" },
    features: { text: "Features", icon: "widgets", target: "features" }
  },

  ui: {
    iconHint: "Tap an icon to see where it is in the app.",
    close: "Close",
    tapOutside: "Tap outside the picture to close it.",
    screenshotSoon: "Screenshot coming soon",
    homeSoon: "The app link will be added soon.",
    guideSoon: "This guide is coming soon."
  },

  footer: {
    support: "Support:",
    email: "profilehubdossier@gmail.com",
    copy: "© 2026 Fryinocean, Profile Hub Dossier"
  },

  sections: [
    // ───────────────────────── 1. GENERAL ─────────────────────────
    {
      id: "general",
      icon: "info",
      title: "General",
      intro: "How to start, how to finish, and what happens to your files.",
      blocks: [
        {
          type: "icons",
          items: [
            {
              id: "new",
              icon: "queue_play_next",
              label: "New",
              title: "The New button",
              image: "images/general-new.webp",
              alt: "The home page with the New button at the bottom",
              caption: "New is the button at the bottom of the home page. Tap it to start: Add, Edit, Summary or Manage.",
              mark: { x: 34, y: 88, w: 32, h: 9 }
            },
            {
              id: "person",
              icon: "manage_accounts",
              label: "Person setting",
              title: "The person setting icon",
              image: "images/general-person.webp",
              alt: "The home page with the person setting icon above the New bar, on the right",
              caption: "The person setting icon is at the right end, just above the New bar. Tap it to add or import a contact.",
              mark: { x: 76, y: 80, w: 15, h: 7 }
            },
            {
              id: "close",
              icon: "close",
              label: "X",
              title: "The X icon",
              image: "images/general-close.webp",
              alt: "The home page with the X icon above the New bar, on the left",
              caption: "X is at the left end, just above the New bar. Tap it when you are done to save your changes.",
              mark: { x: 9, y: 80, w: 15, h: 7 }
            },
            {
              id: "addContact",
              icon: "person_add",
              label: "Add contact",
              title: "Add contact",
              image: "images/general-add-contact.webp",
              alt: "The contact menu with the Add contact icon",
              caption: "Tap the person setting icon, then Add contact. Or choose Import to bring in contacts from a .vcf file.",
              mark: { x: 20, y: 40, w: 20, h: 10 }
            }
          ]
        },

        { type: "sub", text: "First time here" },
        {
          type: "steps",
          items: [
            "Enter your email. We send you a sign-in link, so there is no password to remember.",
            "Pick your plan.",
            "You land on the home page.",
            "Before anything else, add a contact (tap the person setting icon, then add contact or import). Import only accepts contact files, such as .vcf files."
          ]
        },

        { type: "sub", text: "Everyday use" },
        {
          type: "steps",
          items: [
            "Tap New at the bottom of the home page.",
            "Pick an action: Add, Edit, Summary or Manage.",
            "Pick a profile, such as Cosmetic or Education.",
            "Pick a contact.",
            "Tap the date. Add takes a single date. Edit, Summary and Manage use the date range from the calendar at the top of the home page.",
            "Do your work, then finish as described below."
          ]
        },

        { type: "sub", text: "When you are done" },
        {
          type: "pair",
          items: [
            {
              icon: "close",
              title: "Tap X, then Confirm",
              text: "You stay in the app. Your changes download as files."
            },
            {
              icon: "logout",
              title: "Tap Finish & Sign Out",
              text: "Your files download and you go back to the email login page."
            }
          ]
        },
        { type: "p", text: "Only changed files download. If nothing changed, nothing downloads." },

        { type: "sub", text: "Your files" },
        {
          type: "p",
          text: "Every file name starts with the date and time it was made: year, month, day, then hour, minute and second. For example, 20261010_170833 means 2026-10-10 at 17:08:33."
        },
        {
          type: "files",
          items: [
            {
              name: "20261010_170833_phdweb.db",
              text: "Your database file with all your records. It downloads when you change records."
            },
            {
              name: "20261010_170833.ics",
              text: "Your appointments. It downloads when you add an appointment. Open it to add the events to your calendar, then delete it."
            },
            {
              name: "20261010_170833.phdcos",
              text: "A cosmetic style you exported with Style Transfer (Business plan). Import it to bring the style into another contact."
            }
          ]
        },

        { type: "sub", text: "Good to know" },
        {
          type: "list",
          items: [
            "A message that asks you to choose disappears by itself after 3 seconds.",
            "The calendar at the top of the home page sets the date range for Edit, Summary and Manage."
          ]
        },

        {
          type: "note",
          icon: "lock",
          text: "We work hard to protect your privacy. Your records live in a file on your own device, not on our servers. That is why there are a few extra steps: download your file, keep your newest file, and delete the ics files after you add them to your calendar."
        },

        {
          type: "accordion",
          icon: "tune",
          title: "Advanced use",
          sub: "Moving files and using more than one device",
          blocks: [
            { type: "sub", text: "Where your files go" },
            {
              type: "list",
              items: [
                "Phones, tablets, Safari and Firefox: files go to your downloads folder, and the app asks you to confirm each file.",
                "Chrome or Edge on a computer: the database file is saved where you choose the first time, and later saves replace that file. Calendar files ask where to save each time."
              ]
            },
            { type: "sub", text: "Your newest file and more than one device" },
            {
              type: "list",
              items: [
                "Next time you sign in, open your newest database file. Check the date and time in the name.",
                "There is no sync between devices. Move your newest file to the other device before you start, or you may overwrite newer work.",
                "The app compares your file with your last save and warns you if a newer one may exist."
              ]
            },
            { type: "sub", text: "Keep things tidy" },
            {
              type: "list",
              items: [
                "Copy your file to a safe folder before you replace it, so you always have a backup.",
                "Delete old calendar files after you add the events to your calendar, so you don't add them twice."
              ]
            }
          ]
        }
      ]
    },

    // ───────────────────────── 2. PROFILES ─────────────────────────
    {
      id: "profiles",
      icon: "badge",
      title: "Profiles",
      intro: "Tap a profile to open its guide.",
      blocks: [
        {
          type: "accordion",
          accent: "cosmetic",
          icon: "self_care",
          title: "Cosmetic",
          sub: "Style profiles, items and appointments",
          blocks: [{ type: "p", text: "{guideSoon}" }]
        },
        {
          type: "accordion",
          accent: "money",
          icon: "money_bag",
          title: "Moneyflow",
          sub: "Spending by person, store and category",
          blocks: [{ type: "p", text: "{guideSoon}" }]
        },
        {
          type: "accordion",
          accent: "edu",
          icon: "school",
          title: "Education",
          sub: "Tuition, books, supplies and other school costs",
          blocks: [{ type: "p", text: "{guideSoon}" }]
        }
      ]
    },

    // ───────────────────────── 3. FEATURES ─────────────────────────
    {
      id: "features",
      icon: "widgets",
      title: "Features",
      intro: "Extra tools for your file and your plan.",
      blocks: [
        {
          type: "accordion",
          icon: "modeling",
          title: "Export and Import",
          sub: "Move data in and out of your file",
          tag: "Business",
          blocks: [{ type: "p", text: "{guideSoon}" }]
        },
        {
          type: "accordion",
          icon: "folder_code",
          title: "Style Transfer",
          sub: "Export a style, import it, or transfer it to another contact",
          tag: "Business",
          blocks: [{ type: "p", text: "{guideSoon}" }]
        },
        {
          type: "accordion",
          icon: "quick_reference_all",
          title: "Business Report",
          sub: "Your business activity at a glance",
          tag: "Business",
          blocks: [{ type: "p", text: "{guideSoon}" }]
        },
        {
          type: "accordion",
          icon: "settings_alert",
          title: "Admin",
          sub: "Account and app settings",
          blocks: [{ type: "p", text: "{guideSoon}" }]
        },
        {
          type: "accordion",
          icon: "gpp_maybe",
          title: "Reset",
          sub: "Reset options",
          blocks: [{ type: "p", text: "{guideSoon}" }]
        },
        {
          type: "accordion",
          icon: "theater_comedy",
          title: "Manage subscription",
          sub: "Plan, free trial and cancel",
          blocks: [{ type: "p", text: "{guideSoon}" }]
        }
      ]
    }
  ]
};