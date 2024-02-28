import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Data from './Data';
import './Diamond.css'
function LandData() {
    let [users, setUsers] = useState([]);
    const [searchPrice, setSearchPrice] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    const getData = () => {
        axios.get("http://localhost:3500/details-api/get-land")
            .then((response) => {
                if (response.status === 200) {
                    setUsers(response.data.payload);
                }
            })
            .catch((err) => {
                console.log("err is at getdata dashboard", err);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    const handleSearch = () => {
        if (searchPrice.trim() !== '') {
            const filteredData = users.filter((user) => {
                const priceValue = parseFloat(user.price?.replace(/[^\d.-]/g, ''));
                return priceValue && priceValue > parseFloat(searchPrice);
            });
            setFilteredUsers(filteredData);
        } else {
            setFilteredUsers([]);
        }
    };
    

    const renderData = filteredUsers.length > 0 ? filteredUsers : users;

    return (
        <div className="diamond ">
            <div className="image mx-auto text-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ZM_SFXuCNWIqJNXSO2ZHdRnpBrqE5EE48A&usqp=CAU" className='mt-3 mb-3  ' alt="" />
    </div>
    <div className="shortmessage text-center mb-3">
      <p className='text-white  px-5 py-4'>Explore the fertile expanse of lands you desire, offering a myriad of farming and business opportunities. Unlock the potential of this expansive terrain, where agriculture thrives and commerce flourishes. Embrace a world where your dreams of land ownership merge seamlessly with your entrepreneurial aspirations. Step into a realm where the possibilities are as vast as the horizons that stretch before you. Welcome to the lands that hold the key to your farming and business ventures.</p>
    </div>
            <div className="row">
                <div className="col-12 text-center mb-3">
                    <input
                        type="text"
                        placeholder="Search by price..."
                        value={searchPrice}
                        onChange={(e) => setSearchPrice(e.target.value)}
                        className='border border-50'
                    />
                    <button className="btn btn-primary ms-2" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>

            <div className='row justify-content-center'>
                <div >
                    {renderData.map(({ price, title, address, SuitableCrop, phone, image1, image2, image3 }, index) => (
                        <Data
                            key={index}
                            price={price}
                            title={title}
                            address={address}
                            SuitableCrop={SuitableCrop}
                            phone={phone}
                            image1={image1}
                            image2={image2}
                            image3={image3}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LandData;
