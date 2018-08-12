// Code your solution here:
function driversWithRevenueOver(list,reven){
  return list.filter((driver)=>driver.revenue > reven)
}

function driverNamesWithRevenueOver(list,reven){
  let array =[]
  list.map(function(driver){
    if (driver.revenue > reven){
      return array.push[driver.name]
    }
  })
  return array
}