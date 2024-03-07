import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type BreadCrumbFrontType = {
  title: string;
  link: string;
};

type BreadCrumbFrontPropsType = {
  items: BreadCrumbFrontType[];
};

export default function BreadCrumbFront({ items }: BreadCrumbFrontPropsType) {
  return (
    <div className="mb-4 top-28 sticky bg-white py-2 z-[50] border-b flex items-center space-x-1 text-sm text-muted-foreground">
      <Link
        href={"/"}
        className="overflow-hidden text-ellipsis whitespace-nowrap"
      >
        Accueille
      </Link>
      {items?.map((item: BreadCrumbFrontType, index: number) => (
        <React.Fragment key={item.title}>
          <ChevronRightIcon className="h-4 w-4" />
          <Link
            href={item.link}
            className={cn(
              "font-bold text-black line-clamp-1 ",
              index === items.length - 1
                ? "text-foreground text-yellow-700 pointer-events-none"
                : "text-muted-foreground",
            )}
          >
            {item.title}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}
