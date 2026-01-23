import { HTMLAttributes } from "react";
import {
  PiCheckBold,
  PiEnvelopeSimpleBold,
  PiEyeBold,
  PiGithubLogoBold,
  PiGoogleLogoBold,
  PiLockBold,
  PiMagnifyingGlassBold,
  PiMailboxBold,
  PiNumberZero,
  PiPhoneBold,
  PiQuestionMarkBold,
  PiSignInBold,
  PiSignOutBold,
  PiUserBold,
  PiUserPlus,
} from "react-icons/pi";
import { twMerge } from "tailwind-merge";

export const IconMap = {
  signIn: <PiSignInBold size={"100%"} />,
  signOut: <PiSignOutBold size={"100%"} />,
  emailbox: <PiMailboxBold size={"100%"} />,
  email: <PiEnvelopeSimpleBold size={"100%"} />,
  lock: <PiLockBold size={"100%"} />,
  user: <PiUserBold size={"100%"} />,
  userPlus: <PiUserPlus size={"100%"} />,
  phone: <PiPhoneBold size={"100%"} />,
  search: <PiMagnifyingGlassBold size={"100%"} />,
  eyeOpen: <PiEyeBold size={"100%"} />,
  code: <PiNumberZero size={"100%"} />,
  questionMark: <PiQuestionMarkBold size={"100%"} />,
  google: <PiGoogleLogoBold size={"100%"} />,
  github: <PiGithubLogoBold size={"100%"} />,
  checkMark: <PiCheckBold size={"100%"} />,
};

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  icon?: keyof typeof IconMap;
  size?: "16" | "22" | "28" | "34";
}

export const Icons = (props: IconProps) => {
  const { className, icon, size, children, ...iconProps } = props;
  const classNames = ["icon"];
  classNames.push(`w-[${size || "22"}px]`);
  classNames.push(className || "");

  return (
    <span className={twMerge(...classNames)} {...iconProps}>
      {icon && IconMap[icon]}
    </span>
  );
};

/* Tailwind include
    w-[16px] w-[22px] w-[28px] w-[34px]
*/
