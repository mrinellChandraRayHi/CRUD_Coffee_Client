import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee=useLoaderData();
    const {_id, name, quantity, taste}=coffee;

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
        const updatedCoffee={name, chef, supplier, taste, category, details, photo}
        console.log(updatedCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Coffee Updated Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            form.reset();
        })
    }
    return (
        <div>
        <h1 className="text-5xl font-bold mb-10">Update Coffee Form</h1>
        <form onSubmit={handleAddCoffee} className="bg-gray-500 p-10 rounded">
            {/* name and chef */}
            <div className="flex gap-10">
                <div className="w-full">
                    <label htmlFor="">Name</label>
                    <input className="w-full border border-black" defaultValue={coffee?.name} type="text" name="name" id="" />
                </div>
                <div className="w-full">
                    <label htmlFor="">Chef</label>
                    <input className="w-full border border-black" defaultValue={coffee.chef} type="text" name="chef" id="" />
                </div>
            </div>
            {/* supplier and taste */}
            <div className="flex items-center justify-center gap-5">
                <div className="w-full">
                    <label htmlFor="">Supplier</label>
                    <input className="w-full border border-black" defaultValue={coffee?.supplier} type="text" name="supplier" id="" />
                </div>
                <div className="w-full">
                    <label htmlFor="">Taste</label>
                    <input className="w-full border border-black" defaultValue={coffee?.taste} type="text" name="taste" id="" />
                </div>
            </div>
            {/* category and details */}
            <div className="flex items-center justify-center gap-5">
                <div className="w-full">
                    <label htmlFor="">Category</label>
                    <input className="w-full border border-black" defaultValue={coffee?.category} type="category" name="category" id="" />
                </div>
                <div className="w-full">
                    <label htmlFor="">Details</label>
                    <input className="w-full border border-black" defaultValue={coffee?.details} type="Details" name="details" id="" />
                </div>
            </div>
            <div>
                <div className="mt-2">
                    <label htmlFor="">Photo</label>
                    <input className="w-full border border-black" defaultValue={coffee?.photo} type="text" name="photo" id="" />
                </div>
            </div>
            {/* Button */}
            <div className="w-full">
                <input className="border w-full bg-blue-700 text-white py-2 mt-5 rounded font-bold text-xl" type="submit" value="Update Coffee" />
            </div>
        </form>
    </div>
    );
};

export default UpdateCoffee;