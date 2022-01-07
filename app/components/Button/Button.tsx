interface Props {
  children: React.ReactNode;
}

export const Button = ({ children }: Props) => (
  <button className="border-2">{children}</button>
);
