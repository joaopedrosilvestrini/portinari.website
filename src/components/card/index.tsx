import { Card, CardBody, CardHeader, Chip, Divider } from "@nextui-org/react"

export default function Cards() {
    return (
        <>
            <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                    <div className="flex">
                        <p className="text-xl">Tarefa</p> <Chip className="ml-2">matematica</Chip>
                    </div>
                </CardHeader>
            </Card>
        </>
    )
}