import React from 'react';
import TimerButton from '../Timerbutton/TimerButton';
import './Timer.css';
type timerStateType = {
    minutes: number,
    seconds: number,
    isOn: boolean,
}
class Timer extends React.Component<{}, timerStateType> {
    myInterval: ReturnType<typeof setInterval>;
    constructor(props: any) {
        super(props);
        this.state = {
            minutes: 1,
            seconds: 0,
            isOn: false,
        };
        this.myInterval = props
        this.startTimer = this.startTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }
    startTimer() {
        console.log('Starting timer.');
        if (this.state.isOn === true) {
            return;
        }
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state;
            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1,
                }));
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    alert(`Time's Up`)
                    this.resetTimer();
                    clearInterval(this.myInterval);
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59,
                    }));
                }
            }
        }, 1000);
        this.setState({ isOn: true });
    }
    stopTimer = () => {
        console.log('Stoping timer.');
        clearInterval(this.myInterval);
        this.setState(
            { isOn: false }
        )
    }
    resetTimer() {
        console.log('Resetting timer.');
        this.stopTimer();
        this.setState({
            minutes: 1,
            seconds: 0,
        })
    }
    render = () => {
        return (
            <div>
                <div className="timer-container">
                    <h1 > &nbsp; TIMER APP &nbsp;</h1>
                    <h1> Minutes &nbsp;&nbsp; {this.state.minutes} &nbsp; &nbsp; Seconds &nbsp; &nbsp;  {this.state.seconds}  </h1>
                    <div className="timer-button-container">
                        <TimerButton        
                            buttonAction={this.startTimer}
                            buttonValue={'Start'} 
                            />
                        <TimerButton
                            buttonAction={this.stopTimer}
                            buttonValue={'Stop'} />
                        <TimerButton
                            buttonAction={this.resetTimer}
                            buttonValue={'Reset'} />
                    </div>
                </div>
            </div>
        );
    };
}
export default Timer;