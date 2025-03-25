import React, { useState } from "react";
import { useInView } from "react-intersection-observer";


// https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg

let initialData = new Array(1000).fill(0).map((i, index) => {
    return {
        id: index,
        value: i
    }
})

const Image = ({ url }) => {
    const { ref, inView } = useInView({
        threshold: 0
    })

    return (
        <p ref={ref}>
            {
                inView ?
                    <img src={url} /> :
                    null}
        </p>
    )
}

const Home = () => {
    let [data] = useState(initialData)
    let url = 'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg'

    return (
        <>
            <div>Hello Home page!!!</div>
            <p>Data.length: {data.length}</p>
            {data.map(d =>
                <Image key={d.id} url={url} />
            )}
        </>
    );
}

export default Home