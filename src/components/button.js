const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center
        whitespace-nowrap rounded-md text-sm font-medium
        transition-colors focus-visible:outline-none
        focus-visible:ring-1 focus-visible:ring-ring
        disabled:pointer-events-none disabled:opacity-50
        text-primary-foreground shadow h-9 px-4 py-2
        ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };

/* Previous button component with Tailwind classes:
<button class="
  inline-flex
  items-center
  justify-center
  whitespace-nowrap
  rounded-md
  text-sm
  font-medium
  transition-colors
  focus-visible:outline-none
  focus-visible:ring-1
  focus-visible:ring-ring
  disabled:pointer-events-none
  disabled:opacity-50
  text-primary-foreground
  shadow
  h-9
  px-4
  py-2
  bg-orange-500
  hover:bg-orange-600">
    Get Your Free Quote
</button>
*/

//d-inline-flex align-items-center justify-content-center text-nowrap rounded small (for text-sm) font-weight-normal (for font-medium) disabled text-primary shadow py-2 px-3 (close to px-4) text-white