import FilterBar from "@/components/filterBar/filterBar";
import { GenderType } from "@/types";

export default function ProductsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { params: [GenderType, string, string] };
}) {
  return (
    <section className="flex">
      <FilterBar
        gender={params.params[0]}
        category={params.params[1]}
        type={params.params[2]}
      />
      {children}
      <div className="h-[200vh]"></div>
    </section>
  );
}
