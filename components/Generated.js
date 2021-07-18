import React from 'react';
import {MdContentCopy} from 'react-icons/md'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import NymberInput from './NymberInput'

export default class Generated extends React.Component {
    password = 'Nl6v2V*9FW%7sdoO4&c0kUiAgR%'

    state = {
        value: this.password,
        copied: false,
      };

    render() {
        return (
            <>
                <div className="relative p-6 my-4 w-full rounded border-b-4 border-red-500 dark:border-red-800 bg-gray-100 dark:bg-gray-800">
                    <div className="font-bold text-gray-800 dark:text-gray-100 mr-4 overflow-hidden" >
                        {this.password}
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
                    <NymberInput />
                </div>
            </>
        )
    }
}