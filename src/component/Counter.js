import React, {useState} from 'react';
import classes from './Counter.module.css'

const Counter = () => {
    //This defines the initial state of the count which is zero(0) and updates the state on each click
    const [counter, setCounter] = useState(0);
    
    // This method handles the decrement on teach click on the Decrement button
    const handleDecrementClick = () => {
        setCounter(counter - 1);
        
    };
    //This method returns the counter back to its initial state(or default state)
    const handleResetClick = () => {
        setCounter(0);
    };

    // This method handles the increment on each click on the Increment button
    const handleIncrementClick = () => {
        setCounter(counter + 1);
    };

    return(
        <div className={classes.counterContainer}>
            <h1 className={classes.title}>Here is my Counter App
                <p className={classes.counter}>{counter}</p>
            </h1>
            <div className={classes.buttonContainer}>
            <button type="button" onClick={handleDecrementClick} className={classes.decrement}>
                <h3 className={classes.decrementIcon}>-</h3>
                </button>
            <button type="button" onClick={handleResetClick} className={classes.reset}>
                <h3 className={classes.resetIcon}>Reset</h3>
                </button>
            <button type="button" onClick={handleIncrementClick} className={classes.increment}>
                <h3 className={classes.incrementIcon}>+</h3>
            </button>
            </div>
            
        </div>
    );
};

export default Counter;