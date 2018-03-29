const month = {
  'Aug': 8
}

class Driver {
  constructor(name, date) {
    this.name = name

    const ar = /([a-zA-Z]{3}) (\d{1,2}), (\d{4})/.exec(date)

    this.date = new Date(ar[2].parseInt(), month[ar[0]], ar[1].parseInt())
  }

  startDate() {
    return this.date
  }
}
