import formatPrice from "../../app/Util";

const Price = ({fullPrice}: {fullPrice: number}) => {
  const [price, decimal] = formatPrice(fullPrice);

  return(
    <strong>
      {price}<sup>{decimal}</sup>
    </strong>
  );
}

export default Price;