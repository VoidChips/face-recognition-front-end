import React from 'react';
import './ImageLinkForm.css';


class ImageLinkForm extends React.Component {
    render() {
        return (
            <div>
                <p className='f3'>
                    {'This Magic Brain will detect faces in your pictures. Give it a try.'}
                </p>
                <div className='center'>
                    <div className='form center pa4 br3 shadow-5'>
                        <input className='f4 pa2 w-70 center' type='text' onChange={this.props.OnInputChange}/>
                        <button
                            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                            onClick={this.props.OnButtonSubmit}>Detect
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageLinkForm;