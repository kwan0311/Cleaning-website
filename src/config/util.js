import env from './env';

/**
 * Get current environment parameters
 * @param {String} key Environment parameter key value
 */
function getEnvParams(key) {
    if(DEV_MODE) {
        return env.dev[key];
    }
    else {
        return env.prod[key];
    }
}

export {
    getEnvParams
}