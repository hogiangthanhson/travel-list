import { Items } from "../interface";
import Item from "./Item";

interface PackingListProp {
  items: Items[];
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}

export default function PackingList({ items, onDeleteItem, onToggleItem }: PackingListProp) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
