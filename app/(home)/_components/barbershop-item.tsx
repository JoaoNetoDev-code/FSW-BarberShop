import { Card, CardContent } from "@/app/_components/ui/card";
import {Barbershop} from "@prisma/client"

interface Props {
  barbershop: Barbershop;
}

const BarbershopItem = ({barbershop}: Props) => {
  return (
    <Card>
      <CardContent className="p-0">
        <h1>{barbershop.name}</h1>
      </CardContent>
    </Card>
  );
}

export default BarbershopItem;