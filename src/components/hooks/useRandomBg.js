import { useEffect } from "react";

const useRandomBg = () => {
    // const [width, setWidth] = useState(window.innerWidth);
    // const [height, setHeight] = useState(window.innerHeight);

    // useEffect(() => {
    //     const updateDimensions = () => {
    //         setWidth(window.innerWidth);
    //         setHeight(window.innerHeight);
    //     }
    //     window.addEventListener("resize", updateDimensions);
    //     return () => window.removeEventListener("resize", updateDimensions);
    // }, []);
    const fetchBg = async () => {
        await fetch(`https://picsum.photos/${window.innerWidth}/${window.innerHeight}`)
            .then(res => {
                document.body.style.backgroundImage = `url(${res.url})`;
            })
    }

    useEffect(() => {
        fetchBg();
    }, [])
    return { fetchBg };
}

export default useRandomBg;
