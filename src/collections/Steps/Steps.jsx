import { Step } from './Step';

const stepsArray = [
  {
    id: 1,
    stepNo: 'One',
    heading: 'Get In Touch',
    imgSrc: '/images/step-one.png',
    para: 'Pagu is a great way to mass distribute NFTs with no technical knowledge. If you are interested in starting your own NFT marketing campaign on Pagu, please contact us and tell us about your project. Then, our representative will start the process on your behalf.',
  },
  {
    id: 2,
    stepNo: 'Two',
    heading: 'We Produce The Code',
    imgSrc: '/images/step-two.png',
    para: 'After we receive all the necessary information and materials, we will produce your code. This is it. You may start sharing it with your target audience immediately.',
    reverse: true,
  },
  {
    id: 3,
    stepNo: 'Three',
    imgSrc: '/images/step-three.png',
    heading: 'Your Community Redeems Their Code To Get Their NFT',
    para: 'Anyone with a valid code can mint their NFT on Pagu.io for free*',
  },
];

export const Steps = () => {
  return (
    <>
      {stepsArray.map((step) => (
        <Step
          key={step.id}
          stepNo={step.stepNo}
          heading={step.heading}
          para={step.para}
          imgSrc={step.imgSrc}
          reverse={step.reverse}
        />
      ))}
    </>
  );
};
