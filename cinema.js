function movie(card, ticket, perc) {
  let costA = 0;
  let n = 0;
  let costB = card;
  while (Math.ceil(costB) >= costA) {
    costA += ticket;
    costB += ticket * Math.pow(perc, ++n);
  }
  return n;
}
console.log(movie(814236, 45, 0.46));
