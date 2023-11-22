import Navbar from "@/components/navbar";
import UIProvider from "@/providers/NextUi";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <UIProvider>
            <nav className="flex fixed mt-4 ml-4">
                <Navbar />
            </nav>
            <main className="min-h-[67vh]">
                {children}
            </main>
        </UIProvider>
    )
}