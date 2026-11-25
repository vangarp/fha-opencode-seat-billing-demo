export function monthlySeatCost(seats, pricePerSeat) {
  return seats.filter((seat) => seat.status === "active").length * pricePerSeat;
}
