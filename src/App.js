import moment from 'moment'
import React, { Component } from 'react'
import Header from './Header'
import Calendar from './Calendar'

export default class App extends Component {
    state = {
        calendarYM : moment(),
        today : moment()
    }

    moveMonth = (month) => {
        this.setState({
            calendarYM : this.state.calendarYM.add(month,'M')
        })
    }
    
    render(){
        return (
            <div className="test-layout">
                <div className="RCA-app-container">
                    <Header calendarYM={ this.state.calendarYM.format("YYYY년 MM월")}
                        today={this.state.today.format("현재 YYYY - MM - DD")}
                        moveMonth={this.moveMonth}
                    />
                    <Calendar />
                </div>
            </div>
        )
    }
}