import React from 'react'
import Cards from './card'
import Categories from './categories'

export default function MergedPage() {
    return (
        <div class='merge'>
            <div className="cat-side">
                <Categories />
            </div>
            <div class='item-side'>
                <Cards display='none' />
            </div>
        </div>
    )
}
