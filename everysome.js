function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
      // SOLUTION GOES HERE
      return submittedUsers.every(function (submitted){
          return goodUsers.indexOf(submitted) > -1;
      })
    };
  }

  module.exports = checkUsersValid