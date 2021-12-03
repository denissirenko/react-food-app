import { useState } from 'react';

export const Search = ({cb = Function.prototype}) => {
    const [value, setValue] = useState('');

    const handleKey = (e) => {
        if(e.key === 'Enter') {
            handleSubmit()
        }
    };

    const handleSubmit = () => {
        cb(value);
    };

    return (
        <div className='row'>
            <div className="input-field col s12">
                <input 
                    id='seach-field'
                    type="search"
                    placeholder='search'
                    onKeyDown={handleKey}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <button
                    className='btn'
                    style={{
                        position: 'absolute',
                        top: 5,
                        right: 10,
                    }}
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}
