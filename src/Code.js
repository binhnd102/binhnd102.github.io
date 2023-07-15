import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useEffect, useState } from 'react';
import {BiCopy, BiPaste} from 'react-icons/bi';

const Code = ({ children, language }) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const timer = setTimeout(
            () => {
                setCopied(false);
            }, 2000)

        return () => clearTimeout(timer)
    }, [copied])

    return (
        <div className="code">
            <CopyToClipboard 
                text={children}
                onCopy={() => setCopied(true)}>
                    <button className='icon copy-icon'>{copied? <BiPaste/>: <BiCopy/>}</button>
            </CopyToClipboard>
            <SyntaxHighlighter language={language}>{ children }</SyntaxHighlighter>
        </div>
    )
}

export default Code;