import { initPlasmicLoader } from "@plasmicapp/loader-vue";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "4N9VnvMhenUReE3VfKDmK9",  // ID of a project you are using
      token: "obo2tZkxwJlBFXTpb8Fy5TfKra71GMoManHYekXQRPFwR2HCzcuL4obeiG14hlQQrcVFbh0ubv2qPOUeMVgE1Q"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})