import classes from './Heading.module.scss';

import Google from '../images/google.svg';

const Heading = () => {
  return (
    <>
      <h1>I'm a heading!</h1>
      <p>Lorem ipsum dolor sit amet!</p>
      <div className={classes.hero}>
        <Google />
      </div>

    </>
  )
}

export default Heading;
