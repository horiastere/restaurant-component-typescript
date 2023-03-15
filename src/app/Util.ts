const formatPrice = (fullPrice: number) => {
  const priceSplit = fullPrice.toString().split('.');

  const price = priceSplit[0];
  const decimal = priceSplit[1] || '00';

  return [price, decimal];
}

export default formatPrice;