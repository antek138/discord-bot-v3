module.exports = {
  name: "clear",
  description: "Wyczyść liczbę wiadomości w określonym kanale.",
  args: true,
  usage: "<amount>",

  run(msg, args) {
    const { channel } = msg
    const amountArg = parseInt(args[0])

    if (!Number.isInteger(amountArg)) {
      return channel.send("Musisz wybrać ile wiadomości mam usunąć!")
    }

    if (amountArg < 2 || amountArg >= 100) {
      return channel.send(
        "Liczba wiadomości do usunięcia musi być większa niż 1 i mniejsza niż 100.",
      )
    }

    channel.bulkDelete(amountArg)
  },
}
