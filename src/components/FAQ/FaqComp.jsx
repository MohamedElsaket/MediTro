import { useState } from 'react';
import './FaqComp.css'

const FaqComp = () => {

    const [isClicked, setIsClicked] = useState(false)

    function handleClick() {
        return !isClicked ? setIsClicked(true) : setIsClicked(false)
    }

    return ( 
        <div className="faq">
            <div className="container">
                <ul className="d-flex flex-wrap justify-content-center align-items-center">
                    <li className='position-relative'>
                        <h4 onClick={handleClick} role='button'>How Doctor Can Ease Yous Pain ?</h4>
                        {isClicked ? <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of 
                            type and scrambled it to make a type specimen book.
                        </p> : ''}
                    </li>
                    <li className='position-relative'>
                        <h4 onClick={handleClick} role='button'>How Doctor Can Ease Yous Pain ?</h4>
                        {isClicked ? <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of 
                            type and scrambled it to make a type specimen book.
                        </p> : ''}
                    </li>
                    <li className='position-relative'>
                        <h4 onClick={handleClick} role='button'>How Doctor Can Ease Yous Pain ?</h4>
                        {isClicked ? <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of 
                            type and scrambled it to make a type specimen book.
                        </p> : ''}
                    </li>
                    <li className='position-relative'>
                        <h4 onClick={handleClick} role='button'>How Doctor Can Ease Yous Pain ?</h4>
                        {isClicked ? <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of 
                            type and scrambled it to make a type specimen book.
                        </p> : ''}
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default FaqComp;