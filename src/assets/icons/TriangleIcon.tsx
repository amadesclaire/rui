interface TriangleIconProps {
  w?: string;
  h?: string;
  stroke?: string;
}

const TriangleIcon = ({
  h = '16',
  w = '16',
  stroke = 'black',
}: TriangleIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 20h18L12 4z" />
    </svg>
  );
};

export default TriangleIcon;
