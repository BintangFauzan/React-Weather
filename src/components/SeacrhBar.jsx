import {useRef} from "react";

export default function SeacrhBar({onSaveCityName, cityName}) {
    const inputCityNameRef = useRef(null);
    //input cityName
    function handleInputCityNameChange() {
        const newCityName = inputCityNameRef.current.value.trim();
        if (newCityName !== "") {
            inputCityNameRef.current.value = "";
            onSaveCityName(newCityName); //Simpan input cityName ke App
        }
    }

    return (
        <>
        <div id='search-bar'>
            <form action="" >
                <input type="text" placeholder='Search...' name="search" className='bg-stone-600 ' required ref={inputCityNameRef} />
                <button type='submit' className='ml-3' onClick={handleInputCityNameChange}>Klik</button>
            </form>
        </div>
            <div className='text-center pt-5'>
                <h2 className='font text-2xl font-bold'>{cityName}</h2>
            </div>
        </>
    )
}