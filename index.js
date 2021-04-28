/**
 * @cx/redux-logger
 *
 * @author chenxin
 */
const logger = ({ getState }) => next => action => {
    console.groupCollapsed(action.type, '@', new Date().toLocaleString());
    console.log('%c prev state:', _style('grey'), getState());
    console.log('%c action: ', _style('green'), action);

    const res = next(action);

    console.log('%c next state: ', _style('blue'), getState());
    console.groupEnd();

    return res;
};

const _style = color => {
    return `color: ${color}; font-weight: 700`;
};

export default logger;
