import { useState } from "react";
import Form from "./component/Form";
import Logo from "./component/Logo";
import PackingList from "./component/PackingList";
import Stats from "./component/Stats";
import { Items } from "./interface";

export default function App() {
  const [items, setItems] = useState<Items[]>([]);

  function handleAddItems(item: Items) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}
