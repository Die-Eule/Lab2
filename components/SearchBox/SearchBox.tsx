'use client'
import React from "react";
import "./searchBox.scss";
import { useState } from 'react';

const SearchBox = () => {
    const [formData, setFormData] = useState({ queryLine: 'Find' });

    const saveText = (e:any) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    return (
        <div className="search-box">
            <form>
                <input type="text" name="queryLine" value={formData.queryLine}  onChange={saveText}/>
            </form>
        </div>
    );
}

export default SearchBox;