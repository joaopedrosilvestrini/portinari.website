'use client'

import AcitivitieIcon from "@/icons/Activities"
import SearchIcon from "@/icons/Search";
import TestIcon from "@/icons/Tests";
import { TarefasStructure } from "@/types";
import api from "@/utils/api";
import { Autocomplete, AutocompleteItem, Button, Card, CardBody, CardHeader, Chip, Divider, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Skeleton, useDisclosure } from "@nextui-org/react"
import { useEffect, useState } from "react";

export default function Cards() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [data, setData] = useState<TarefasStructure[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const fetchData = async () => {
        setLoading(true)
        const res = await api.getAllTarefas();
        setData(res)

        setLoading(false)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <div className="flex w-full gap-2">
                <Autocomplete
                    placeholder="Pesquisar"
                    defaultItems={data}
                    scrollShadowProps={{
                        isEnabled: false
                    }}
                    inputProps={{
                        classNames: {
                            input: "ml-1",
                            inputWrapper: "h-[48px]",
                        },
                    }}
                    startContent={<SearchIcon />}
                    variant="bordered"
                    isDisabled={loading}
                >
                    {(item) => <AutocompleteItem key={item._id}>{item.name}</AutocompleteItem>}
                </Autocomplete>
                <Button isDisabled={loading} size="lg">Criar</Button>
            </div >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {data.map((tarefa, index) => (
                    <>
                        <Card key={index} className="mt-4">
                            <CardHeader className="flex justify-between">
                                <div className="flex gap-3">
                                    {tarefa.name == 'Tarefa' && (<AcitivitieIcon />)}
                                    {tarefa.name == 'Matéria' && (<TestIcon />)}
                                    <p className="text-xl font-bold"> {tarefa.name}</p>
                                </div>
                                <div className="flex justify-end">
                                    <Chip className="ml-2">{tarefa.tag}</Chip>
                                </div>
                            </CardHeader>
                            <Divider />
                            <CardBody className="flex justify-center">
                                <div className="text-center">
                                    <Button onPress={onOpen} className="w-full">Abra</Button>
                                </div>
                            </CardBody>
                        </Card>


                        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                        <ModalHeader className="flex justify-between gap-1">
                                            <div>
                                                {tarefa.name}
                                            </div>
                                            <div>
                                                <Chip className="mr-4">{tarefa.tag}</Chip>
                                            </div>
                                        </ModalHeader>
                                        <ModalBody>
                                            <p>{tarefa.description}</p>
                                        </ModalBody>
                                        <ModalFooter className="flex justify-start">
                                            <Button color="danger" className="w-full" onPress={onClose}>
                                                Fechar
                                            </Button>
                                        </ModalFooter>
                                    </>
                                )}
                            </ModalContent>
                        </Modal>
                    </>
                ))}
            </div>
        </>
    )
}