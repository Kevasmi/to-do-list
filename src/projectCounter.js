function createCounter(taskList) {
    const counts = {};
    taskList.forEach( x => {
        counts[x.project] = (counts[x.project] || 0) + 1;
    });
    return counts
};

function projectSubtractCounter(target, counts) {
    for (const count in counts) {
        if (count == target) {
            counts[count] = counts[count] - 1;
        };
    }
    return counts
};

export {
    createCounter,
    projectSubtractCounter,
}