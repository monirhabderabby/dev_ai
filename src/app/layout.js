// packages
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

// components
import { ModalProvider } from "@/components/modal-provider";

// css files
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "DEV AI",
    description: "AI Platform",
};

export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <ModalProvider />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
