import { useRouter } from "next/router";

const ClientsProjectPage = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>selected project of a specific client</h1>
    </div>
  );
};

export default ClientsProjectPage;
