'use client'
import { Divider } from "@nextui-org/react";
import Link from "next/link";

export default function Footer() {
    let items = [
        { label: "Home", link: "/" },
        { label: "Team", link: "/team" },
    ];

    return (
        <>
            <div className="w-full flex justify-center px-10 lg:px-12">
                <footer className="max-w-7xl w-full px-6 pt-24">
                    <Divider />
                    <footer className="rounded-lg md:py-8 mt4 lg:mt-6">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <Link href="/">
                                <div className="cursor-pointer col-span-2 flex items-center mr-6">
                                    <p className="pointer-events-none text-white font-semibold text-2xl">
                                        Portinari
                                    </p>
                                </div>
                            </Link>
                            <ul className="flex sm:flex-row flex-col mt-6 sm:mt-0 flex-wrap lg:items-center mb-6 gap-4 text-sm text-gray-400 sm:mb-0">
                                <p className="text-slate-600 dark:text-zinc-400 font-medium">
                                    Feito de <span className="text-red-500">❤</span> pelos alunos
                                </p>
                            </ul>
                        </div>
                    </footer>
                </footer>
            </div>
        </>
    )
}