import './OffersPage.scss'
import dealImage1 from '/images/comercial/deal_1.png'
import dealImage2 from '/images/comercial/deal_2.png'
import dealImage3 from '/images/comercial/deal_3.png'
import dealImage4 from '/images/comercial/deal_4.png'

function OffersPage() {
    return (
        <div className="offers-page">
            <div className="offers-container">
                <h2>This Week!</h2>
                <div className="weekly-specials-grid">
                    <div className="content">
                        <img
                            className="deal-image"
                            src={dealImage1}
                            alt="pizza by osta - deals"
                        />
                        <h3 className="deal-title">
                            Buy any pizza (L) with fries and get your free
                            drink! 14.49€
                        </h3>
                        <div className="deal-date">13 november</div>
                        <p className="deal-text">
                            The price may vary depending on the pizza.
                        </p>
                        <button className="deal-button">Details</button>
                    </div>
                    <div className="content">
                        <img
                            className="deal-image"
                            src={dealImage2}
                            alt="pizza by osta - deals"
                        />
                        <h3 className="deal-title">
                            X2 Buy a peperoni pizza (M), the second one will be
                            cheaper 7.99€
                        </h3>
                        <div className="deal-date">13 november</div>
                        <p className="deal-text">
                            The price may vary depending on the pizza.
                        </p>
                        <button className="deal-button">Details</button>
                    </div>
                    <div className="content">
                        <img
                            className="deal-image"
                            src={dealImage3}
                            alt="pizza by osta - deals"
                        />
                        <h3 className="deal-title">
                            2 (M) pizzas and juice for free! 9.99€
                        </h3>
                        <div className="deal-date">13 november</div>
                        <p className="deal-text">
                            The price may vary depending on the pizza.
                        </p>
                        <button className="deal-button">Details</button>
                    </div>
                    <div className="content">
                        <img
                            className="deal-image"
                            src={dealImage4}
                            alt="pizza by osta - deals"
                        />
                        <h3 className="deal-title">
                            X3 Buy 3 pizzas (S) for less than the price of each
                            one! 14.99€
                        </h3>
                        <div className="deal-date">13 november</div>
                        <p className="deal-text">
                            The price may vary depending on the pizza.
                        </p>
                        <button className="deal-button">Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OffersPage
