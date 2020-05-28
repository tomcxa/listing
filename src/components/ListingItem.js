import React from 'react'

const ListingItem = (props) => {
    const {
        url,
        img,
        title,
        currencyCode,
        price,
        quantity
    } = props

    let fmtPrice = currencyCode
    if (currencyCode === 'USD') fmtPrice = '$'
    if (currencyCode === 'EUR') fmtPrice = '€'
    fmtPrice += price;

    const fmtTitle = (title.length > 50) ? title.slice(0, 50).concat('...') : title
    const fmtQuantity = quantity + 'left';

    let quantityClassName = 'level-medium'
    if (quantity <= 10) quantityClassName = 'level-low'
    if (quantity > 20) quantityClassName = 'level-high'

    return (
        <div className="item">
            <div className="item-image">
                <a href={url}>
                    <img
                        src={img.url_570xN}
                        alt=""
                    />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{fmtTitle}</p>
                <p className="item-price">{fmtPrice}</p>
                <p className={`item-quantity ${quantityClassName}`}>{fmtQuantity}</p>
            </div>
        </div>
    )
}

ListingItem.defaultProps = {
    url: '',
    img: '',
    title: '',
    currencyCode: 'TON',
    price: '',
    quantity: 0
}

export default ListingItem
