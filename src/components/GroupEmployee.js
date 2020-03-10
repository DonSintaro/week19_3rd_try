import React, { Component } from "react";
import Employee from "./Employee";
import DirectoryHeader from "./DirectoryHeader"
import API from "../utils/API";
import SearchBar from "./SearchBar"

// import { render } from "@testing-library/react";


class GroupEmployee extends Component {
    state = {
      results: [],
      searched: "",
      searchedDOB: "",
      hold: [],
      sorted:true
    };

    componentDidMount() {
        let self = this;
        return (API.search().then(function(data){
            self.setState({results: data.data.results});
            self.setState({hold: data.data.results});
            console.log(self.state.results)
        
            })
        )
    }



    handleInputChange = event => {

        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
          });

        
      };

    handleFormSubmit = event => {
        event.preventDefault();

        const value = event.target.value;

        const newResult = this.state.hold.filter(result => (result.name.first + " " + result.name.last).includes(value))

        this.setState({
          results: newResult
        });
    };

    handleSort = () => {

        var sortedA
        
        if(this.state.sorted){
            sortedA = (this.state.results).sort((a,b) => ((a.name.first + " " + a.name.last) > (b.name.first + " " + b.name.last) ? 1 : -1));

        this.setState({
            sorted:false
        })
        
        }
        else{
            sortedA = (this.state.results).sort((a,b) => ((b.name.first + " " + b.name.last) > (a.name.first + " " + a.name.last) ? 1 : -1));

        this.setState({
            sorted:true
        })
        }

        this.setState({
            results: sortedA
          });

    }


    render(){
    return (
        <div>
            <DirectoryHeader/>
            <div className="container content">

                <SearchBar  
                searched={this.state.searched} 
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}/>


                <Employee results={this.state.results}
                handleSort={this.handleSort}
                
                />



            </div>
        </div>
    )

    }



};





export default GroupEmployee;