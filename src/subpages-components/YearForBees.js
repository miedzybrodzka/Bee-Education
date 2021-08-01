import React, {Component} from 'react';
import { ActionButton } from '../ActionButton';
import video3 from '../videos/video3.webm';
import video4 from '../videos/video4.mp4';
import spring1 from '../images/spring1.jpg';
import summer2 from '../images/summer2.jpg';
import autumn3 from '../images/autumn3.jpg';
import winter4 from '../images/winter4.jpg';



export class YearForBees extends Component {

    constructor(props){
        super(props);
        this.springRef = React.createRef();
        this.summerRef = React.createRef();
        this.autumnRef = React.createRef();
        this.winterRef = React.createRef();
    }

    scrollToElement = (ev) => {
        this[ev.target.id].current.scrollIntoView({behavior: 'smooth', block: 'start'});
    } 

    render(){ 
        return (
            <div>
                <div className = 'dark-line'></div>
                <div className = 'moving-bg bg-5'><p className ='sentence'>W ZGODZIE Z NATURALNYM CYKLEM PRZYRODY...</p></div>
                <h4 className = 'big-text'><span className = 'letter0'>R</span><span className = 'letter1'>O</span><span className = 'letter2'>K</span><span className = 'letter3'>&nbsp;</span>
                <span className = 'letter4'>R</span><span className = 'letter5'>O</span><span className = 'letter6'>D</span><span className = 'letter7'>Z</span><span className = 'letter8'>I</span>
                <span className = 'letter9'>N</span><span className = 'letter10'>Y</span><span className = 'letter11'>&nbsp;</span><span className ='letter12'>P</span><span className = 'letter13'>S</span>
                <span className = 'letter14'>Z</span><span className = 'letter15'>C</span><span className = 'letter16'>Z</span><span className = 'letter17'>E</span><span className = 'letter18'>L</span><span className ='letter19'>E</span><span className = 'letter19'>J</span></h4>
                <h4 className='yellow-2'>PORY ROKU W ŻYCIU PSZCZÓŁ</h4>
                <div className  = 'season-box'>
                    <div className = 'button-wrap'>
                        <ActionButton className = 'spring' action = {this.scrollToElement} id = 'springRef'/>
                        <ActionButton className = 'summer' action = {this.scrollToElement} id = 'summerRef'/>
                        <ActionButton className = 'autumn' action = {this.scrollToElement}  id = 'autumnRef'/>
                        <ActionButton className = 'winter' action = {this.scrollToElement} id = 'winterRef'/>
                    </div>
                </div>
                <div className = 'main-text additional-space'>
                    <h5 className ='first-h' ref={this.springRef}>WIOSNA</h5>
                    <div className = 'season'><img src = {spring1} alt =''/></div>
                        <p>Wczesna wiosna to to czas, w którym rodzina pszczół budzi się do życia po ciężkich miesiącach. Z pewnością jej siły są mocno nadwyrężone, dużo pszczół zginęło podczas zimowych chłodów, a zapasy są już na wyczerpaniu. Wczesna wiosna to czas, gdy
                        pszczół w ulu jest najmniej w całym roku. Pierwsze cieplejsze promienie słońca  sprawiają jednak, że pszczoły dokonują pierwszego oblotu po zimie, sprzątają gniazdo z martwych pszczół, a matki rozpoczynają czerwienie. To znak, że rodzina przeżyła zimę i zaczyna się
                        odradzać, tak jak cała przyroda wokół. Wkrótce nastąpi eksplozja kwiatów i pszczoły muszą się na to przygotować. Ich rozwój jest dynamiczny, muszą nadążyć za rozwijająca się przyrodą. Matki czerwią coraz intensywniej, a przybywające robotnice budują nowe plastry na poszerzające się gniado i przybywające zapasy.
                        Maj i czerwiec to miesiące, w których pszczół w ulu jest już bardzo dużo i dążą do naturalnego podziału, czyli wyrojenia. Jeśli pszczelarz nie dopilnuje teraz pszczół, robotnice mogą założyć mateczniki rojowe z nowymi królowymi, a stara królowa wraz ze sporą ilością robotnic opuści gniazdo, aby założyć nową kolonię.
                        Wiosna to czas, gdzie kwitnie najwięcej roślin: drzewa owocowe, rzepak, mniszek, akacja to tylko niektóre z nich.
                    </p>
                    <h5 ref={this.summerRef}>LATO</h5>
                    <div className = 'season'><img src = {summer2} alt =''/></div>
                    <p>Wczesne lato to wciąż czas, gdzie pszczół jest bardzo dużo, matka intensywnie czerwi i wciąż istnieje ryzyko wyrojenia. Trutnie są obecne w ulu i robotnice nie mają nic przeciwko, gdyż lato tak jak i wiosna to czas dobrobytu dla pszczół. Gorące dni sprawiają, że pszczoły muszą
                        intensywnie wentylować gniazdo, aby się nie przegrzało, a wieczorami często odpoczywają gromadnie przed wejściem do ula. Przełom lipca i czerwca to czas, gdy kwitnie lipa drobnolistna - bardzo miododajne i wartościowe dla pszczół oraz pszczelarzy drzewo. Dla wielu pszczelarzy następuje teraz główne i ostatnie miodobranie co zwiastuje koniec sezonu pszczelarskiego, a następnie przygotowanie pszczół do zimy. Chwilowy spadek czerwienia
                        wzmaga się na nowo pod koniec lipca. Matka musi intensywnie czerwić, aby wychować zimowe pokolenie pszczół, które przetrwa do następnej wiosny. Pszczoły te muszą oszczędzać swoje siły i unikać spracowania, aby być w jak najlepszej kondycji. Koniec lata, to czas gdy pszczelarz musi ułozyć gniazdo zimowe, a takze uzupełnić zabrane pszczołom zapasy miodu i podać w zamian syrop cukrowy. Pszczoła letnia, której
                        wciąż jest sporo w ulu, musi przerobić pokarm i złożyć go w komórkach, po czym spracowana zginie. Dni robią się coraz krótsze, a noce chłodniejsze. Trutnie są wyrzucane z ula, aby nie uszczuplały zimowych zapasów. Pszczoły robią, się bojowo nastawione - obawiają się rabunku i odebrania im zapasów - ich jedynej nadziei na przetrwanie.
                    </p>
                    <h5 ref={this.autumnRef}>JESIEŃ</h5>
                    <div className = 'season'><img src = {autumn3} alt =''/></div>
                    <p>Wczesna jesień to czas, gdy pszczelarz musi kończyć podkarmianie i zacząć główną walkę z największym obecnie wrogiem pszczół - roztoczami <i>Varroa destructor</i>. Warroza jest uporczywym pasożytem pszczół, zawleczonym do Polski w latach siedemdziesiątych ubiegłego stulecia. Niestety pszczoły kiepsko sobie z nim radzą. Ten mały, brązowy roztocz żeruje na pszczołach wysysając z nich hemolimfę i mocno osłabiając. Ich rozwój następuje w komórkach z zasklepionym czerwiem, gdzie wykluwają się ze złożonych jaj i dorastają.
                    Zakażona rodzina zginie bez pomocy człowieka, dlatego zadaniem pszczelarza jest podać odpowiednie leki. Gniazdo pszczół jest teraz zajęte zmagazynowanym pokarmem zimowym, dlatego czerwienie matki ustaje. Czerwienie matki jesienią to zresztą zjawisko niepożądane, gdyż pszczoły muszą teraz oszczędzać siły, a nie wychowywać czerw. Postępująca jesień i przymrozki powodują, że pszczoły zaczynaja zawiązywać kłąb zimowy - gromadzą się i ścieśniają.</p>
                    <h5 ref={this.winterRef}>ZIMA</h5>
                    <div className = 'season'><img src = {winter4} alt =''/></div>
                    <p>Dni są teraz krótkie, noce długie a powietrze mroźne. Nastąpiła cisza w pasiece. To ciężki czas dla pszczół, które są teraz zbite w kłąb zimowy. Prawidłowo zawiązany kłąb zimowy znajduje się w dole plastrów i ma  nad sobą zapasy pokarmu. Podczas gdy zapasy będą się kurczyć, kłąb będzie wędrował do góry. Izolacja kłębu zimowego jest znakomita.
                        We wnętrzu takiej formacji utrzymuje się temperatura na poziomie 14-22 &deg;C, a w czasie wychowu czerwiu, w niektórych miejscach nawet 34,5 &deg;C. Aby utrzymać ciepło pszczoły pobudzają w tym celu mięśnie skrzydeł i nieustannie migrują z zewnętrznych, chłodniejszych warstw kłębu do cieplejszego wnętrza, i spowrotem. Jeśli pszczół jest mało, utrzymanie temperatury mocno nadwyręża ich siły. Metabolizm pszczół w niskiej temperaturze spada i pobierają stosunkowo niewiele pokarmu.
                        Nie wydalają wówczas, zrobią to dopiero podczas pierwszego, wiosennego oblotu pszczół.</p>
                </div>
                <div className='video1'>
                    <video controls >
                        <source src = {video3}  type = 'video/webm' />
                        <source src = {video4}  type = 'video/mp4' />
                    </video>
                </div>   
            </div>
            )
    }
}