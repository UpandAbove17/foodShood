import { Outlet } from "react-router-dom";

const About = () => {


    return (
        <div>
            <h1>About Us</h1>
            <p>
            This is A food delivery App and it renders the details of about Us</p>
            <Outlet />
        </div>
    )

}

export default About;


// CLASS based approach

// import React from "react";
// import Profile from "./Profile";


// class About extends React.Component{
//     constructor(props){
//         super(props)
//         console.log("i am parent construtor")
//     }
//     componentDidMount(){
//         console.log(" i am parent componentDidMount")

//     }
//     render(){
//         return(
             
//             <div>
//                 <h1>About Us</h1>
//                 <p>
//                 This is A food delivery App and it renders the details of about Us</p>
//                 <Profile name={"Sachin"}/>
//                 <Profile name2={"Vishwakarma"}/>

//             </div>

//         )
//     }
// }

// export default About;