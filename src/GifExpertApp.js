import React,{ useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setcategories] = useState(['Dragon Ball']);

    return (
        <div>
            <div className="header">
                <h1>GifExpertApp</h1>
                <AddCategory setCateories={ setcategories }/>
            </div>

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category }/>
                    ))
                }
            </ol>
        </div>
    )
}