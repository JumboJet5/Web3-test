import Web3 from 'web3';
import './indexInfo.css';

export const IndexInformation = ({ indexData }) => {
  // const priceFormat = () => {
  //   return price;
  // }

  // console.log(new Intl.NumberFormat('en-IN', { style: 'decimal', currency: 'USD' }).format(indexData.usdCapitalization));

  return (
   <div className="data-block">
      <div className="data-block__index-type">{indexData.name}</div>
      <div className="data-block__price">{`$${indexData.usdPriceInCents / 100} / ${Web3.utils.fromWei(indexData.ethPriceInWei,'ether')} ETH`}</div>
      <div className="data-block__flex">
        <div className="data-block__usd-capitalization">{'$'}{indexData.usdCapitalization.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
        <div className="data-block__percent">{indexData.percentageChange > 0 ? '+' + indexData.percentageChange : indexData.percentageChange}{'%'}</div>
      </div>
   </div>
  )
}
