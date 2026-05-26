import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import './index.css';
import type { Metadata } from "next";
import { Inter, Quicksand } from 'next/font/google'

export const metadata: Metadata = {
    title: "NK Psykolog AB",
    description: "Officiella hemsidan för Nathalie Korhonen Psykolog AB",
};

const inter = Inter({
    subsets: ['latin']
});

const quicksand = Quicksand({
    subsets: ['latin']
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={quicksand.className}>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
