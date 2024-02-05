import { ptBR } from "date-fns/locale";
import Header from "../_components/header";
import {format} from "date-fns"
import Search from "./_components/search";
import Bookings from "../_components/booking-items";
import { db } from "../_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

export default async function Home() {
  const barbershops = await db.barbershop.findMany({})
  return (
    <div>
      <Header />
      <div className="px-5 pt-5">
          <h2 className="text-xl font-bold">Olá, Miguel</h2>
          <p className="capitalize text-sm">
            {format(new Date, "EEEE',' dd 'de' MMM",{
            locale: ptBR,
          })}
          </p>
      </div>

      <div className="px-5 mt-6">
      <Search />
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-xs mb-3 uppercase text-gray-400 font-bold">Agendamentos</h2>
        <Bookings />
      </div>

      <div className="mt-6">
        <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">Recomendados</h2>

        <div className="flex gap-4 px-5 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
          ))}
        </div>
      </div>
    </div>
  );
}
