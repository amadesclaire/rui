interface ChevronDownProps {
  w?: string;
  h?: string;
  stroke?: string;
}

const ChevronDown = ({
  h = '16',
  w = '16',
  stroke = 'black',
}: ChevronDownProps) => {
  return (
    <svg
      stroke={stroke}
      width={w}
      height={h}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
};

export default ChevronDown;
