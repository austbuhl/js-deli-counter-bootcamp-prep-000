
function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var nowServing = line[0];
    line.shift();
    return `Currently serving ${nowServing}.`;
  }
}

function currentLine(line) {
  var array = [];
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    for (let i = 0; i < line.length; i++) {
      array.push(` `+[i+1]+`. ` + line[i])
    }
  }
  return "The line is currently:" + array
}
