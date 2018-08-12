// Code your solution here:
function driversWithRevenueOver(list,reven){
  return list.filter((driver)=>driver.revenue > reven)
}

function driverNamesWithRevenueOver(list,reven){
  return list.map(function(driver){
    if (driver.revenue > reven){
      let array =[]
      array.push[driver.name]
      return array
    }
  })
}