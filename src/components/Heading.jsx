// import classes from './Heading.module.scss';

import Google from '../images/google.svg';

const Heading = () => {
  return (
    <>
      <h1 className="text-primary text-4xl font-bold">I'm a heading!</h1>
      <p>Lorem ipsum dolor sit amet!</p>
      <p>Test again</p>
      <div className="test">
        <Google />
      </div>
    </>
  );
};

export default Heading;
