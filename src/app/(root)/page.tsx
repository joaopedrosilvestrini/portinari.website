import Card from "@/components/card";
import HomeIconPage from "@/icons/StartPage";
import { Image } from "@nextui-org/react";

export default function Page() {
    return (
        <section className='flex col items-center justify-center px-10 3xl:px-0'>
            <div className='max-w-7xl w-full'>
                <div className="w-full flex items-center justify-between gap-36 py-24">
                    <div className="lg:max-w-2xl w-full text-center lg:text-start ml-10">
                        <h1 className="relative text-white text-4xl lg:text-6xl pb-2 leading-20 font-bold">
                            Facilitando os seus estudos
                        </h1>
                        <p className="text-lg text-gray-500 font-medium">
                            Aqui, você pode ver suas atividades e matérias de provas, tentando facilitar o maximo para você!
                        </p>
                    </div>
                    <div className="hidden lg:flex w-96 h-96 -mt-12">
                        <HomeIconPage />
                    </div>
                </div>
                <div className="mx-auto w-full mt-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </section>
    )
}