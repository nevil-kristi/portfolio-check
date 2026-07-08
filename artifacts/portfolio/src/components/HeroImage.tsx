const HeroImage = () => {
  return (
    <>
      <img
        src="/portfolioLogo.png"
        alt="logo"
        loading="eager"
        height={1000}
        width={1000}
        className="w-full h-full object-contain"
      />
    </>
  );
};

export default HeroImage;
