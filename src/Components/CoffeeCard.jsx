import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const CoffeeCard = ({coffee, setCoffees, coffees}) => {
    const {_id, name, chef, photo, details}=coffee;


    const handleDelete=(_id)=>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/coffee/${_id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Coffee has been deleted.",
                        icon: "success"
                        });
                }
                const remaining=coffees.filter(cof=>cof._id !==_id);
                setCoffees(remaining);
            })
        }
        });
    }
    return (
        <div className="card card-side bg-gray-300 shadow-xl">
            <figure><img className="h-[200px]" src={photo} alt="Movie"/></figure>
            <div className="card-body">
                <p>Name: {name}</p>
                <p>Chef: {chef}</p>
                <p>Details: {details}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">View</button>
                <Link to={`updateCoffee/${_id}`}>
                <button className="btn btn-primary">Edit</button>
                </Link>
                <button onClick={()=>handleDelete(_id)} className="btn bg-red-600 text-white">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;