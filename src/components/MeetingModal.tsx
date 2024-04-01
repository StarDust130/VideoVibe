import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "./ui/button";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  title: string;
  buttonText?: string;
  handleClick?: () => void;
  children?: React.ReactNode;
  image?: string;
  buttonIcon?: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  className,
  title,
  buttonText,
  handleClick,
  children,
  image,
  buttonIcon,
}: MeetingModalProps) => {
  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="flex w-full max-w-[520px] flex-col gap-6  border-none bg-dark-1 text-white px-6 py-9 text-center  ">
          <div className="flex flex-col gap-6 ">
            {image && (
              <div className="flex justify-center  ">
                <Image src={image} alt={image} width={72} height={72} />
              </div>
            )}
          </div>
          <h1 className={`text-3xl font-bold leading-[42px]  ${className}`}>
            {title}
          </h1>
          {children}
          <Button className="bg-blue-1 hover:bg-blue-700 focus-visible:right-0 focus-visible:ring-offset-0"
          onClick={handleClick}
          >
            {buttonIcon && (
              <Image src={buttonIcon} alt={buttonIcon} width={13} height={13 } />
            )}&nbsp;
            {buttonText || "Schedule Meeting"}

          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default MeetingModal;
