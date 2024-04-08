import { DndContext } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { ReactNode } from "react";

type SortableItemsProps = {
  items: any[];
  setItems: React.Dispatch<React.SetStateAction<any[]>>;
  renderItems: ReactNode;
};

const SortableItems = (props: SortableItemsProps) => {
  const { items, setItems, renderItems } = props;

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={items}>{renderItems}</SortableContext>
    </DndContext>
  );
};

export default SortableItems;
