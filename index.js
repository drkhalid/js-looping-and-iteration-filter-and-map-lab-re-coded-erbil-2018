// Code your solution here:
function driversWithRevenueOver(list,reven){
  return list.filter((driver)=>driver.revenue > reven)
}

function driverNamesWithRevenueOver(list,reven){
  return driversWithRevenueOver(list,reven).map((driver)=> driver.name)
  
}
