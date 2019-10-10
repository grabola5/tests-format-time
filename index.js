const formatDate = (timeInSeconds) => {
  let hours = Math.floor(timeInSeconds/3600)
  let minutes = Math.floor((timeInSeconds - 3600 * hours)/60)
  let seconds = timeInSeconds - 3600 * hours - 60 * minutes

  if (!timeInSeconds || timeInSeconds===0) {
    return '0s'
  } else if (timeInSeconds < 60) {
    return `${timeInSeconds}s`
  } else if (timeInSeconds >= 60 && timeInSeconds< 3600) {
    return `${minutes}m` + ( seconds > 0 ? ` ${seconds}s` : '');
  } else {
    return `${hours}h`+ ( minutes > 0 ? ` ${minutes}m` : '') + ( seconds > 0 ? ` ${seconds}s` : '');
  }
}

module.exports = formatDate;
