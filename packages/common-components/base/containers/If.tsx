type IIF = {
  condition?: boolean;
  true?: React.ReactNode;
  false?: React.ReactNode;
  children?: React.ReactNode;
};

const If = (props: IIF) => {
  return props.condition ? props.true || props.children : props.false;
};

export default If;
