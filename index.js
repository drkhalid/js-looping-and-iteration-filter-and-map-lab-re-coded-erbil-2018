// Code your solution here:
function driversWithRevenueOver(list,reven){
  return list.filter((driver)=>driver.revenue > reven)
}

function driverNamesWithRevenueOver(list,reven){
  return driversWithRevenueOver(list,reven).map((driver)=> driver.name)
}


function exactMatch(list,value){
  return list.filter(function(driver){})
  
}