import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Layout } from '@/components';

const helvetica = localFont({
  src: [
    {
      path: './fonts/HelveticaNeueLight.otf',
      weight: '300',
    },
    {
      path: './fonts/HelveticaNeueRoman.otf',
      weight: '400',
    },
    {
      path: './fonts/HelveticaNeueMedium.otf',
      weight: '500',
    },
  ],
  variable: '--font-helvetica',
});



export const metadata: Metadata = {
  title: "BenGee ArtGallery",
  description: "Are you looking for a trusted brand to handle your portraits and frames with top quality? BenGee ArtGallery got you covered ",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://ben-gee-art-gallery.vercel.app",
    siteName: "BenGee ArtGallery",
    title: "BenGee ArtGallery",
    description: "BenGee ArtGallery's website",

    images: [
      {
        url: "https://ben-gee-art-gallery.vercel.app/openGraph-image.png",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
        type: "image/png",
      },
      {
        url: "https://ben-gee-art-gallery.vercel.app/openGraph-image.png",
        width: 900,
        height: 800,
        alt: "Og Image Alt Second",
        type: "image/png",
      },
      { url: "https://ben-gee-art-gallery.vercel.app/openGraph-image.png" },
      { url: "https://ben-gee-art-gallery.vercel.app/openGraph-image.png" },
    ],
  },
  twitter: {
    card: "summary_large_image",
  }
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helvetica.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
