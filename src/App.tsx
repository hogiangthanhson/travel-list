import { useState } from "react";
import Form from "./component/Form";
import Logo from "./component/Logo";
import PackingList from "./component/PackingList";
import Stats from "./component/Stats";
import { Items } from "./interface";

export default function App() {
  const [items, setItems] = useState<Items[]>([]);

  function handleAddItems(item: Items) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id: number) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleToggleItem(id: number) {
    setItems((items) =>
      items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item))
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
      <Stats />
    </div>
  );
}
