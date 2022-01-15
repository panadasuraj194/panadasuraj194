let count = 0;

function cc(card) {
  // Only change code below this line
  let regex = /[JQKA]/;
  if(card >=2 && card <=6){
    return count++;
  } else if(card === 10 || regex.test(card)){
  count--;
  }
  if(count>0){
    return count + "Bet";
  }else{
    return count + "Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
