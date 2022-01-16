import Web3 from 'web3';
import './indexInfo.css';

export const IndexInformation = ({ indexData }) => {
  const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  return (
    <div className="data-block">
      <div className="data-block__index-type">{indexData.name}</div>
      <div className="data-block__price">
        {`$${indexData.usdPriceInCents / 100} / ${Web3.utils.fromWei(indexData.ethPriceInWei, 'ether')} ETH`}
      </div>
      <div className="data-block__flex">
        <div className="data-block__usd-capitalization">
          {priceFormatter.format(indexData.usdCapitalization / 100)}
        </div>
        <div className="data-block__percent">
          {indexData.percentageChange > 0
            ? '+' + indexData.percentageChange
            : indexData.percentageChange}{'%'}
        </div>
      </div>
    </div>
  )
}
