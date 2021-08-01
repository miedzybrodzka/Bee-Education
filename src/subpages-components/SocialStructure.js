import React, {Component} from 'react';
import queen from '../images/queen.jpg';
import usualbees from '../images/usualbees.jpg';
import drone from '../images/drone.jpg';
import video5 from '../videos/video5.webm';
import video6 from '../videos/video6.mp4';


export class SocialStructure extends Component {

    render(){
        return (
            <div>
                <div className = 'dark-line'></div>
                <div className = 'moving-bg bg-3'><p className = 'sentence'>PSZCZOŁY DOSKONALE ZE SOBĄ WSPÓŁPRACUJĄ...</p></div>
                <h4 className = 'big-text'><span className = 'letter0'>S</span><span className = 'letter1'>T</span><span className = 'letter2'>R</span><span className = 'letter3'>U</span>
                <span className = 'letter4'>K</span><span className = 'letter5'>T</span><span className = 'letter6'>U</span><span className = 'letter7'>R</span><span className = 'letter8'>A</span>
                <span className = 'letter9'>&nbsp;</span><span className = 'letter10'>S</span><span className = 'letter11'>P</span><span className = 'letter12'>O</span><span className = 'letter13'>Ł</span>
                <span className = 'letter14'>E</span><span className = 'letter15'>C</span><span className = 'letter16'>Z</span><span className = 'letter17'>N</span><span className = 'letter18'>A</span></h4>
                <div className = 'main-text'>
                    <h5 className = 'first-h'>PSZCZOŁY JAKO ISTOTY SPOŁECZNE</h5>
                    <p>Pszczoły miodne należą do owadów społecznych. Oznacza to, że tworzą kolonie mieszkające w tym samym gnieździe zwanym ulem. Rodziny pszczele mogą składać się z 
                        25-60 tysięcy  pszczół. Ich liczebność zależy od pory roku - najmniej ich jest na przedwiośniu, najwięcej zaś w czerwcu i lipcu.
                        W danej społeczności funkcjonują podgrupy, które wykonują różne zadania, ale każdy z członków pracuje dla dobra ogółu. Najważniejszym celem każdej rodziny
                        pszczelej jest przetrwanie. Samo gniazdo, czyli pszczeli dom, składa się z umieszczonej na górze miodni - miejsca gdzie owady przechowują zapasy oraz dolnej rodni - miejsca gdzie nastepuje wychów
                        czerwiu (larw). Zarówno do składowania miodu jak i wychowu nowych pokoleń, pszczoły budują  z wytwarzanego przez nie wosku plastry. Strukturę plastra stanowi mnóstwo sześciokątnych komórek ułożonych w rzędy, ukośnie odchylonych do góry, tak aby nie wyciekał z nich niedojrzały, płynny miód (nakrop). 
                        Komórki są nieprzypadkowo sześciokątne. Taki kształt zapewnia najbardziej solidną strukturę, przy najlepszym wykorzystaniu dostepnej przestrzeni i użyciu minimalnej ilości wosku.
                        Wyróżniamy dwa typy komórek: mniejsze powszechnie zwane pszczelimi i większe – trutowe. Robotnice do budowy plastra, w warunkach pasiecznych prowokujemy wprawiając w ramki węzę – arkusz czystego wosku pszczelego z wytłoczonymi dnami komórek pszczelich lub trutowych. Dzięki węzie robotnice szybciej odbudowują
                         plastry o pożądanym przez nas kształcie. Warto wspomnieć, że społeczne życie pszczół wymusza na nich konieczność sprawnego komunikowania się między sobą. Pszczoły w tym celu wykorzystują oprócz wspomnianych substancji chemicznych - feromonów, które rozprzestrzeniają między sobą, także ruchy ciała. Mowa tu o charakterystycznym tańcu pszczół. Kiedy zbieraczki wrócą do ula z lotów poszukiwawczych źródła pożytku,
                         zaczynają wirować wokół wejścia do ula, a gdy wlecą do środka wykonują okrężne ruchy. Ruchy te nie są przypadkowe -  w ten sposób pszczoła przekazuje informację, że znalazła pożywienie i  werbuje współpracownice do pomocy. Po sposobie tańca inne pszczoły mogą odczytać jak daleko znajduje się źródło pożytku i w którym kierunku mają się udać.
                    </p>
                    <p><b>W rodzinie pszczelej można wyróżnić trzy typy pszczół :</b></p>
                    <ul>
                        <li>Królowa (matka)</li>
                        <li>Robotnice</li>
                        <li>Trutnie</li>
                    </ul>
                </div>
                <h4 className = 'yellow-title'>TRZY RODZAJE PSZCZÓŁ</h4>
                <div className = 'pictures-box'>
                        <div className = 'pic-child'>
                            <div><img className = 'pic' src = {queen} alt = '' /></div>
                            <h5>MATKA PSZCZELA</h5>
                            <p className = 'space'>Matka pszczela jest najważniejsza w ulu. Posiada w pełni wykształcone organy rozrodcze i jej głównym celem jest składanie jaj - około 2500 na dobę. Jest zazwyczaj jedna w rodzinie, pomijając sytuacje kiedy przez krótki czas jest ich więcej. Taka sytuacja zachodzi podczas rojenia się pszczół lub wymiany matek.
                                Wtedy po walce, którą staczają zostaje tylko jedna z nich. Brak matki jest niezwykle niebezpieczny, gdyż grozi zagładą kolonii. Matka pszczela powstaje z takiego samego (zapłodnionego) jaja jak pszczoła robotnica. To co decyduje o rozwoju matki na tym etapie to
                                wyłączne karmienie mleczkiem pszczelim przez karmicielki (larwy robotnic mają nieco inną dietę). Poza tym znajduje się w specjalnie przygotowanej, wydłużonej komórce zwanej matecznikiem. Rozwój matki trwa 16 dni, a po 6-7 dniach po wygryznieniu z matecznika jest zdolna do zapłodnienia.
                                Odbywa wtedy lot godowy na spotkanie z trutniami. Plemniki w zbiorniczku nasiennym żyją tyle co matka (nawet kilka lat) i muszą wystarczyć na całe jej życie.
                            </p>
                        </div>
                        <div className = 'pic-child'>
                            <div><img className = 'pic' src = {usualbees} alt = ''/></div>
                            <h5>PSZCZOŁY ROBOTNICE</h5>
                            <p className = 'space'>Żyją w sezonie letnim około 6 tygodni, a w zimie około 6 miesięcy. Wykonują wszystkie prace w ulu związane z funkcjonowaniem rodziny. Robotnice rozwijają się z zapłodnionego jaja. Larwa karmiona jest początkowo
                                mleczkiem pszczelim, a później pierzgą z miodem i mleczkiem. Ich rozwój trwa 21 dni. Robotnice posiadają układ rozrodczy podobnie jak matka, gdyż są rodzaju żeńskiego, jednak nie jest on w pełni wykształcony. Z tego powodu z reguły 
                                nie są w stanie składać jaj. Zdarza się jednak (przy braku matki), że karmią się mleczkiem pszczelim, co powoduje rozwój narządów rozrodczych. Robotnica-trutówka może wówczas składać jaja, ale tylko niezapłodnione. Z takich jaj powstaną tylko trutnie.
                                Ciekawą zdolnością robotnic jest wytwarzanie w gruczołach gardzielowych mleczka pszczelego - odżywczej substancji, którą karmią larwy oraz wosku w gruczołach woskowych umieszczonych na stronie brzusznej odwłoka, z którego budują plastry.
                                Główne zadania pszczół robotnic to: 
                                budowa i czyszczenie komórek, dbanie o larwy, pełnienie funkcji strażniczek, wentylowanie ula, odbieranie nektaru od zbieraczek, zbieranie pokarmu i wody.
                            </p>                                  
                        </div>
                        <div className = 'pic-child'>
                            <div><img className = 'pic' src = {drone} alt = ''/></div>
                            <h5>TRUTNIE</h5>
                            <p className = 'space'>Trutnie to samce pszczół. W sezonie letnim jest ich w rodzinie pszczelej około kilku tysięcy. Są one bezczynne, nie wykonują żadnych zadań i prac w ulu. Nie zbierają miodu i pyłku, ani nie posiadają żądła, więc nie są w stanie bronić rodziny pszczelej.  Jedynym ich celem jest zapłodnienie królowej
                                podczas jej lotu godowego. Te, którym uda się spotkanie z królową giną tuż po nim, a pozostałe będą wegetować w ulu do wczesnej jesieni. O ile pszczoły robotnice tolerują obecność trutni latem, tak pod koniec lata przepędzają je z ula, aby nie uszczuplały zimowych zapasów. Niestety poza ulem trutnie giną z chłodu i głodu.
                                Trutnie rozwijają się z niezapłodnionych jaj, a ich rozwój trwa 24 dni. Są większe od robotnic, ale mniejsze od królowej. W ich wyglądzie charakterystyczne są duże oczy. Trutnie żyją około 3 miesięcy.
                                </p>
                        </div>
                    </div>
                    <div className = 'video1'>
                    <video controls >
                        <source src = {video5}  type = 'video/webm' />
                        <source src = {video6}  type = 'video/mp4' />
                    </video>
                </div>    
            </div>
            )
    }
}