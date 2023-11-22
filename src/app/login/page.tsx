'use client'

import Olho2 from "@/icons/Eye2";
import Olho from "@/icons/EyeAberto";
import MailIcon from "@/icons/Mail";
import { Button, Chip, Input } from "@nextui-org/react";
import { signIn } from 'next-auth/react';
import { SyntheticEvent, useMemo, useState } from "react";
import Users from "../(models)/User";

export default function Login() {
    const [email, setEmail] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("")
    const validateEmail = (value: string) => value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const isInvalid = useMemo(() => {
        if (email === "") return false;

        return validateEmail(email) ? false : true
    }, [email]);

    const handleSubmit = async (e: SyntheticEvent) => {
        console.log('a')
        e.preventDefault();

        if (!email || !password) return setError('Email ou senha não inseridos')

        setLoading(true)
    }

    return (
        <>
            <section className='flex col items-center justify-center px-10 3xl:px-0'>
                <div className='max-w-7xl w-full'>
                    <div className="w-full flex items-center justify-center gap-36 py-24">
                        <div className="lg:max-w-2xl w-full text-center ml-10">
                            <div className="px-8 md:px-16">
                                <h1 className="relative text-white text-4xl lg:text-6xl pb-2 leading-20 font-bold">
                                    Logue em sua conta
                                </h1>
                                {error ? (
                                    <>
                                        <Chip color="danger" variant="dot">{error}</Chip>
                                    </>
                                ) :
                                    <>
                                        <Chip color="success" variant="dot">Nenhum Erro</Chip>
                                    </>
                                }
                                <form className="flex flex-col gap-2">
                                    <div>
                                        <Input
                                            isRequired
                                            isDisabled={loading}
                                            value={email}
                                            type="email"
                                            label="Email"
                                            placeholder="meuemail@exemplo.com"
                                            isInvalid={isInvalid}
                                            color={isInvalid ? "danger" : "default"}
                                            labelPlacement="outside"
                                            onValueChange={setEmail}
                                            startContent={
                                                <MailIcon />
                                            }
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            isRequired
                                            isDisabled={loading}
                                            value={password}
                                            type="password"
                                            label="Senha"
                                            labelPlacement="outside"
                                            placeholder="********"
                                            onValueChange={setPassword}
                                            endContent={
                                                <button type="button" onClick={toggleVisibility}>
                                                    {isVisible ? (
                                                        <Olho />
                                                    ) : (
                                                        <Olho2 />
                                                    )}
                                                </button>
                                            }
                                        />
                                    </div>
                                    <Button onClick={(e) => handleSubmit(e)} isLoading={loading}>{loading ? true : "Enviar"}</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}