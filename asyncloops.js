function loadUsers(userIds, load, done) {
    var users = []
    var asyncs = [];
    for (var i = 0; i < userIds.length; i++) {
        load(userIds[i], function (user) { users.push(user) })
    }
    while(user.length != userIds.length)
        continue;

    done(users);
}

module.exports = loadUsers