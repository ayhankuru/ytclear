function ytclear(title){ 

        title = title.replace(/\s*\*+\s?\S+\s?\*+$/, ''); 
        title = title.replace(/\s*\[[^\]]+\]$/, '');  
        title = title.replace(/\s*\([^\)]*version\)$/i, '');  
        title = title.replace(/\s*\.(avi|wmv|mpg|mpeg|flv)$/i, '');  
        title = title.replace(/\s*video\s*clip/i, '');  
        title = title.replace(/\s*(of+icial\s*)?(music\s*)?video/i, '');  
        title = title.replace(/\s*(ALBUM TRACK\s*)?(album track\s*)/i, '');  
        title = title.replace(/\s*\(\s*of+icial\s*\)/i, '');  
        title = title.replace(/\s*\(\s*[0-9]{4}\s*\)/i, '');  
        title = title.replace(/\s+\(\s*(HD|HQ)\s*\)$/, '');  
        title = title.replace(/\s+(HD|HQ)\s*$/, '');  
        title = title.replace(/\s+\(?live\)?$/i, ''); 
        title = title.replace(/\(\s*\)/, '');  
        title = title.replace(/\(.*lyrics?\)/i, '');  
        title = title.replace(/\(.*ft.?\)/i, '');
        title = title.replace(/\s*with\s+lyrics?\s*$/i, '');  
        title = title.replace(/^(|.*\s)"(.*)"(\s.*|)$/, '$2');  
        title = title.replace(/^(|.*\s)'(.*)'(\s.*|)$/, '$2');  
        title = title.replace(/^[\/\s,:;~-\s"]+/, '');  
        title = title.replace(/[\/\s,:;~-\s"\s!]+$/, '');   
        title = title.replace(/\((.*?)\)/g, '');
        title = title.replace(/(?:[1-9][0-9])(?:0[48]|[2468][048]|[13579][26])|(?:(?:[2468][048]|[13579][26])00)/,'');
        title = title.trim();        
        
        return title;
};



module.exports=exports=ytclear;


