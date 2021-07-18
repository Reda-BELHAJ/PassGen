import React from 'react';
import {MdContentCopy} from 'react-icons/md'
import {CopyToClipboard} from 'react-copy-to-clipboard';
var generator = require('generate-password');

export default class Generated extends React.Component {
    password = '5h4cDKzz4wwZv@ba'
    defaultLenght = 16

    state = {
        value: this.password,
        length: this.defaultLenght,
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
    
    newPassword = generator.generate({
        length: this.state.length,
        numbers: true
    });

    render() {
        console.log(this.password)
        return (
            <>
                <div className="md:grid md:grid-cols-6 md:gap-4">
                    <div className="col-span-5 relative p-6 my-4 w-full rounded border-b-4 border-red-500 dark:border-red-800 bg-gray-100 dark:bg-gray-800">
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
                    <div className="flex flex-row my-4 w-full rounded-lg relative">
                        <button
                            className="font-bold bg-red-700 hover:bg-red-600 text-white  h-full w-20 flex rounded-l focus:outline-none cursor-pointer"
                            onClick={() => {
                                if (this.state.length - 1 >= 1){
                                    length = this.state.length - 1;
                                    this.setState({ length });
                                }
                        }}><span className="m-auto">-</span></button>

                        <input 
                            type="text" pattern="[0-9]*"
                            className="bg-gray-200 dark:bg-gray-900 font-bold text-center border border-red-700 dark:border-red-700 w-full text-xs md:text-base flex items-center justify-center cursor-default"
                            onInput={this.handleChange.bind(this)} value={this.state.length} />
                        
                        <button
                            className="font-bold bg-red-700 hover:bg-red-600 text-white h-full w-20 flex rounded-r focus:outline-none cursor-pointer"
                            onClick={() => {
                                if (this.state.length + 1 <= 40){
                                    length = this.state.length + 1;
                                    this.setState({ length });
                                }
                        }}><span className="m-auto">+</span></button>

                    </div>
                </div>

                <div className="relative p-6 my-4 w-full rounded bg-gray-100 dark:bg-gray-800">
                    <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 text-left mb-4">
                        Customize your password
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="block">
                            <div className="mt-2">
                                <div>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="rounded form-checkbox text-red-700 h-6 w-6" defaultChecked/>
                                    <span className="ml-2">Option 1</span>
                                </label>
                                </div>
                                <div>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="rounded form-checkbox text-red-700 h-6 w-6" defaultChecked/>
                                    <span className="ml-2">Option 2</span>
                                </label>
                                </div>
                                <div>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="rounded form-checkbox text-red-700 h-6 w-6"/>
                                    <span className="ml-2">Option 3</span>
                                </label>
                                </div>
                                <div>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="rounded form-checkbox text-red-700 h-6 w-6"/>
                                    <span className="ml-2">Option 4</span>
                                </label>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="mt-2">
                                <div className="mt-1">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio text-red-700 h-6 w-6" name="radio-sizes" value="1"/>
                                        <span className="ml-3 text-lg">Option 1</span>
                                    </label>
                                </div>
                                <div className="mt-1">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio text-red-700 h-6 w-6" name="radio-sizes" value="2"/>
                                        <span className="ml-3 text-lg">Option 2</span>
                                    </label>
                                </div>
                                <div className="mt-1">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio text-red-700 h-6 w-6" name="radio-sizes" value="3"/>
                                        <span className="ml-3 text-lg">Option 3</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </>
        )
    }
}