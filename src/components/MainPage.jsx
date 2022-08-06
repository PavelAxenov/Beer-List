import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../src/styles/css/main.css"
import BeerList from "./BeerList";
import Pagination from "./Pagination";

export default function List() {

    const [beer, setBeer] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setcurrentPage] = useState(1);
    const [countPerPage] = useState(6);

    useEffect(() => {
        const getBeers = async () => {
            setLoading(true);
            const res = await axios.get('https://api.punkapi.com/v2/beers');
            setBeer(res.data);
            setLoading(false);
        }

        getBeers();

    }, [])

    const lastBeerIndex = currentPage * countPerPage
    const firstBeerIndex = lastBeerIndex - countPerPage
    const currentBeer = beer.slice(firstBeerIndex, lastBeerIndex)

    const paginate = pageNum => setcurrentPage(pageNum)

    return (
        <div>
            <BeerList beer={currentBeer} loading={loading} allBeer={beer} />
            <Pagination countPerPage={countPerPage} totalBeers={beer.length} paginate={paginate}/>
        </div>
    )
}
  