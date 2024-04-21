// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
  return (
    <div className="max-w[1400px] bg-primary mx-auto lg:px-100px md:px-4 px-2">
      {children}
    </div>
  );
};

export default Container;
