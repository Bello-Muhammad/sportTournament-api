
const firstLetterUpperCase = str => {
    return str.split(/\s/g).filter(a => a !== "").map(a=> a[0].toUpperCase() + a.substring(1)).join(' ')
};

module.exports = firstLetterUpperCase;