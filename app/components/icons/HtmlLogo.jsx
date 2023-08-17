import React from "react";

export const HtmlLogo = ({
  size = 48,
  color = "currentColor",
  ...restProps
}) => {
  return (
    <svg
    width="100%"
      height={size}
      viewBox="0 0 46 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.916 30.2964L28.6147 28.2037L29.655 16.9074H15.9601L15.6197 13.1482H29.9955L30.3738 9.46301H11.4583L12.5175 20.5927H25.5503L25.1152 25.3704L20.916 26.4815L16.7168 25.3704L16.4519 22.2964H12.6688L13.2174 28.2037L20.916 30.2964ZM5.91602 3.33337H35.916L33.211 33.3334L20.916 36.6667L8.62093 33.3334L5.91602 3.33337Z"
        fill="white"
      />
    </svg>
  );
};

export default HtmlLogo;
