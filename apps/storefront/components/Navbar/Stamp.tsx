import Image from "next/image";

interface StampProps {
  width?: number;
  height?: number;
  className?: string;
}

function Stamp({ width = 32, height = 33, ...rest }: StampProps) {
  const dPath = process.env.NEXT_PUBLIC_HEADER_LOGO_SVG;
  const logoImage = process.env.NEXT_PUBLIC_LOGO_IMAGE;
  if (dPath) {
    return (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d={
            dPath ||
            "M15.1652 33.0002C21.7567 33.0002 23.4142 30.3384 23.4142 26.6922C23.4142 22.2073 19.3838 21.3687 16.0315 20.8217C13.4702 20.3842 12.3025 20.1656 12.3025 18.5976C12.3025 17.4311 13.3194 16.9932 14.9769 16.9932C17.0109 16.9932 17.5758 17.5767 17.7643 19.2903L23.1129 18.4882C22.6607 14.8055 20.589 12.9462 15.1275 12.9462C9.13865 12.9462 7.0293 15.3526 7.0293 19.1809C6.99175 24.1399 11.6623 24.6503 15.1275 25.2336C17.2743 25.6349 18.1033 25.9993 18.1033 27.4215C18.1033 28.5882 17.3877 29.0987 15.2405 29.0987C12.8675 29.0987 12.1519 28.6976 11.8506 26.7652L6.65271 27.5309C7.14231 31.4324 9.43995 33.0002 15.1652 33.0002Z"
          }
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.79116 1C7.72498 1 7.6615 1.02624 7.61464 1.07297L1.42826 7.24163C1.27042 7.39902 1.38188 7.66866 1.60478 7.66866H24.0905C24.1566 7.66866 24.2201 7.64242 24.267 7.59569L30.4534 1.42703C30.6112 1.26964 30.4997 1 30.2768 1H7.79116Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  } else if (logoImage) {
    return (
      <div style={{ width: 36, height: 37 }} {...rest}>
        <Image src={logoImage} alt="Logo" width={36} height={37} />
      </div>
    );
  } else {
    return null;
  }
}

export default Stamp;
