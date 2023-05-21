import { useLoaderData } from "react-router-dom";



const Update = () => {
    const toy = useLoaderData();

    console.log(toy)

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const toyName = form.toyName.value;
        const image = form.image.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const updateToy = {
            name: name,
            email: email,
            toyName: toyName,
            image: image,
            category: category,
            quantity: quantity,
            price: price
        }
        console.log(updateToy);

        fetch(`http://localhost:5000/toy/${toy._id}`, {
            method: 'PUT',
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Product Updated');
                }
            })
    };

    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card w-full shadow-2xl bg-base-300">
                        <form onSubmit={handleUpdate}>
                            <div className="card-body">
                                <div className="gird grid md:grid-cols-2 gap-5">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" defaultValue={toy?.name} name="name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" defaultValue={toy?.email} name="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Toy Name</span>
                                        </label>
                                        <input type="text" defaultValue={toy?.toyName} name="toyName" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Toy Image</span>
                                        </label>
                                        <input type="text" defaultValue={toy?.image} name="image" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Category</span>
                                        </label>
                                        <input type="text" defaultValue={toy?.category} name="category" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Available Quantity</span>
                                        </label>
                                        <input type="text" defaultValue={toy?.quantity} name="quantity" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" defaultValue={toy?.price} name="price" className="input input-bordered" />
                                    </div>

                                </div>

                                <div className="form-control mt-6">
                                    <input className="btn btn-outline lg:px-20 text-red-700" type="submit" value="Update" />

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;