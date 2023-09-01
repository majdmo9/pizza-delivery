import Dashboard from "../components/Dashboard";

const Home = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Dashboard />
    </main>
  );
};
export default Home;
