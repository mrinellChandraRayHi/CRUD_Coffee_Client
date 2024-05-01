import Swal from 'sweetalert2'
const AddCoffee = () => {

    const handleAddCoffee=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const chef=form.chef.value;
        const supplier=form.supplier.vale;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;
        const coffee={name, chef, supplier, taste, category, details, photo}
        console.log(coffee);

        fetch('http://localhost:5000/coffee',{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(coffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            form.reset();
        })
    }
    return (
        <div>
            <h1 className="text-5xl font-bold mb-10">Add a Coffee Form</h1>
            <form onSubmit={handleAddCoffee} className="bg-gray-500 p-10 rounded">
                {/* name and chef */}
                <div className="flex gap-10">
                    <div className="w-full">
                        <label htmlFor="">Name</label>
                        <input className="w-full border border-black" type="text" name="name" id="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="">Chef</label>
                        <input className="w-full border border-black" type="text" name="chef" id="" />
                    </div>
                </div>
                {/* supplier and taste */}
                <div className="flex items-center justify-center gap-5">
                    <div className="w-full">
                        <label htmlFor="">Supplier</label>
                        <input className="w-full border border-black" type="text" name="supplier" id="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="">Taste</label>
                        <input className="w-full border border-black" type="text" name="taste" id="" />
                    </div>
                </div>
                {/* category and details */}
                <div className="flex items-center justify-center gap-5">
                    <div className="w-full">
                        <label htmlFor="">Category</label>
                        <input className="w-full border border-black" type="category" name="category" id="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="">Details</label>
                        <input className="w-full border border-black" type="Details" name="details" id="" />
                    </div>
                </div>
                <div>
                    <div className="mt-2">
                        <label htmlFor="">Photo</label>
                        <input className="w-full border border-black" type="text" name="photo" id="" />
                    </div>
                </div>
                {/* Button */}
                <div className="w-full">
                    <input className="border w-full bg-blue-700 text-white py-2 mt-5 rounded font-bold text-xl" type="submit" value="Add Coffee" />
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;