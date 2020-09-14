const yodaFunction = async(doOrDoNot) => {
    console.log('yodaFunction');

    if (doOrDoNot) {
        return 'there is no try';
    }

    return 'Fear is the path to the dark side';
}

module.exports = {
    yodaFunction
};
