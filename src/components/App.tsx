import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { Items } from "../interface";

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

  function handClearList() {
    const confirmed = window.confirm("Are you sure want to delete all items?");
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handClearList}
      />
      <Stats items={items} />
    </div>
  );
}
