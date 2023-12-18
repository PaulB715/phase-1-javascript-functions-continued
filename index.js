function saturdayFun(activity) {
    if (arguments.length === 0) {
      return "This Saturday, I want to roller-skate!";
    } else {
      return "This Saturday, I want to " + activity + "!";
    }
  }
  function mondayWork(activity){
    if (arguments.length === 0) {
        return "This Monday, I will go to the office."
    } else {
        return "This Monday, I will " + activity + "."
    }
  }
  function wrapAdjective(character) {
    return function(adjective) {
      return `You are ${character}${adjective}${character}!`;
    };
  }
