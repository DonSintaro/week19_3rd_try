import React from "react";




function SearchBar(props){
return (


    <form className="input-group mb-3 lookup">
        <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="text" id="button-addon1"  onClick={props.handleFormSubmit} value={props.searched}>Search</button>
        </div>

        <input onChange={props.handleInputChange} name="searched" type="text" className="form-control" placeholder="Employee Name" aria-label="Employee" aria-describedby="basic-addon1" value={props.searched}/>

    </form>


    // <form>
    //   <div className="form-group">
    //     <label htmlFor="searched">Search:</label>
    //     <input
    //       onChange={props.handleInputChange}
    //       value={props.searched}
    //       name="searched"
    //       type="text"
    //       className="form-control"
    //       placeholder="Search for a Gif"
    //       id="searched"
    //     />
    //     <button onClick={props.handleFormSubmit} value={props.searched} className="btn btn-primary mt-3">
    //       Search
    //     </button>
    //   </div>
    // </form>
)

}


export default SearchBar;