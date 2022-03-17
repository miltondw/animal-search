import { useEffect } from "react";

export default function useWindow(eventName: keyof WindowEventMap, callback: any) {
    useEffect(() => {
        window.addEventListener(eventName, callback);

        return () => {
            window.removeEventListener(eventName, callback)
        }
    })
}
