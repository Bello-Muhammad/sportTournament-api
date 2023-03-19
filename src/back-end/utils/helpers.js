
const firstLetterUpperCase = str => {
    return str.split(/\s/g).filter(a => a != "").map(a=> a[0].toUpperCase() + a.substring(1)).join(' ')
};

const playerDetails = (name) => {
    
    if (name.length === 2) {

        const player = {
            firstName: name[0],
            lastName: name[1],
        };
        
        return player;
    }else {
        const player = {
            firstName: name[0],
            lastName: name[1],
            otherName: name[2],
        };

        return player;
    }
}

module.exports = {
    firstLetterUpperCase,
    playerDetails
}