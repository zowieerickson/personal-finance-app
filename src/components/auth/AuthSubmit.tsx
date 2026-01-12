type AuthSubmitProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function AuthSubmit({ children, ...props }: AuthSubmitProps) {
  return (
    <button
      type="submit"
      className="text-sm font-bold text-white bg-[#201F24] py-4 rounded-md transition-colors duration-150 hover:bg-grey-500 active:bg-gray-300"
      {...props}
    >
      {children}
    </button>
  );
}
