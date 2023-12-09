//functional Component > normal JS function

const Profile = () => {
    return (
        <div>

            <h2>Profile Component</h2>
        </div>
    )
}
export default Profile;


// Class based Component for Profile > it is basically class
// class based component is rarely used now.
// import React from "react";

// import React from "react"

// class Profile extends React.Component{
//     constructor(props){
//         super(props);
//         console.log("Childconstructor")
//     }

//     componentDidMount(){
//         // best place to make API call
//         console.log("Child - componentDidMount");
//     }

//     render(){
//         console.log("ChildRender");
//         return (
//             <div>
//                 <h2>Profile Page</h2>

//             </div>
//         )
//     }
// }

// export default Profile;