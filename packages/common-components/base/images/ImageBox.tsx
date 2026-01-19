import { twMerge } from "tailwind-merge";
import Image from "next/image";

type IImageBox = React.HTMLAttributes<HTMLDivElement> & {
  src: string;
};

export const ImageBox = ({ className, ...props }: IImageBox) => {
  return (
    <div {...props} className={twMerge(`rounded-lg w-full ${className}`)}>
      <Image
        src={props.src}
        width={144}
        height={144}
        alt=""
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export const RoundedImageBox = ({ className, ...props }: IImageBox) => {
  return <ImageBox {...props} className={`rounded-full ${className}`} />;
};
