import { useState } from "react";
import { Items } from "../interface";

interface ItemProp {
  item: Items;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => any;
}

export default function Item({
  item: { packed, id, quantity, description },
  onDeleteItem,
  onToggleItem,
}: ItemProp) {
  return (
    <li>
      <input type="checkbox" checked={packed} onChange={() => onToggleItem(id)} />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)} aria-label="Delete item">
        ❌
      </button>
    </li>
  );
}
