import { useEffect, useState } from "react";

const useOnLine = () => {

    const[isOnLine , setIsOnLine] = useState(true);

    useEffect(() => {
        

        const handleOnline = () => {
            setIsOnLine(true);
        };
        const handleOffLine = () => {
            setIsOnLine(false);
        }

        window.addEventListener("online" , handleOnline) 
        window.addEventListener("offline" , handleOffLine)

        return () => {
            window.removeEventListener( "online" , handleOnline)
            window.removeEventListener( "online" , handleOffLine)

        }

    },[]);

    return isOnLine; // true or false 
}


export default useOnLine;