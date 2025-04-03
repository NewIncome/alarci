const Card = ({ className, children, ...props }) => {
  return (
    <div className={`rounded-xl border bg-card
      text-card-foreground shadow p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export { Card };
