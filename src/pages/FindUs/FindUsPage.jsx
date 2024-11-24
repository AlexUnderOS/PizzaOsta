import './FindUsPage.scss'
import pizzaOstaPlaceImg from '/images/locals/pizza_osta_place.png'
import localIcon from '/images/emoji/local.svg'
import instagramIcon from '/images/social/instagram.svg'
import youtubeIcon from '/images/social/youtube.svg'
import facebookIcon from '/images/social/facebook.svg'

function FindUsPage() {
    return (
        <div className="findUs-page">
            <div className="findUs-container">
                <div className="findUs-content box-shadow-1">
                    <img
                        className="pizzeria-place-img"
                        src={pizzaOstaPlaceImg}
                        alt="pizza osta location"
                    />
                    <div className="info">
                        <div className="location-info">
                            <div className="head-content">
                                <h2 className="h2-1">
                                    Pizza Osta - Liepāja
                                    <img
                                        className="location-icon"
                                        src={localIcon}
                                        alt="location icon"
                                        draggable="false"
                                        color="#c72020"
                                    />
                                </h2>
                            </div>
                            <div>Liepāja, Kuršu iela 30, LV-3401</div>
                            <b>
                                <div>+371 999 999 99</div>
                            </b>
                        </div>
                        <div className="map-location">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1924488.6322023575!2d21.665962065176675!3d56.30285957156221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46faa605610aecdb%3A0x2c7ace2576bfa7ab!2zS3VyxaF1IGllbGEgMzAsIExpZXDEgWphLCBMVi0zNDAx!5e0!3m2!1sen!2slv!4v1731525637844!5m2!1sen!2slv"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <div className="social-icons">
                            <img
                                className="facebook"
                                src={facebookIcon}
                                alt="facebook icon"
                            />
                            <img
                                className="instagram"
                                src={instagramIcon}
                                alt="instagram icon"
                            />
                            <img
                                className="youtube"
                                src={youtubeIcon}
                                alt="youtube icon"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindUsPage
