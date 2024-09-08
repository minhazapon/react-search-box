
import { useState } from 'react';
import data from './Data'
import React from 'react';



const Search = () => {


    const [filter, setFilter] = useState('')


    const searchText = (event) =>{
        setFilter(event.target.value)
    }

    let dataSearch = data.cardData.filter( items =>{
      return Object.keys(items).some(key =>{
        items[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
      })
    } )

    console.log(dataSearch)



    return (
        <div>


             
             <div className=" flex justify-center items-center gap-3">
             <div>
               <input
               type="text"
               placeholder="Type here"
               value={filter}
               onChange={searchText.bind(this)}
               className="input input-bordered input-info w-[500px] " />
               </div>
               <input className=' btn ' type="submit" value="Submit" />
             </div>


             {/* -------------------------------------- */}

             

             <div className=' flex justify-center'>
                <div className=' grid  md:grid-cols-3 gap-5 '>


                {data.cardData.map((items, index ) =>{


                    return(
                     
                    
                        <div className=" mt-10  mb-10  ">
                    
                        <div className=' '>
                        <div className="card card-compact bg-base-100 w-[400px] h-[400px] shadow-xl">
                            <figure>
                              <img className=' h-[300px] w-[400px]'
                                src={items.img}
                                alt="Shoes" />
                            </figure>
                            <div className="card-body">
                              <h2 className="card-title">{items.name}</h2>
                              <p> {items.location} </p>
                              <p> {items.details} </p>
                            </div>
                          </div>
                        </div>
                    
                    
                       </div>
                    
                    )
                    
                    } )}

                </div>
             </div>
            


            
            
        </div>
    );
};

export default Search;