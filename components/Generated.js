import React from 'react';
import {MdContentCopy} from 'react-icons/md'
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default class Generated extends React.Component {
    password = 'Nl6v2V*9FW%7sdoO4&c0kUiAgR%'

    state = {
        value: this.password,
        length: '',
        copied: false,
      }; 

    handleChange(evt) {
        const pre = (evt.target.validity.valid) ? evt.target.value : this.state.length;

        const min = 1; 
        const max = 40;

        if (pre <= max && pre >= min){
            const length = pre;
            this.setState({ length });
        }
      }

    render() {
        return (
            <>
                <div className="relative p-6 my-4 w-full rounded border-b-4 border-red-500 dark:border-red-800 bg-gray-100 dark:bg-gray-800">
                    <div className="font-bold text-gray-800 dark:text-gray-100 mr-4 overflow-hidden" >
                        {this.state.value}
                    </div>
                    
                    <CopyToClipboard  
                        text={this.state.value}
                        onCopy={() => {
                            this.setState({copied: true})
                            }}>
                            <button className="font-bold absolute w-5 h-10 text-gray-400 right-3 top-3 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-800" >
                                <MdContentCopy />
                            </button>
                    </CopyToClipboard >
                </div>

                <div className="relative p-6 my-4 w-full rounded bg-gray-100 dark:bg-gray-800">
                    <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 text-left mb-4">
                        Customize your password
                    </div>

                    
                        <div className="flex flex-row h-10 w-24 rounded-lg relative">
                            <button
                                className="font-semibold bg-red-700 hover:bg-red-600 text-white  h-full w-20 flex rounded-l focus:outline-none cursor-pointer"
                                onClick={() => {
                                    if (this.state.length - 1 >= 1){
                                        length --;
                                        this.setState({ length });
                                    }
                            }}><span className="m-auto">-</span></button>

                            <input 
                                type="text" pattern="[0-9]*"
                                className="text-center border border-red-700 dark:border-red-700 w-24 text-xs md:text-base flex items-center justify-center cursor-default"
                                maxLength="2" size="2"
                                onInput={this.handleChange.bind(this)} value={this.state.length} />
                            
                            <button
                                className="font-semibold bg-red-700 hover:bg-red-600 text-white h-full w-20 flex rounded-r focus:outline-none cursor-pointer"
                                onClick={() => {
                                    if (this.state.length + 1 <= 40){
                                        length ++;
                                        this.setState({ length });
                                    }
                            }}><span className="m-auto">+</span></button>

                        </div>
                    
                </div>
            </>
        )
    }
}