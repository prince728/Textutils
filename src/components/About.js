import React, { useState } from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });

    const [btnText, setBtnText] = useState('Enable Dark Mode');

    const toggleStyle = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: '#042743'
            });
            setBtnText('Enable Light Mode');
        } else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            });
            setBtnText('Enable Dark Mode');
        }
    };

    return (
        <div className='container' style={myStyle}>
            <h1 className='my-3'>About TextUtils</h1>

            <div className="accordion" id="accordionExample">

                {/* Item 1 */}
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            style={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne">

                            Analyze Your Text
                        </button>
                    </h2>

                    <div id="collapseOne" className="accordion-collapse collapse show">
                        <div className="accordion-body" style={myStyle}>
                            <strong>TextUtils</strong> helps users analyze their text quickly and efficiently.
                            You can count words, characters, and estimate reading time instantly.
                        </div>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            style={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo">

                            Transform Your Content
                        </button>
                    </h2>

                    <div id="collapseTwo" className="accordion-collapse collapse">
                        <div className="accordion-body" style={myStyle}>
                            Convert your text into uppercase, lowercase, remove extra spaces,
                            and copy formatted text with just one click.
                        </div>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            style={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree">

                            Better User Experience
                        </button>
                    </h2>

                    <div id="collapseThree" className="accordion-collapse collapse">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils offers a clean interface with dark mode support,
                            responsive design, and real-time text preview for better usability.
                        </div>
                    </div>
                </div>

            </div>

            <button
                type="button"
                onClick={toggleStyle}
                className="btn btn-primary my-3">

                {btnText}
            </button>

        </div>
    )
}