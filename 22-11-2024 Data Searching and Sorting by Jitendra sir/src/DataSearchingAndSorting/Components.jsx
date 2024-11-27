import React, { useState } from 'react'

export default function Components() {
    const [filterd, setFilterd] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setsortOrder] = useState("asc");

    const data = [
        { id: 1, name: "Rolce-Royce Ghost", category: "Car", price: 120000000 },
        { id: 2, name: "Hayabua", category: "Bike", price: 1800000 },
        { id: 3, name: "Fortuner", category: "Car", price: 5200000 },
        { id: 4, name: "Ninja H2r", category: "Bike", price: 7800000 },
        { id: 5, name: "Scorpio", category: "Car", price: 1200000 },
        { id: 6, name: "R15", category: "Bike", price: 250000 },
        { id: 7, name: "Supra MK4", category: "Car", price: 8000000 }
    ]

    const filteredData = 
        filterd == "All" ? data : data.filter((item) => item.category == filterd
    );

    const searchedData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedData = [...data].sort((a, b) =>
        sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

    return (
        <div>
            <h1>Filter by Category</h1>
            <select onChange={(e) => setFilterd(e.target.value)}>
                <option value="All">All</option>
                <option value="Car">Car</option>
                <option value="Bike">Bike</option>
            </select>

            <ul>
                {filteredData.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.category} - ${item.price}
                    </li>
                ))}
            </ul>

            <h1>Search by Name</h1>
            <input type="text" placeholder='search item' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

            <ul>
                {searchedData.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.category} - ${item.price}
                    </li>
                ))}
            </ul>

            <h1>Sort by Price</h1>
            <button onClick={() => setsortOrder("asc")}>sort Ascending</button>
            <button onClick={() => setsortOrder("dasc")}>sort Descrnding</button>

            <ul>
                {sortedData.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.category} - ${item.price}
                    </li>
                ))}
            </ul>

        </div>
    )
}
