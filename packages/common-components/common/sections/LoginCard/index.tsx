import { Text } from "../../../base/text/Text";

interface LoginSectionProps {
  data: {
    title: string;
    description: string;
    description2?: string;
    bgImageUrl: string;
    bgBrightness?: number;
  };
  login: {
    formComponent: React.ReactNode;
  };
  bgGradient?: {
    from: string;
    to: string;
  };
}

export const LoginCardSection = (props: LoginSectionProps) => {
  const { data, login, bgGradient } = props;
  const backgroundImage = `linear-gradient(145deg, ${bgGradient?.from}, ${bgGradient?.to})`;
  const sectionImg = {
    backgroundImage: `url(${data.bgImageUrl})`,
    filter: `brightness(${data.bgBrightness ?? 0.7})`,
  };

  return (
    <div className="flex w-full lg:h-full" style={{ backgroundImage }}>
      <div className="lg:m-auto lg:w-full lg:flex lg:max-w-7xl bg-bg1 shadow-lg rounded-lg overflow-hidden">
        <div className="h-150 lg:h-auto p-8 bg-no-repeat bg-cover text-default-white relative">
          <div
            className="absolute inset-0 bg-no-repeat bg-cover"
            style={sectionImg}
          />
          <div className="relative z-10 space-y-8">
            <Text tag="h1" fs="5xl" bold className="slide-up">
              {data.title}
            </Text>
            <Text tag="p" fs="xl" className="slide-up-delay-500">
              {data.description}
            </Text>
            <Text tag="p" fs="xl" className="slide-up-delay-1000">
              {data.description2}
            </Text>
          </div>
        </div>
        <div className="p-8 lg:p-0">{login.formComponent}</div>
      </div>
    </div>
  );
};
