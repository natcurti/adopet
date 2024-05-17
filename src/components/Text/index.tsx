interface IText {
  size: number;
  color: string;
  children: React.ReactNode;
}

const Text = ({ size, color, children }: IText) => {
  return <p>{children}</p>;
};

export default Text;
