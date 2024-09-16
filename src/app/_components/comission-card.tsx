import { Button, Card, CustomFlowbiteTheme } from "flowbite-react";

type Props = {
  title: string;
  excerpt: string;
  slug: string;
};
const customTheme: CustomFlowbiteTheme["card"] = {
  root: {
    children: "flex h-full flex-col justify-between gap-4 p-6",
  },
};

export function ComissionCard({ title, excerpt, slug }: Readonly<Props>) {
  return (
    <Card
      href={`/comissions/${slug}`}
      theme={customTheme}
      className="hover:bg-white"
    >
      <h3 className="text-xl leading-snug">{title}</h3>
      <p className="text-md leading-relaxed mb-1">{excerpt}</p>
      {/* <Button color="blue" className="font-bold">
        Llegir més
        <svg
          className="-mr-1 ml-2 h-4 w-4"
          fill="white"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button> */}
    </Card>
  );
}
