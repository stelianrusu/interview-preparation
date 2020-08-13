function getShortMessages(messages) {
    // SOLUTION GOES HERE
    return messages.map(s => s.message).filter(s => s.length < 50);
  }

  module.exports = getShortMessages