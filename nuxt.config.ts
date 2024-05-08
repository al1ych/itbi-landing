// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  colorMode: {
    preference: "light",
  },

  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "@nuxt/ui",
    [
      "nuxt-mail",
      {
        message: {
          to: process.env.SMTP_RECIPIENT || "timur.aladdinych@gmail.com",
        },
        smtp: {
          host: "smtp.mail.ru",
          port: 465,
          auth: {
            user: process.env.SMTP_USER || "semyon.kotovsky@mail.ru",
            pass: process.env.STMP_PASS || "td01PxcyqpVbfSvu5qek",
          },
          secure: true,
        },
      },
    ],
    "nuxt-hcaptcha-module",
  ],

  //@ts-ignore
  hcaptcha: {
    siteKey: process.env.HCAPTCHA_SITEKEY || "",
    secretKey: process.env.HCAPTCHA_SECRET || "",
  },

  imports: {
    dirs: ["stores"],
  },

  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            white: "#ffffff",
            offwhite: "#fcfaff",
            blockwhite: "#F8F5FF",

            itbtPurple: {
              50: "#f2f0ff",
              100: "#e9e4ff",
              200: "#d5cdff",
              300: "#b7a6ff",
              400: "#9473ff",
              500: "#743bff",
              600: "#6614ff",
              700: "#5a05ff",
              800: "#4901d6",
              900: "#3d03af",
              950: "#230077",
            },
          },
        },
      },
    },
  },
})
