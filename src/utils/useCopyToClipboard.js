import React, { useState } from 'react';
import copy from 'copy-to-clipboard';


export default function useCopyToClipboard() {
    const [isCopied, setCopied] = useState(false);

    function handleCopy(text){
        if(text === "string" || typeof text === "number" || text !== null){
            //copy
            copy(text.toString());
            setCopied(true);
        }else{
            // do not copy 
            setCopied(false);
            console.error(`can not copy ${typeof text} to clipboard`);
        }
    }
    return handleCopy;
}