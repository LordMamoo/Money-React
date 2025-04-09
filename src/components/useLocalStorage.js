import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
    let savedValue = localStorage.getItem(key);
    try {
        savedValue = JSON.parse(savedValue);
    } catch {}

    const [state, setState] = useState(savedValue || initialValue);

    useEffect(() => {
        localStorage.setItem(key, state)
    }, {key, state});

    return [state, setState];
}