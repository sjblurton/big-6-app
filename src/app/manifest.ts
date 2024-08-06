import { MetadataRoute } from "next";
import * as colors from "@/styles/colors/_exports.module.scss";

function manifest(): MetadataRoute.Manifest {
  return {
    short_name: "Big6",
    name: "The Big 6 Progressive Calisthenics log book",
    description:
      "Progressive calisthenics app to log your progress though the convict conditioning program.",
    icons: [
      {
        src: "@/modules/components/assets/iconx/icon-36x36.png",
        type: "image/png",
        sizes: "36x36",
      },
      {
        src: "@/modules/components/assets/iconx/icon-48x48.png",
        type: "image/png",
        sizes: "48x48",
      },
      {
        src: "@/modules/components/assets/iconx/icon-72x72.png",
        type: "image/png",
        sizes: "72x72",
      },
      {
        src: "@/modules/components/assets/iconx/icon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
      {
        src: "@/modules/components/assets/iconx/icon-144x144.png",
        type: "image/png",
        sizes: "144x144",
      },
      {
        src: "@/modules/components/assets/iconx/icon-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "@/modules/components/assets/iconx/icon-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
      {
        src: "@/modules/components/assets/iconx/maskable.png",
        type: "image/png",
        sizes: "192x192",
        purpose: "maskable",
      },
    ],
    start_url: "/",
    background_color: colors.primary,
    display: "standalone",
    scope: "/",
    theme_color: colors.primaryLight,
  };
}

export default manifest;
