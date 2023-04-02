const LoadingDots = ({
  color = "#000",
  style = "small",
}: {
  color: string;
  style: string;
}) => {
  return <span>Loading dots</span>;
};

export default LoadingDots;

LoadingDots.defaultProps = {
  style: "small",
};
