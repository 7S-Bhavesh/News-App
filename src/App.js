import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=9
  apiKey=process.env.REACT_APP_NEWS_API_KEY

  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress} 
        height={2}
      />
          <Routes>
            <Route path="/" element={<News apiKey={this.apiKey}  setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country="in" category="general"/>} />
            <Route path="/general" element={<News apiKey={this.apiKey}  setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/>} />
            <Route path="/entertainment" element={<News apiKey={this.apiKey}  setProgress={this.setProgress}   key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>} />
            <Route path="/sports" element={<News apiKey={this.apiKey}  setProgress={this.setProgress}  key="sports" pageSize={this.pageSize} country="in" category="sports"/>} />
            <Route path="/business" element={<News apiKey={this.apiKey}  setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business"/>} />
            <Route path="/health" element={<News apiKey={this.apiKey}  setProgress={this.setProgress}  key="health" pageSize={this.pageSize} country="in" category="health"/>} />
            <Route path="/technology" element={<News apiKey={this.apiKey}  setProgress={this.setProgress} key="technology"pageSize={this.pageSize} country="in" category="technology"/>} />
            <Route path="/science" element={<News apiKey={this.apiKey}  setProgress={this.setProgress}   key="science" pageSize={this.pageSize} country="in" category="science"/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}