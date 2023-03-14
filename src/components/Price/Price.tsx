const Price = ({fullPrice}: {fullPrice: number}) => {
  const priceSplit = fullPrice.toString().split('.');

  const price = priceSplit[0];
  const decimal = priceSplit[1] || '00';

  return(
    <strong>
      {price}<sup>{decimal}</sup>
    </strong>
  );
}

export default Price;