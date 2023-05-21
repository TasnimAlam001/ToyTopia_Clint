

const AddToy = () => {
    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const toyName = form.toyName.value;
        const image = form.image.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const addToy = {
            name: name,
            email: email,
            toyName: toyName,
            img: image,
            category: category,
            quantity: quantity,
            price: price
        }
        console.log(addToy);

        fetch('https://assignment-11-server-seven-dusky.vercel.app/toy', {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'content-type': 'application/json'
            },
            body: JSON.stringify( addToy )
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    alert('Product added')
                }
            })
    };



    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card w-full shadow-2xl bg-base-300">
                        <form onSubmit={handleAddToy}>
                            <div className="card-body">
                                <div className="gird grid md:grid-cols-2 gap-5">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="Name" name="name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" name="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Toy Name</span>
                                        </label>
                                        <input type="text" placeholder="Toy Name" name="toyName" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Toy Image</span>
                                        </label>
                                        <input type="text" placeholder="Image" name="image" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Category</span>
                                        </label>
                                        <input type="text" placeholder="Category" name="category" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Available Quantity</span>
                                        </label>
                                        <input type="text" placeholder="Available Quantity" name="quantity" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" placeholder="Price" name="price" className="input input-bordered" />
                                    </div>

                                </div>

                                <div className="form-control mt-6">
                                    <input className="btn btn-outline lg:px-20 text-red-700" type="submit" value="Add Toy" />

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToy;