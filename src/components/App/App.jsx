import React from 'react';
import ResultContainer from '../ResultContainer/ResultContainer';
import SearchBox from '../SearchBox/SearchBox';
import Header from './../header/header';
import './App.css';

const name = require("@rstacruz/startup-name-generator");
// class based components
class App extends React.Component {
    constructor() {
        super();

        this.state = {
            headertext: "Shabdkosh !",
            headerExpanded: true,
            suggestednames: []
        };
    }

    // method for tracking typing
    handleinputchange = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
            suggestednames: inputText ? name(inputText) : [],
        });
    };


    render() {

        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headertext} />
                <SearchBox oninputchange={this.handleinputchange} />
                <ResultContainer suggestednames={this.state.suggestednames} />

            </div>
        );
    }
}




export default App; //is use to imported an use anywhere