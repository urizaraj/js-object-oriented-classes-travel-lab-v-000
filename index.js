const month = {
  'Aug': 8
}

class Driver {
  constructor(name, date) {
    this.name = name

    const ar = /([a-zA-Z]{3}) (\d{1,2}), (\d{4})/.exec(date)

    this.date = new Date(parseInt(ar[2]), month[ar[0]], parseInt(ar[1]))
  }

  startDate() {
    return this.date
  }
}
