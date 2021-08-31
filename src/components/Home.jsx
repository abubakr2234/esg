import React, { useState } from 'react';
import CryptoTile from './CryptoTile';
import BuyForm from './BuyFrom';


import btc from '../assets/bitcoin.png';
import eth from '../assets/blockchain.png';
import dcd from '../assets/dogecoin.png';

const Home = () => {
    const tiles = [
        { id: 1, icon: btc, name: 'BTC', rate: 33834},
        { id: 2, icon: eth, name: 'ETH', rate: 33834},
        { id: 3, icon: dcd, name: 'DCD', rate: 33834},
        

    ];

    const [selectedTile, setSelectedState] = useState(tiles[0]);
    const handleSelect = (data) => {
        setSelectedState(data);
    };

   

    return (
    <div className="container">
        <div className="row">
            <div className="col-6">
                <div className="d-flex">
                    {tiles.map((coin) => (
                        <CryptoTile 

                            key={coin.id} 
                            data={coin}  
                            onClick={handleSelect}
                            selected={coin.id === selectedTile.id}  

                        />
                    ))}
                </div>
                <BuyForm data={selectedTile} />
            </div>
            <div className="col-6">
                col 2
            </div>
        </div>
    </div>
    )
};

export default Home;