import HeaderComponent from "../components/Header/HeaderComponents";
import Footer from '../components/Footer/Footer'
import './Contact.css'
import { pageAdverts } from "../untils/untils";
import { useEffect, useState } from "react";
import { AdvertUpdateType } from "../type/advertType";
import { getAdvertData } from "../services/advertService";

const Contact: React.FC = () => {
    const [advertData, setAdvertData] = useState<AdvertUpdateType[]>([]);
    useEffect(() => {
        getAdvertData(setAdvertData)
      }, [])
    const eventAdverts = advertData.filter(advert => advert.advertPage === "contact" && advert.publish);
    const adverts = pageAdverts(eventAdverts);
 
    return (
    <div>
        <HeaderComponent/>
        <div className="row">
            <div className="col-12 col-md-6">
                <h2 className="text-center m-3">Impressum</h2>
                <p className="m-5">
                Auf waedi.ch (auch wädi.com, wädi.net, waedi.net und waedi.info) können die Nutzer selbst Inhalte hinzufügen, verändern und ergänzen. 
                Die Redaktion versucht, im Rahmen des Machbaren Inhalte wie Texte, Bilder und Links zu überprüfen. Sollten Sie rechtswidrige, unmoralische oder 
                sonstwie unerlaubte und anstössige Inhalte feststellen, bitten wir Sie uns dies via Kontaktformular oder unten genannte Kontaktstellen zu melden.
                Fehlt etwas Wichtiges oder sind Sie über etwas Veraltetes gestolpert? Wir freuen uns auf Ihr Feedback.Auch für alle andern Arten von Anfragen steht 
                Ihnen das Kontaktformular zur Verfügung.Das Portal waedi.ch enthält Links zu anderen Internetseiten. Für den Inhalt dieser Seiten übernimmt waedi.ch 
                weder Haftung noch Verantwortung und macht sich den Inhalt ausdrücklich nicht zu eigen. Unter Umständen werden Internetseiten aufgerufen, die 
                urheberrechtlich geschütztes Material enthalten, Markenrechte verletzen, rechtswidrige Eingriffe in das Persönlichkeitsrecht Dritter oder andere 
                Gesetzesverstösse darstellen. Es ist nicht statthaft, ohne die Erlaubnis des jeweiligen Copyright-Inhabers urheberrechtlich geschütztes Material 
                zu nutzen, Marken zu nennen oder zu imitieren sowie ohne Genehmigung in die Persönlichkeitsrechte Dritter einzugreifen. Die Nutzer von waedi.ch 
                rufen verlinkte Sites auf eigene Verantwortung auf.Verwendete Quellen auf waedi.ch: Bundesamt für Statistik (BfS), Stadt Wädenswil, 
                Verkehrsverein Wädenswil, Wikipedia.org, Google.ch, Twixtel.ch
                </p>
            </div>
            <div className="col-12 col-md-6">
                <div className="contact-container">
                    <h2 className="text-center m-3">Kontakt</h2>
                    <form method="get" action="">
                    <div className='text-center contact-form-container'>
                        <select className="col-4 contact-form-list  contact-form-anrede">
                            <option className="contact-form-list" value="" disabled>Anrede*</option>
                            <option className="contact-form-list" value="Herr">Herr</option>
                            <option className="contact-form-list" value="Frau">Frau</option>
                        </select>
                    </div>
                    <div className="row mx-5 my-2 ">
                        <div className="col-12 col-sm-6 contact-form-container"> <input className="col-12 contact-form-list" type="text" placeholder="Name*" /></div>
                        <div className="col-12 col-sm-6 contact-form-container"> <input className="col-12 contact-form-list" type="text" placeholder="Vorname*" /></div>
                    </div>
                    <div className="row mx-5">
                        <div className="col-12 col-sm-6 contact-form-container"> <input className="col-12 contact-form-list" type="text" placeholder="Firma/Organisation" /></div>
                        <div className="col-12 col-sm-6 contact-form-container"> <input className="col-12 contact-form-list" type="text" placeholder="Strasse/Nr" /></div>
                    </div>
                    <div className="row mx-5 my-2">
                        <div className="col-12 col-sm-6 contact-form-container"> <input className="col-12 contact-form-list" type="text" placeholder="PLZ/Ort" /></div>
                        <div className="col-12 col-sm-6 contact-form-container"> <input className="col-12 contact-form-list" type="text" placeholder="Land" /></div>
                    </div>
                    <div className="row mx-5">
                        <div className="col-12 col-sm-6 contact-form-container"> <input className="col-12 contact-form-list" type="text" placeholder="Telefon" /></div>
                        <div className="col-12 col-sm-6 contact-form-container"> <input className="col-12 contact-form-list" type="text" placeholder="Email*" /></div>
                    </div>
                    <div className="row mx-5 my-2">
                        <div className="col-12 contact-form-container"> <input className="col-12 contact-form-list" type="text" placeholder="Betreff*" /></div>
                    </div>
                    <div className="row mx-5">
                        <div className="col-12 contact-form-container"> <input className="col-12 contact-form-anfrage " type="text" placeholder="Ihre Anfrage*" /></div>
                    </div>
                    <div className="row mx-5 mt-5">
                        <div className="col-12 contact-form-container"> <button className="offset-3 col-6 contact-form-button"> Schicken </button></div>
                    </div>
                </form>
                </div>
               
                
            </div>
        </div>
        <div className="row m-5">
            <div className="col-12 col-md-4">
                <h5>Verantwortlich Inhaltewaedi.ch (Wädi Online)</h5>
                <p>Schmidgass 2</p>
                <p>CH-8820 Wädenswil</p>
                <p>info@waedi.ch - www.waedi.ch</p>
            </div>
            <div className="col-12 col-md-4">
                <h5>Administrative ZuständigkeitInstruct AG</h5>
                <p>Schmidgass 2</p>
                <p>CH-8820 Wädenswil</p>
                <p>Tel. +41(0)44 680 15 30 - Fax. +41(0)44 680 15 31</p>
                <p>info@waedi.ch - www.waedi.ch</p>
            </div>
            <div className="col-12 col-md-4">
                <h5>Technischer Unterhalt und Support abc4IT GmbH</h5>
                <p>Schmidgass 2</p>
                <p>CH-8820 Wädenswil</p>
                <p>Tel. +41(0)44 680 26 56 - Fax. +41(0)44 680 26 56</p>
                <p>info@abc4it.com - www.abc4it.com</p>
            </div>
        </div>
        <div className="row my-5">
          {adverts}
        </div>
        <Footer/>
    </div>
    );
}; 
export default Contact;     