import './Info.css'
import React from "react";
import GoogleMapReact from 'google-map-react';
import HeaderComponent from '../components/Header/HeaderComponents'
import Footer from '../components/Footer/Footer'
import center from '../img/collect.png';
const AnyReactComponent = ({lat,lng}:{lat:number,lng:number}) => <div><img src={center} alt='center'/></div>;
const Info: React.FC = () => {
    const apiKey = 'AIzaSyCs1CkuATd0qlm5nly23yjmpcdpPpLxqHw';
    const defaultProps = {
        center: {
          lat: 47.22421,
          lng: 8.68145
        },
        zoom: 12
      };
    return(
        <div>
            <HeaderComponent/>
                <div className="info-container container">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <table>
                                <tbody>
                                <tr>
                                    <td className='table-header'><strong>Fläche</strong></td>
                                    <td>3'559 ha (davon 498 ha Wald)</td>
                                </tr>
                                <tr>
                                    <td className='table-header'><strong>Einwohnerzahl</strong></td>
                                    <td>25'727 (31.12.2023)</td>
                                </tr>
                                <tr>
                                <td className='table-header'><strong>Einwohnerdichte</strong></td>
                                    <td>707 Einw. pro km²</td>
                                </tr>
                                <tr>
                                    <td className='table-header'><strong>Haushaltungen</strong></td>
                                    <td>12'066 (31.12.2023)</td>
                                </tr>
                                <tr>
                                    <td className='table-header'><strong>Arbeitsstätten</strong></td>
                                    <td>1'868 (Stand 2020)</td>
                                </tr>
                                <tr>
                                    <td className='table-header'><strong>Beschäftigte</strong></td>
                                    <td>9'938 (Stand 2020)</td>
                                </tr>
                                <tr>
                                    <td className='table-header'><strong>Postleitzahl</strong></td>
                                    <td>8820</td>
                                </tr>
                                <tr>
                                    <td className='table-header'><strong>Region</strong></td>
                                    <td>Linkes Seeufer, Zimmerberg</td>
                                </tr>
                                <tr>
                                    <td className='table-header'><strong>Bezirk</strong></td>
                                    <td>Horgen</td>
                                </tr>
                                <tr>
                                    <td className='table-header'><strong>Kanton</strong></td>
                                    <td>Zürich (ZH)</td>
                                </tr>
                                <tr>
                                    <td className='table-header'><strong>Staat</strong></td>
                                    <td>Schweiz</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='col-12 col-md-7'>
                            <div style={{ height: '100%', width: '100%' }}>
                                <GoogleMapReact bootstrapURLKeys={{ key: apiKey }} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
                                    <AnyReactComponent lat={47.22411} lng={8.68135}/>
                                </GoogleMapReact>
                            </div>
                        </div>
                    </div>

                    <div>
                        <br />
                        <hr />
                        <br />
                    <table>
                        <thead>
                            <th>Einwohnerzahl</th>
                            <th className='info-table-jahr'>2023</th>
                            <th className='info-table-jahr'>2022</th>
                            <th className='info-table-jahr'>2021</th>
                            <th className='info-table-jahr'>2020</th>
                            <th className='info-table-jahr'>2015</th>
                            <th className='info-table-jahr'>2010</th>
                            <th className='info-table-jahr'>2005</th>
                            <th className='info-table-jahr'>2000</th>
                            <th className='info-table-jahr'>1995</th>
                            <th className='info-table-jahr'>1990</th>
                            <th className='info-table-jahr'>1985</th>
                        </thead>
                        <tbody>
                            <tr className="info-table-row">
                                <th>Schweizer/-innen</th>
                                <td>19'607</td>
                                <td>19'480</td>
                                <td>19'388</td>
                                <td>19'308</td>
                                <td>16'614</td>
                                <td>16'098</td>
                                <td>15'458</td>
                                <td>15'420</td>
                                <td>15'578</td>
                                <td>15'698</td>
                                <td>15'613</td>
                            </tr>
                            <tr>
                                <th>Ausländer/-innen</th>
                                <td>6'120</td>
                                <td>5'680</td>
                                <td>5'543</td>
                                <td>5'500</td>
                                <td>4'955</td>
                                <td>4'278</td>
                                <td>3'840</td>
                                <td>3'834</td>
                                <td>3'726</td>
                                <td>2'446</td>
                                <td>3'243</td>
                            </tr>
                            <tr>
                                <th>Einwohnerbestand</th>
                                <td>25'727</td>
                                <td>25'160</td>
                                <td>24'931</td>
                                <td>24'808</td>
                                <td>21'596</td>
                                <td>20'376</td>
                                <td>19'298</td>
                                <td>19'074</td>
                                <td>19'304</td>
                                <td>19'144</td>
                                <td>18'856</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Info