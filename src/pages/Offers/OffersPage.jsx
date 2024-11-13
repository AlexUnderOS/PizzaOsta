import './OffersPage.scss'

function OffersPage() {
    return (
        <div className="offers-page">
            <div className="offers-container">
                <h2>This Week!</h2>
                <div className="weekly-specials-grid">
                    <div className="content">
                        <img
                            className="deal-image"
                            src="/src/images/comercial/deal_1.png"
                            alt="pizza by osta - deals"
                        />
                        <h3 className="deal-title">
                            Buy any pizza (L) with fries and get your free
                            drink! 14.49€
                        </h3>
                        <div className="deal-date">13 november 2024</div>
                        <p className="deal-text">Enjoy your meal</p>
                        <button className="deal-button">Details</button>
                    </div>
                    <div className="content">
                        <img
                            className="deal-image"
                            src="/src/images/comercial/deal_2.png"
                            alt="pizza by osta - deals"
                        />
                        <h3 className="deal-title">
                            Buy any pizza (L) with fries and get your free
                            drink! 14.49€
                        </h3>
                        <div className="deal-date">13 november 2024</div>
                        <p className="deal-text">Enjoy your meal</p>
                        <button className="deal-button">Details</button>
                    </div>
                    <div className="content">
                        <img
                            className="deal-image"
                            src="/src/images/comercial/deal_3.png"
                            alt="pizza by osta - deals"
                        />
                        <h3 className="deal-title">
                            Buy any pizza (L) with fries and get your free
                            drink! 14.49€
                        </h3>
                        <div className="deal-date">13 november 2024</div>
                        <p className="deal-text">Enjoy your meal</p>
                        <button className="deal-button">Details</button>
                    </div>
                    <div className="content">
                        <img
                            className="deal-image"
                            src="/src/images/comercial/deal_4.png"
                            alt="pizza by osta - deals"
                        />
                        <h3 className="deal-title">
                            Buy any pizza (L) with fries and get your free
                            drink! 14.49€
                        </h3>
                        <div className="deal-date">13 november 2024</div>
                        <p className="deal-text">Enjoy your meal</p>
                        <button className="deal-button">Details</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default OffersPage
