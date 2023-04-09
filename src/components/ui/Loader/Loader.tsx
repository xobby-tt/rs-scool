import classes from './Loader.module.css';

export const Loader = () => {
  return (
    <>
      <div className={classes.loader}>
        <div className={`${classes.inner} ${classes.one}`}></div>
        <div className={`${classes.inner} ${classes.two}`}></div>
        <div className={`${classes.inner} ${classes.three}`}></div>
      </div>
    </>
  );
};
