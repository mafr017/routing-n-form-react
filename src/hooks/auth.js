import { useEffect, useState } from "react";

export const useAuth = () => {
    const [isLoggedIn, isLoggedInSet] = useState(false); 
    const [isReady, isReadySet] = useState(false);

    useEffect(() => {})
    
    return { isLoggedIn, isLoggedInSet, isReady, isReadySet };
}