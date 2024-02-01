import { BubbleSorting } from "@/components/sorting/Bubble";
import { InsertionSorting } from "@/components/sorting/Insertion";
import { SelectionSorting } from "@/components/sorting/Selection";

export default function Home() {
  return (
    <main>
      <InsertionSorting />
      <SelectionSorting />
      <BubbleSorting />
    </main>
  );
}
