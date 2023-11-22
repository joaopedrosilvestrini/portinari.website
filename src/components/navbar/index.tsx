'use client'
import EnterIcon from "@/icons/Enter";
import MenuIcon from "@/icons/Menu";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from "@nextui-org/react";

export default function Navbar() {
    return (
        <>
            <Dropdown
                backdrop="blur"
                className="py-1 px-1 border-none bg-gradient-to-br from-default-50 to-black"
            >
                <DropdownTrigger>
                    <Button
                        isIconOnly
                        variant="faded"
                    >
                        <MenuIcon />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu variant="faded" aria-label="Static Actions">
                    <DropdownSection title="Ações" showDivider>
                        <DropdownItem
                            key="home"
                            shortcut="H"
                        >Ínicio</DropdownItem>
                        <DropdownItem key="rules" shortcut="R">Regras</DropdownItem>
                        <DropdownItem key="team" shortcut="T">Time</DropdownItem>
                    </DropdownSection>
                    <DropdownSection title="Conta">
                        <DropdownItem
                            key="login"
                            startContent={<EnterIcon />}
                        >Entrar</DropdownItem>
                    </DropdownSection>
                </DropdownMenu>
            </Dropdown>
        </>
    )
}