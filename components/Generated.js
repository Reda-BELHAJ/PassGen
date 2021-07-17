import {MdContentCopy} from 'react-icons/md'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Generated = () => {
    const password = 'Nl6v2V*9FW%7sdoO4&c0kUiAgR%'
    state = {
        value: '',
        copied: false,
      };

    return (
        <>
            <div className="relative p-6 my-4 w-full rounded border-b-4 border-red-500 dark:border-red-800 bg-gray-100 dark:bg-gray-800">
                <div className="font-bold text-gray-800 dark:text-gray-100 mr-4 overflow-hidden" >
                    {password}
                </div>
                
                <CopyToClipboard  
                    text={this.state.value}
                    onCopy={() => this.setState({copied: true})}>
                        <button className="font-bold absolute w-5 h-10 text-gray-400 right-3 top-3 dark:text-gray-300" >
                            <MdContentCopy />
                        </button>
                </CopyToClipboard >
            </div>
        </>
    )
}

export default Generated
