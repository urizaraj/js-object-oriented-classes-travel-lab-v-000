const month = {
  'Aug': 8
}

class Driver {
  constructor(name, date) {
    this.name = name

    ar = /([a-zA-Z]{3}) (\d{1,2}), (\d{4})/.exec(date)
    
    this.date = date
  }

  startDate() {
    
  }
}
