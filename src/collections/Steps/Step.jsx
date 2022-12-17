/* eslint-disable @next/next/no-img-element */
export const Step = ({ stepNo, heading, para, imgSrc, reverse }) => {
  return (
    <div className={`flex ${reverse? "flex-row-reverse":"flex"} justify-between my-16 items-center`}>
      <div className='max-w-[500px] flex flex-col space-y-6'>
        <div className="space-y-2">
          <p className='text-sm tracking-widest font-bold'>Step {stepNo}</p>
          <h2 className="text-3xl font-bold">{heading}</h2>
        </div>
        <p className="">{para}</p>
      </div>
      <img src={imgSrc} alt={heading} width={600} />
    </div>
  );
};
