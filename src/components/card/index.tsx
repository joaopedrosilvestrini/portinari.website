'use client'

import AcitivitieIcon from "@/icons/Activities"
import { Button, Card, CardBody, CardHeader, Chip, Divider, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react"

export default function Cards() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Card className="mt-4 mr-2 ml-2">
                <CardHeader className="flex justify-between">
                    <div className="flex gap-3">
                        <AcitivitieIcon />
                        <p className="text-xl font-bold"> Tarefa</p>
                    </div>
                    <div className="flex justify-end">
                        <Chip className="ml-2">matematica</Chip>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody className="flex justify-center">
                    <div className="text-center">
                        <Button onPress={onOpen} className="w-full">Abra</Button>
                    </div>
                </CardBody>
            </Card>

            <Modal  isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex justify-between gap-1">
                                <div>
                                    Tarefa
                                </div>
                                <div>
                                    <Chip className="mr-4">matematica</Chip>
                                </div>
                            </ModalHeader>
                            <ModalBody>
                                <p>pagina 234 a 123</p>
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
    )
}