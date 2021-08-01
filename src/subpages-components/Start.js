import React, {Component} from 'react';
import bee1 from '../images/bee1.jpg';
import bee2 from '../images/bee2.jpg';
import bee3 from '../images/bee3.jpg';
import bee4 from '../images/bee4.jpg';
import smallbee from '../images/smallbee.jpg';
import video1 from '../videos/video1.webm';
import video2 from '../videos/video2.mp4';



export class Start extends Component {

    constructor(props) {
        super(props);
        this.state={
            showLetters: []
        }
    }

    componentDidMount() {

        let tempShowLetters = [...this.state.showLetters];
        while(tempShowLetters.length < 13){
            tempShowLetters.push('letter');
        }
        this.setState({showLetters: tempShowLetters});
        window.addEventListener('scroll', this.flyingLetters);
    }


    flyingLetters = (ev) => {
                let offset = window.innerHeight + window.pageYOffset;
                if(offset >= document.body.scrollHeight - 1800){
                    let tempArr = [...this.state.showLetters].map((val, indx) => `${val}${indx}`);
                    console.log(tempArr)
                    this.setState({showLetters: tempArr})
                    window.removeEventListener('scroll', this.flyingLetters);
                }   
    }
     
   

    render(){
        
        return (
            <div>
                <div className = 'background'>
                <p className = 'secret'>Sekretne życie </p><p className = 'secret secret2'> pszczół...</p>
                <div className = 'smallbee'><img className = 'smallbeeImg'src = {smallbee}  alt = '' /></div>
                    <div className = 'grid'>
                            <div className = 'one'>
                                <div className = 'image1'><img  src = {bee1} alt = ''/></div>
                            </div>
                            <div className = 'two'>
                                <div className = 'image2'><img  src = {bee2} alt = ''/></div>
                            </div>
                            <div className = 'three'>
                                <div className = 'image3'><img  src = {bee3} alt = ''/></div>
                            </div>
                            <div className='four'>
                                <div className='image4'><img  src={bee4} alt =''/></div>
                            </div>
                    </div>
                    <div className = 'line1'></div>
                    <div className = 'line2'></div>
                    <div className = 'line3'></div>
                    <div className = 'line4'></div>
                    <div className = 'line5'></div>
                    <div className = 'line6'></div>
                </div>
                    <h4 className = 'big-text'><span className = {this.state.showLetters[0]}>Ś</span><span className = {this.state.showLetters[1]}>W</span><span className={this.state.showLetters[2]}>I</span >
                    <span className = {this.state.showLetters[3]}>A</span><span className = {this.state.showLetters[4]}>T</span><span className = {this.state.showLetters[5]}>&nbsp;</span>
                    <span className = {this.state.showLetters[6]}>P</span><span className = {this.state.showLetters[7]}>S</span><span className = {this.state.showLetters[8]}>Z</span><span className = {this.state.showLetters[9]}>C</span>
                    <span className = {this.state.showLetters[10]}>Z</span><span className = {this.state.showLetters[11]}>Ó</span><span className = {this.state.showLetters[12]}>Ł</span></h4>
                    <div className = 'main-text starting-text'><p>Te małe owady prowadzą fascynujące, lecz sekretne życie we wnętrzu ula. Tworzą interesujące społeczne relacje
                        i zaskakują swoją znakomitą organizacją życia w kolonii. Wszystkie pszczoły mają swoje zadania i ciężko razem pracują, aby 
                        przetrwać. Jako owady zapylające są niezwykle ważnym elementem wielu ekosystemów, a ludzie czerpią wiele korzyści z ich obecności.
                        Jeśli chcesz dowiedzieć się jak żyją pszczoły, co mogą nam dać i poznać parę ciekawostek, zapraszam w podróż po małym świecie pszczół.
                    </p>
                    </div>
                    <div className = 'video1'>
                        <video controls >
                            <source src = {video1}  type = 'video/webm' />
                            <source src = {video2}  type = 'video/mp4' />
                        </video>
                    </div>    
                </div>       
                )   
    
    }
}