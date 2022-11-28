import { useState, useEffect } from "react";
import  { updateSite } from '../service/data-service.js';
export function KeySite({ item , handleSaveKey }) {

    const [editing, setEditing] = useState(false);
    const [noEditable, setNoEditable] = useState(false);
    const [key, setKey] = useState();
    const [value, setValue] = useState();

    useEffect(() => {
        setKey(item[0]);
        setValue(item[1]);
    }, [item]);



    function handleEdit() {
        setEditing(!editing);
        setNoEditable(!noEditable);
    }

    

    useEffect(() => {
        if (value === true) {
            setValue("Si");
        } else if (value === false) {
            setValue("No");
        }
    }, [value]);

    useEffect(() => {
        if (key === "id" || key === "createdAt" || key === "updatedAt") {
            setNoEditable(true);
        }
    }, [key]);

    useEffect(() => {
        if (key === "createdAt" || key === "updatedAt") {
            setValue(new Date(value).toLocaleString('es-CL'));
        }
    }, [value]);






    return (

        <li className='list-group-item d-flex justify-content-between align-items-center'><strong>{key}:</strong>
            <span>{
                editing ? (
                    <form onSubmit={e => {
                        e.preventDefault();
                        handleSaveKey(key, value);

                        handleEdit();

                    }} >
                        <input
                        type="text"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                           

                         />
                    </form>


                ) : (
                    value
                )}{
                    !noEditable ? (
                        <i className="fa-solid fa-pen-to-square ms-3" onClick={handleEdit}></i>
                    ) : (
                        <></>
                    )


                } </span>

        </li>
    )
}

/*             }<i className="fa-solid fa-pen-to-square ms-3" ></i></span></li>


    )
} */