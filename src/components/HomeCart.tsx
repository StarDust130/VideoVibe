import Image from "next/image";

interface HomeCartProps {
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
  className: string;
}

const HomeCart = ({
  img,
  title,
  description,
  handleClick,
  className,
}: HomeCartProps) => {
  return (
    <>
      <div
        className={`${className}  transform transition-transform duration-300 lg:hover:scale-105 px-4 py-6 flex flex-col justify-between  w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer`}
        onClick={handleClick}
      >
        <div className="flex-center glassmorphism size-12 rounded-[10px] ">
          <Image src={img} alt={title} width={27} height={27} />
        </div>
        <div className="flex flex-col gap-2 ">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-lg font-normal">{description}</p>
        </div>
      </div>
    </>
  );
};
export default HomeCart;
