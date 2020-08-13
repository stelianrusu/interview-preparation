function getDependencies(tree) {
    // SOLUTION GOES HERE
    // Note: Feel free to add additional arguments
    // to this function for use with recursive calls.
    // Or not! There are many ways to recurse.
    var deps = [];
    getNodeDependencies(tree);
    function getNodeDependencies(node) {
        for (var key in node.dependencies) {
            const dep = node.dependencies[key];
            var depName = key + "@" + dep.version;
            if (deps.indexOf(depName) < 0) {
                deps.push(depName);
                getNodeDependencies(dep);
            }
        }

    }
    deps.sort();
    return deps;
}

module.exports = getDependencies
