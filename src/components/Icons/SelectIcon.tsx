interface IconProps {
  [key: string]: string;
}

const SelectIcon = (props: IconProps) => (
  <svg className="icon-selctor" {...props}>
    <path d="M0.902832 1.12502L5.5 7L10 1.12501" strokeLinecap="round" />
  </svg>
);
export default SelectIcon;
