import React from "react";

const AdvCard = () => {

    // state = {
    //     posts: []
    // };

    // componentDidMount = () => {
    //     this.getTripPost();
    // };

    // // GETing trip data with axios
    // getTripPost = () => {
    //     axios.get('/api')
    //         .then((response) => {
    //             const data = response.data;
    //             this.setState({ posts: data });
    //             console.log('Data has been received!');
    //         })
    //         .catch(() => {
    //             console.log('Error retrieving data!');
    //         });
    // };

    return (
        <>
            <div className="col mb-4">
                <div className="card h-100">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdvCard;