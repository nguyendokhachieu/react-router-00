import { useState } from 'react';
import { Prompt } from 'react-router-dom';

export default function LeaveMe() {
    let [isChecked, setIsChecked] = useState(false);

    function handleOnChange(e) {
        setIsChecked(e.target.checked);
    }

    console.log(isChecked);

    return (
        <div>
            <Prompt 
                when={ isChecked }
                message={ location => ( //location là nơi muốn tới
                    `Are you sure to leave ?`
                )}
            />
            <input onChange={ handleOnChange } type="checkbox" name="checkbox" id="checkbox"/>
        </div>
    );
}