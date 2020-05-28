import React from 'react'
import PropTypes from 'prop-types'
import ListingItem from './ListingItem'

const Listing = ({ items }) => {
    // const {
    //     url,
    //     listing_id,
    //     MainImage,
    //     title,
    //     currency_code,
    //     price,
    //     quantity
    // } = items

    return (
        <div className='item-list'>
            {items.map((item) => {
                console.log(item.title);
                return (
                <ListingItem
                    key={item.listing_id}
                    url={item.url}
                    listingId={item.listing_id}
                    img={item.MainImage}
                    title={item.title}
                    currencyCode={item.currency_code}
                    price={item.price}
                    quantity={item.quantity}
                />)
            })}
        </div>
    )
}

Listing.propTypes = {
    url: PropTypes.string,
    listingId: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    currencyCode: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number
}

export default Listing
