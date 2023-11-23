'use client'

import Olho2 from "@/icons/Eye2";
import Olho from "@/icons/EyeAberto";
import MailIcon from "@/icons/Mail";
import { Button, Chip, Input } from "@nextui-org/react";
import { signIn } from 'next-auth/react';
import { SyntheticEvent, useMemo, useState } from "react";
import Users from "../(models)/User";
import { useRouter } from "next/navigation";

export default function Login() {
    const [credentials, setCredentials] = useState<{ email: string, password: string }>({ email: '', password: '' })
    const [error, setError] = useState<string>("")
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const validateEmail = (value: string) => value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const router = useRouter()

    const isInvalid = useMemo(() => {
        if (credentials.email === "") return false;

        return validateEmail(credentials.email) ? false : true
    }, [credentials.email]);

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const user = {
            id: '1',
            email: 'admin@admin.com',
            password: 'admin'
        }

        if (!credentials.email || !credentials.password) return setError('Email ou senha não inseridos')
        if(credentials.email !== user.email && credentials.password !== user.password) return setError('Email ou senha incorretos!')

        setLoading(true)

        await signIn('credentials', {
            email: credentials.email,
            password: credentials.password
        }).then(() => {
            setLoading(false)
            setError('')
            router.replace('/')
        })
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
                                            value={credentials.email}
                                            type="email"
                                            label="Email"
                                            placeholder="meuemail@exemplo.com"
                                            isInvalid={isInvalid}
                                            color={isInvalid ? "danger" : "default"}
                                            labelPlacement="outside"
                                            onValueChange={(e) => setCredentials({ email: e, password: credentials.password })}
                                            startContent={
                                                <MailIcon />
                                            }
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            isRequired
                                            isDisabled={loading}
                                            value={credentials.password}
                                            type="password"
                                            label="Senha"
                                            labelPlacement="outside"
                                            placeholder="********"
                                            onValueChange={(e) => setCredentials({ email: credentials.email, password: e })}
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