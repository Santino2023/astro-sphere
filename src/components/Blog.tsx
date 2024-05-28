import type { CollectionEntry } from "astro:content";
import ArrowCard from "@components/ArrowCard";



export default function Blog({ data }: Props) {
  return (
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-2">
        <div class="flex flex-col">
          <div class="text-sm uppercase mb-2">
            Mostrando {data.length} Clases
          </div>
          <ul class="flex flex-col gap-3">
            {data.map((post, index) => (
              <li key={post.slug}>
                <ArrowCard entry={post} number={index + 1} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
