// en.js: ALL the manual text lives here, none is typed inside the page layout.
// For Spanish later: copy this file to es.js, translate the text (not the keys, ids, icons or image names),
// and load es.js instead of en.js in index.html.
//
// Block types used below:
//    sub (small heading), p (paragraph), steps (numbered), list (bullets), note (tinted box),
//    pair (two side by side), files (file names), icons (icon row with screenshot popups),
//    accordion (a row that opens and closes)
//
// In an icons item, mark is the red square on the picture. One box: mark: { x, y, w, h }.
// Several boxes: mark: [ { x, y, w, h }, { x, y, w, h } ]. All four numbers are percentages of the picture.
//
// A steps item can be a plain text, or { label: "Add Cosmetic:", text: "..." } (the label shows in purple).
//
// A section can have intro (one text, or a list of texts = one line each) and inline (small tappable icons
// written inside the sentences). Put {icon:name} in a sentence where the icon should sit, and describe
// that icon under inline: { name: { icon, label, title, image, alt, caption, mark } }.

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
      blocks: [
        { type: "sub", text: "First time here" },
        {
          type: "steps",
          items: [
            "Enter your email. We send you a sign-in link, so there is no password to remember.",
            "Pick your plan and complete checkout on the next page.",
            "Tap Start with a new file if you are new to PHD. Then you land on the home page.",
            "Before anything else, add a contact (tap the person setting icon, then add contact or import). Import only accepts contact files, such as .vcf files."
          ]
        },

        {
          type: "icons",
          items: [
            {
              id: "person",
              icon: "manage_accounts",
              label: "Person setting",
              title: "Person setting",
              image: "img/general-person-x.webp",
              alt: "The home page with the person setting icon above the New bar, on the right",
              caption: "Person setting is the icon at the right end, just above the New bar. Tap it to add or import a contact.",
              mark: { x: 87.3, y: 85.9, w: 8, h: 4.9 }
            },
            {
              id: "contact",
              icon: "person",
              label: "Contact",
              title: "Contact",
              image: "img/general-contact.webp",
              alt: "The contact menu with the Add and Import icons",
              caption: "Tap the person setting icon, then Contact. Pick Add to create a contact, or Import to bring in contacts from a .vcf file.",
              mark: [
                { x: 7.2, y: 89.4, w: 8.5, h: 5.9 },
                { x: 31.5, y: 89.4, w: 9.5, h: 5.9 }
              ]
            },
            {
              id: "close",
              icon: "close",
              label: "X",
              title: "The X icon",
              image: "img/general-person-x.webp",
              alt: "The home page with the X icon above the New bar, on the left",
              caption: "Tap X when you are done, then pick Confirm (download and stay) or Finish & Sign Out (download and leave).",
              mark: { x: 5.2, y: 85.9, w: 8, h: 4.9 }
            },
            {
              id: "new",
              icon: "queue_play_next",
              label: "New",
              title: "The New button",
              image: "img/general-new.webp",
              alt: "The New menu with the Action, Profile and Contact rows",
              caption: "Tap New at the bottom of the home page to open this menu. Pick an action, a profile and a contact, then tap Date.",
              mark: { x: 13, y: 54.3, w: 73.5, h: 9.3 }
            }
          ]
        },

        { type: "sub", text: "Everyday use" },
        {
          type: "steps",
          items: [
            "Sign in if needed, then tap Choose file and pick your newest file.",
            "Tap New, then pick one of these actions based on what you want to do: Add, Edit, Summary, Manage, Appointment or Report. Appointment and Report are for the Business plan only.",
            "Pick a profile, such as Cosmetic, Education or Moneyflow.",
            "Pick a contact.",
            "Tap Date. Add and Appointment take a single date. Edit, Summary, Manage and Report use the date range from the calendar at the top of the home page.",
            "Do your work, tap X, then finish as described below."
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
              title: "Tap X, then Finish & Sign Out",
              text: "Your files download and you go back to the email login page."
            }
          ]
        },
        { type: "p", text: "Cancel closes the message and you stay in the app." },

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
            "A message that asks you to choose disappears by itself after 3 to 5 seconds.",
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
      intro: [
        "Tap a profile to open its guide. Edit, Manage, Summary and Report use the records inside the date range you pick on the calendar.",
        "Edit and Manage can find more than one result. All of them show on the selection page {icon:selection}, so tap the one you want.",
        "Save is gray? Tap the info icon {icon:info} to see what is missing. Tap it again to hide the message."
      ],
      inline: {
        selection: {
          icon: "list_alt",
          label: "Selection page",
          title: "The selection page",
          image: "img/profiles-selection.webp",
          alt: "The selection page with a list of styles, the first one marked",
          caption: "Edit and Manage show every match here. Tap the one you want.",
          mark: { x: 9.4, y: 16.4, w: 81.3, h: 19 }
        },
        info: {
          icon: "info",
          label: "Info icon",
          title: "The info icon",
          image: "img/profiles-info.webp",
          alt: "The gray Save button with the info icon at the top right",
          caption: "If Save is gray, tap the info icon to see what is missing. Tap it again to hide the message.",
          mark: { x: 89.9, y: 40.9, w: 5.3, h: 14.5 }
        }
      },
      blocks: [
        {
          type: "accordion",
          accent: "cosmetic",
          icon: "self_care",
          title: "Cosmetic",
          sub: "Style profiles, items and appointments",
          blocks: [
            {
              type: "icons",
              hint: "Tap an icon to see the **COSMETIC** screen.",
              items: [
                {
                  id: "cosAdd",
                  icon: "create_new_folder",
                  label: "Add",
                  title: "Add Cosmetic",
                  image: "img/cosmetic-add.webp",
                  alt: "The Add Cosmetic form with the contact name marked at the top",
                  caption: "Each record belongs to a contact, such as yourself, a loved one, a friend or a client. Fill in the info, then tap Save. When you are done, tap X to download your file(s).",
                  mark: { x: 9.1, y: 5.3, w: 40.5, h: 6.3 }
                },
                {
                  id: "cosManage",
                  icon: "database_search",
                  label: "Manage",
                  title: "Manage Cosmetic",
                  image: "img/cosmetic-manage.webp",
                  alt: "The Manage Cosmetic search box with item name, style name and appointment status",
                  caption: "Enter your search info to find your records. The more boxes you fill in, the narrower the list. Then tap Search."
                },
                {
                  id: "cosAppt",
                  icon: "calendar_clock",
                  label: "Appointment",
                  title: "Appointment",
                  image: "img/cosmetic-appt.webp",
                  alt: "The Appointment form",
                  caption: "Fill in the appointment info, then tap Save. Business plan only."
                }
              ]
            },
            {
              type: "steps",
              items: [
                {
                  label: "Add Cosmetic:",
                  text: "Each record belongs to a contact, such as yourself, a loved one, a friend or a client. Fill in the info, then tap Save. When you are done, tap X to download your file."
                },
                {
                  label: "Edit Cosmetic:",
                  text: "Pick a date range on the calendar. If there is more than one result in that range, tap the one you want on the selection page. Change the info, then tap Save. When you are done, tap X to download your changes."
                },
                {
                  label: "Summary:",
                  text: "Summary shows, within the date range you pick on the home page calendar, your top 3 most expensive styles, top 3 most frequent items and top 3 most expensive items, plus each style with its items and a pie chart of the costs."
                },
                {
                  label: "Manage Cosmetic:",
                  text: "Pick a date range, enter your search info to find your records (the more boxes you fill in, the narrower the list), then tap Search. Tap a result, change the info, then tap Save."
                },
                {
                  label: "Appointment (Business plan):",
                  text: "Pick one date on the calendar to log the record, fill in the appointment info (including the appointment's date and time), then tap Save. Tap X to download. If you changed records and added an appointment, two files download: the database file and the calendar (.ics) file. Open the .ics file to add the event to your calendar, then delete it once you see the event there."
                },
                {
                  label: "Report (Business plan):",
                  text: "Report shows, within the date range you pick on the home page calendar, your appointment activity (appointments, hours, service fees), reservation status (paid, pending, booked), fees and balance (travel fee, deposit, balance due), and a card for each appointment."
                }
              ]
            }
          ]
        },
        {
          type: "accordion",
          accent: "money",
          icon: "money_bag",
          title: "Moneyflow",
          sub: "Spending by person, store and category",
          blocks: [
            {
              type: "icons",
              hint: "Tap an icon to see the **MONEYFLOW** screen.",
              items: [
                {
                  id: "monAdd",
                  icon: "create_new_folder",
                  label: "Add",
                  title: "Add Moneyflow",
                  image: "img/moneyflow-add.webp",
                  alt: "The Add Moneyflow form with the contact name marked at the top",
                  caption: "Track spending records for your loved ones, family, friends, clients, company and more. Fill in the info, then tap Save. When you finish everything, tap X on the app home page to download your file(s).",
                  mark: { x: 9.2, y: 5.4, w: 41, h: 6.2 }
                },
                {
                  id: "monEdit",
                  icon: "bookmark_manager",
                  label: "Edit",
                  title: "Edit Moneyflow",
                  image: "img/moneyflow-edit.webp",
                  alt: "The selection page with a list of stores",
                  caption: "If there is more than one result in your date range, they all show here. Tap the one you want to edit."
                },
                {
                  id: "monManage",
                  icon: "database_search",
                  label: "Manage",
                  title: "Manage Moneyflow",
                  image: "img/moneyflow-manage.webp",
                  alt: "The Manage Moneyflow search box with a store name and a category list",
                  caption: "Enter what you know to find your records. The more boxes you fill in, the narrower the list. Then tap Search."
                }
              ]
            },
            {
              type: "steps",
              items: [
                {
                  label: "Add Moneyflow:",
                  text: "Track spending records for your loved ones, family, friends, clients, company and more. Fill in the info, then tap Save. When you are done, tap X to download your file."
                },
                {
                  label: "Edit Moneyflow:",
                  text: "Pick a date range on the calendar. If there is more than one result in that range, tap the one you want on the selection page. Change the info, then tap Save. When you are done, tap X to download your changes."
                },
                {
                  label: "Summary:",
                  text: "Summary shows, within the date range you pick on the home page calendar, your top 3 highest spending stores and top 3 most expensive items, plus each store with its categories and a pie chart of the costs."
                },
                {
                  label: "Manage Moneyflow:",
                  text: "Pick a date range, enter what you know to find your records, such as the store or the category (the more boxes you fill in, the narrower the list), then tap Search. Tap a result, change the info, then tap Save."
                }
              ]
            }
          ]
        },
        {
          type: "accordion",
          accent: "edu",
          icon: "school",
          title: "Education",
          sub: "Tuition, books, supplies and other school costs",
          blocks: [
            {
              type: "icons",
              hint: "Tap an icon to see the **EDUCATION** screen.",
              items: [
                {
                  id: "eduAdd",
                  icon: "create_new_folder",
                  label: "Add",
                  title: "Add Education",
                  image: "img/education-add.webp",
                  alt: "The Add Education form with the contact name and the 3 dots marked",
                  caption: "Fill in the info, then tap Save. Tap the 3 dots in the date and time box to add the event to your device memory. When you finish everything, tap X on the app home page to download your file(s).",
                  mark: [
                    { x: 9.1, y: 5.5, w: 43, h: 6.3 },
                    { x: 26.6, y: 44.9, w: 5.4, h: 3.6 }
                  ]
                },
                {
                  id: "eduEdit",
                  icon: "bookmark_manager",
                  label: "Edit",
                  title: "Edit Education",
                  image: "img/education-edit.webp",
                  alt: "The selection page with a list of schools",
                  caption: "If there is more than one result in your date range, they all show here. Tap the one you want to edit."
                },
                {
                  id: "eduManage",
                  icon: "database_search",
                  label: "Manage",
                  title: "Manage Education",
                  image: "img/education-manage.webp",
                  alt: "The Manage Education search box with school and learning objectives",
                  caption: "Enter what you know to find your records. The more boxes you fill in, the narrower the list. Then tap Search."
                }
              ]
            },
            {
              type: "steps",
              items: [
                {
                  label: "Add Education:",
                  text: "Fill in the info, then tap Save. To add the date and time to your calendar, fill in the date and time, then tap the 3 dots next to it. This puts the event in the device memory. When you are done with everything, tap X to download your files. If you changed records and added an event, two files download: the database file and the calendar (.ics) file. Open the .ics file to add the event to your calendar, then delete it once you see the event there."
                },
                {
                  label: "Edit Education:",
                  text: "Pick a date range on the calendar. If there is more than one result in that range, tap the one you want on the selection page. Change the info, then tap Save. When you are done, tap X to download your changes."
                },
                {
                  label: "Summary:",
                  text: "Summary shows, within the date range you pick on the home page calendar, your highest spending schools and most expensive learning objectives, plus each school with its learning objectives and a pie chart of the costs."
                },
                {
                  label: "Manage Education:",
                  text: "Pick a date range, enter what you know to find your records, such as the school or the learning objective (the more boxes you fill in, the narrower the list), then tap Search. Tap a result, change the info, then tap Save."
                }
              ]
            }
          ]
        }
      ]
    },

    // ───────────────────────── 3. FEATURES ─────────────────────────
    {
      id: "features",
      icon: "widgets",
      title: "Features",
      intro: "Extra tools for your file and your plan.",
      inline: {
        person: {
          icon: "manage_accounts",
          label: "Person setting",
          title: "Person setting",
          image: "img/general-person-x.webp",
          alt: "The home page with the person setting icon above the New bar, on the right",
          caption: "Person setting is the icon at the right end, just above the New bar.",
          mark: { x: 87.3, y: 85.9, w: 8, h: 4.9 }
        },
        exportImport: {
          icon: "modeling",
          label: "Export / Import Data",
          title: "Export / Import Data",
          image: "img/ex-import-feature.webp",
          alt: "The person setting bar with Contact, Export / Import Data and Admin",
          caption: "Tap Export / Import Data to open the page. Business plan only.",
          mark: { x: 40.5, y: 20, w: 20, h: 50 }
        },
        exportBtn: {
          label: "Export",
          title: "Export a style",
          image: "img/export-feature.webp",
          alt: "The Export / Import Data page with a contact and a style picked",
          caption: "Pick the contact in From, pick the Style, then tap Export."
        },
        transferBtn: {
          label: "Transfer",
          title: "Transfer a style",
          image: "img/transfer-feature.webp",
          alt: "The Export / Import Data page with Transfer selected",
          caption: "Pick the contact in From, pick the Style, then tap Transfer and pick the contact in To."
        },
        importBtn: {
          label: "Select Backup File",
          title: "Import a style",
          image: "img/import-feature.webp",
          alt: "The Import part of the page with a file picked, To and Password",
          caption: "Pick the .phdcos file, pick the contact in To, type the password, then tap Confirm."
        },
        admin: {
          icon: "settings_alert",
          label: "Admin",
          title: "Admin",
          image: "img/ex-import-feature.webp",
          alt: "The person setting bar with Contact, Export / Import Data and Admin",
          caption: "Tap Admin to open the account page.",
          mark: { x: 85, y: 20, w: 8, h: 50 }
        },
        manageSub: {
          icon: "theater_comedy",
          label: "Manage subscription",
          title: "Manage subscription",
          image: "img/feature-manage-subscription.webp",
          alt: "The Manage subscription button with the plan status under the title",
          caption: "Tap Manage subscription to open your plan page."
        },
        subStatus: {
          label: "subscription status",
          title: "Subscription status",
          image: "img/feature-manage-subscription.webp",
          alt: "The Manage subscription button with the plan status marked",
          caption: "Your plan status shows under the title, for example when your plan ends.",
          mark: { x: 32, y: 52, w: 37, h: 11 }
        },
        cardPay: {
          label: "pay with a card",
          title: "Pay with a card",
          image: "img/feature-stripe-pay.webp",
          alt: "The Stripe page with the Card payment option marked",
          caption: "Pick Card, then fill in your card details.",
          mark: { x: 59, y: 53, w: 37, h: 7 }
        }
      },
      blocks: [
        {
          type: "accordion",
          icon: "modeling",
          title: "Export and Import",
          sub: "Share a cosmetic style with another device or contact",
          blocks: [
            { type: "p", text: "Tap the person setting icon {icon:person}, then tap Export / Import Data {icon:exportImport}." },
            { type: "sub", text: "Export" },
            {
              type: "steps",
              items: [
                "In the From box, tap and type the contact name, then pick the contact from the list. Do the same in the Style box to pick the style.",
                "Tap {link:exportBtn}, create a password, then tap Confirm.",
                "A .phdcos file downloads. Use it to import the style on another device."
              ]
            },
            { type: "sub", text: "Transfer" },
            {
              type: "steps",
              items: [
                "In From, pick the contact. Then pick the Style name.",
                "Tap {link:transferBtn}, pick the contact who receives the style in To, then tap Confirm. No password needed.",
                "Transfer copies the latest item details to that contact. All quantities are set to 1, so review and update the details after the transfer."
              ]
            },
            { type: "sub", text: "Import" },
            {
              type: "steps",
              items: [
                "Tap {link:importBtn} and pick the .phdcos file.",
                "In To, pick the contact who receives the style.",
                "Type the password you made when you exported, then tap Confirm."
              ]
            },
            {
              type: "note",
              icon: "lock",
              text: "Your data is AES-256 encrypted before export. Keep your backup file and password safe, you need both to restore."
            }
          ]
        },
        {
          type: "accordion",
          icon: "quick_reference_all",
          title: "Business Report",
          sub: "Your business activity at a glance",
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
          blocks: [
            {
              type: "steps",
              items: [
                "Tap the person setting icon {icon:person}, then tap Admin {icon:admin}, then tap Manage subscription {icon:manageSub}.",
                "Under the title, you can see your {link:subStatus}, such as when your plan ends.",
                "You are taken to a Stripe page. This can take a moment, depending on your connection, so please wait.",
                "Pick Apple Pay or Google Pay if your device offers it, or {link:cardPay}."
              ]
            }
          ]
        }
      ]
    }
  ]
};
