import {useState} from "react";

// Make sure to declare props so you can use them.
const Form = (props) => {
    // noun formData, verb setFormData.  Trailing comma
    const [formData, setFormData] = useState({ 
        searchterm: "",
    });
    // handleChange- updats formData when we type into form
    const handleChange = (event) => {
        // use event object to detect key and value to update.  Dynamic property keys
        setFormData({ ...formData, [event.target.name]: event.target.value});
    };
    const handleSubmit = (event) => {
        //  prevent the page from refreshing on form submission
        event.preventDefault();
        // pass the search term to movieSearch prop
        props.moviesearch(formData.searchterm);
    };   

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="searchterm" 
                onChange={handleChange}
                value={formData.searchterm}
                />
                <input type="submit" value="sumbit"/>
            </form>
        </div>
          
    );
};

export default Form;