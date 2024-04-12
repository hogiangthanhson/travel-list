import { useState } from "react";
import { Items } from "../interface";
import Item from "./Item";

interface PackingListProp {
  items: Items[];
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
  onClearList: () => void;
}

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}: PackingListProp) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems!: Items[];

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id} />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        {items.length > 0 ? <button onClick={onClearList}>Clear list</button> : null}
      </div>
    </div>
  );
}
