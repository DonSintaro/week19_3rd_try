import React from "react";

function Employee(props){


console.log(props);
    
    return (

        <ul className="content">
            <div className="TableHead">
                <div className="tab noHoverHead">Image</div>
                <div className="tab contentHead" onClick={props.handleSort}>Name</div>
                <div className="tab noHoverHead">Phone</div>
                <div className="tab contentHead">Email</div>
                <div className="tab contentHead">DOB</div>
            </div>

            {props.results.map(function(result , i){
                return (<li className="contentData" key={result.name.first + i}>
                    <div className="tab"><img alt={result.name.first + i} className="imageEmploy" src={result.picture.large} /></div>
                    <div className="tab">{result.name.first + " " + result.name.last}</div>
                    <div className="tab">{result.phone}</div>
                    <div className="tab">{result.email}</div>
                    <div className="tab">{result.dob.date.split("T")[0]}</div>
                </li>)
            })}

        </ul>
       
    );

}

export default Employee;