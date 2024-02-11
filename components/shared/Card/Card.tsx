import CustomImage from "@/components/Custom-image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardsType } from "@/types";

export default function CardItem({ card }: { card: CardsType }) {
  const handleClick = (url: string | undefined) => {
    if (!url) return;
    window.open(url, "_blank");
  };

  return (
    <Card className="w-fit">
      <CardHeader
        className="w-full h-fit flex flex-col justify-between cursor-pointer"
        onClick={() => handleClick(card.link)}
      >
        <CustomImage
          image={card.imageSrc}
          alt="Card Image"
          className="h-48 m-auto"
        />
        <div>
          <CardTitle className="pt-6 pb-2 text-xl lg:text-2xl border-t-2">
            {card.title}
          </CardTitle>
          <CardDescription className="text-xs md:text-sm lg:text-base">{card.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="w-full flex justify-between items-center">
        <p className="text-sm xl:text-base font-semibold text-slate-400">{card.position}</p>
        <Button
          variant="ghost"
          className="underline text-slate-400"
          onClick={() => handleClick(card.github)}
        >
          Github
        </Button>
      </CardContent>
      <CardFooter className="h-fit felx flex-wrap content-center gap-2">
        {card.techStack.map((tech: string) => (
          <p
            key={tech}
            className="px-2 py-1 bg-slate-900 uppercase text-[10px] text-slate-500 font-semibold rounded-md border border-slate-500 "
          >
            #{tech}
          </p>
        ))}
      </CardFooter>
    </Card>
  );
}
