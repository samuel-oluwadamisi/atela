import {getClientById} from "@/mock/clients";
import GetClientByIdScreen from "@/features/admin/clients/screens/GetClientsByIdScreen";


type Props = {
  params: Promise<{
    id: string;
  }>;
};

const page = async ({ params }: Props) => {
  const { id } = await params;
  const client = getClientById(id);

  if (!client) {
    return <p>Client Not Found</p>;
  }

  return (
    <div>
      <GetClientByIdScreen clientProfile={client} />
    </div>
  );
};

export default page