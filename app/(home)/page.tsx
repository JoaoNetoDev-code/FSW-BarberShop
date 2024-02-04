import { ptBR } from "date-fns/locale";
import Header from "../_components/header";
import {format} from "date-fns"
import Search from "./_components/search";
import Bookings from "../_components/booking-items";

export default function Home() {
  return (
    <>
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
        <h2 className="mb-3 text-xs uppercase text-gray-400 font-bold">Agendamentos</h2>
        <Bookings />
      </div>
    </>
  );
}
