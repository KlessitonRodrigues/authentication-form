import { HTMLAttributes } from "react";
import {
  PiEyeBold,
  PiLockBold,
  PiMagnifyingGlassBold,
  PiMailboxBold,
  PiPhoneBold,
  PiSignInBold,
  PiSignOutBold,
  PiUserBold,
  PiUserPlus,
} from "react-icons/pi";
import { twMerge } from "tailwind-merge";

export const IconMap = {
  signIn: <PiSignInBold size={"100%"} />,
  signOut: <PiSignOutBold size={"100%"} />,
  email: <PiMailboxBold size={"100%"} />,
  lock: <PiLockBold size={"100%"} />,
  user: <PiUserBold size={"100%"} />,
  userPlus: <PiUserPlus size={"100%"} />,
  phone: <PiPhoneBold size={"100%"} />,
  search: <PiMagnifyingGlassBold size={"100%"} />,
  eyeOpen: <PiEyeBold size={"100%"} />,
};

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  icon?: keyof typeof IconMap;
  size?: "16" | "20" | "24" | "32";
}

export const Icons = (props: IconProps) => {
  const { className, children, ...iconProps } = props;
  const classNames = ["icon"];
  classNames.push(`w-[${props.size || "16"}px]`);
  classNames.push(className || "");

  return (
    <span className={twMerge(...classNames)} {...iconProps}>
      {props.icon && IconMap[props.icon]}
    </span>
  );
};

/* Tailwind include
    w-[16px] w-[20px] w-[24px] w-[32px]
*/
