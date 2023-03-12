function Testimonial({ author, testimonial, color, area, backgroundImage }) {
  // set text color based on background brightness
  const re = /.*,.*,(.*)%.*/;
  const backgroundBrightness = color.match(re)[1].trim();
  let textColor;
  if (backgroundBrightness < 60) textColor = "text-white";
  else textColor = "text-darkGrayishBlue";
  return (
    <article
      className={`${textColor} shadow-xl rounded-lg px-8 py-6 transition-all duration-500 grid-in-${area} mb-6 last:mb-0 sm:mb-0 ${
        backgroundImage &&
        "bg-[url('images/bg-pattern-quotation.svg')] bg-no-repeat bg-[right_1.5rem_top] sm:bg-[right_5rem_top]"
      }`}
      style={{ backgroundColor: color }}
    >
      <div className="flex items-center">
        <img
          src={author.image}
          className="w-8 rounded-full border-2 border-[hsla(0,0%,100%,0.4)]"
          alt="Avatar"
          aria-hidden="true"
        />
        <div className="ml-4">
          <p className="text-sm">{author.name}</p>
          <p className="text-xs opacity-50 leading-3">{author.title}</p>
        </div>
      </div>
      <h2 className="text-xl mt-4 font-medium leading-6">
        {testimonial.header}
      </h2>
      <p className="text-[0.82rem] mt-4 opacity-70 leading-5 md:leading-[1.15rem]">
        “ {testimonial.body} ”
      </p>
    </article>
  );
}

Testimonial.defaultProps = {
  backgroundImage: false,
};

export default Testimonial;
