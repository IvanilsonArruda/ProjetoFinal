import Logo from "/assets/Logo.jpg"
//import Image from "next/image"


function Login() {
    return (
        <div>
            <img src = {require("../public/assets/Logo.jpg")}/>
            {/* <Image
            src = {Logo}
            width = {750}
            height = {1135}
            />    */}
        </div>
    ) 
}

export default Login