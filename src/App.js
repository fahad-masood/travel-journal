import { Card } from "./components/Card";
import { Navbar } from "./components/Navbar";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <>
      <Navbar />
      {cards}
    </>
  );
}

export default App;
