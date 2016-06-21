//i: given a time with am/pm
//convert the time to military time (if it makes sense to do so)
//be aware if the time is 12

const timeMilitary = (str) => {
  let result = ''
  if(str.slice(8) === 'PM' && parseInt(str.slice(0, 2)) < 12){
    let x = parseInt(str.slice(0, 2)) + 12
    result = x + (str.slice(2,8))
  }
  else if(str.slice(8) === 'AM' && str.slice(0, 2) === '12') {
    result = '00' + str.slice(2, 8)
  }
  else{
    result = str.slice(0,8)
  }
  return result
}

timeMilitary('03:05:45PM')