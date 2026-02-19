interface BadgeProps {
  content: string | number;
  size?: "xs" | "sm" | "md" | "lg";
  color?: "main" | "blue" | "red" | "green" | "yellow" | "purple" | "gray";
  children?: React.ReactNode;
}

export const Badge = (props: BadgeProps) => {
  const { content, size = "xs", color = "main", children } = props;

  if (!content) return <>{children}</>;

  return (
    <div className="indicator">
      <span className={`indicator-item badge badge-${size} badge-${color}`}>
        {content}
      </span>
      {children && <div className="badge-children">{children}</div>}
    </div>
  );
};

/* tailwind include
   badge-main badge-blue badge-red badge-green badge-yellow badge-purple badge-gray
   badge-xs badge-sm badge-md badge-lg
*/
