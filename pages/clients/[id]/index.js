import { useRouter } from "next/router";

const ClientsProjectPage = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    router.push("/clients/max/projectA");
  };

  return (
    <div>
      <h1>The Projects of a {router.query.id}</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientsProjectPage;
