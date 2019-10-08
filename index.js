produceDrivingRange = (totalTrip) => {
  return (startTrip,endTrip)=>{
    const diff = parseInt(endTrip) - parseInt(startTrip)
    if(totalTrip < diff)
      return Math.abs(totalTrip - diff) + " blocks out of range";
    else
      return "within range by " + Math.abs(diff - totalTrip);
  }
}

produceTipCalculator = (percent) => {
  return (fare) => {
      return fare * percent;
  }
}

createDriver = () => {
  constructor(name){
    this.name = name;
  }
}